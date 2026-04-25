(function () {
  const data = window.researchMapData;
  const svg = document.getElementById("graph-svg");
  const filterBar = document.getElementById("filter-bar");
  const repoList = document.getElementById("repo-list");
  const searchInput = document.getElementById("search-input");
  const modeTabs = Array.from(document.querySelectorAll(".mode-tab"));
  const starfield = document.getElementById("starfield");

  const themeCount = new Set(data.nodes.flatMap((node) => node.themes)).size;
  const years = data.nodes.map((node) => node.year);
  const minYear = Math.min.apply(null, years);
  const maxYear = Math.max.apply(null, years);

  let activeTheme = "All";
  let selectedNodeId = data.nodes.find((node) => node.id === "damagearbiter")?.id || data.nodes[0].id;
  let activeMode = "network";
  let searchTerm = "";

  document.getElementById("paper-count").textContent = String(data.nodes.length);
  document.getElementById("theme-count").textContent = String(themeCount);
  document.getElementById("year-range").textContent = minYear + "-" + maxYear;

  function renderScholar(snapshot) {
    if (!snapshot || !snapshot.metrics) {
      return;
    }

    const citations = document.getElementById("scholar-citations");
    const hIndex = document.getElementById("scholar-hindex");
    const updated = document.getElementById("scholar-updated");
    const fetchedAt = snapshot.fetchedAt || snapshot.lastAttemptedAt;

    citations.textContent = String(snapshot.metrics.citations?.all || "--");
    hIndex.textContent = String(snapshot.metrics.hIndex?.all || "--");

    if (fetchedAt) {
      updated.textContent = "updated " + new Date(fetchedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    }
  }

  function loadScholarSnapshot() {
    fetch("./raw/scholar/google-scholar.json", { cache: "no-store" })
      .then((response) => response.ok ? response.json() : null)
      .then(renderScholar)
      .catch(() => {
        const updated = document.getElementById("scholar-updated");
        if (updated) {
          updated.textContent = "Scholar snapshot unavailable";
        }
      });
  }

  function filteredNodes() {
    const query = searchTerm.trim().toLowerCase();

    return data.nodes.filter((node) => {
      const themeMatch = activeTheme === "All" || node.themes.indexOf(activeTheme) >= 0;
      if (!themeMatch) {
        return false;
      }

      if (!query) {
        return true;
      }

      const searchable = [
        node.title,
        node.shortTitle,
        node.summary,
        node.impact,
        node.type,
        node.status,
        node.venue,
        node.authors,
        node.repository?.name,
        node.repository?.language,
        ...(node.themes || []),
        ...(node.methods || [])
      ].join(" ").toLowerCase();

      return searchable.includes(query);
    });
  }

  function buildFilters() {
    data.themes.forEach((theme) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-chip" + (theme === activeTheme ? " active" : "");
      button.textContent = theme;
      button.addEventListener("click", () => {
        activeTheme = theme;
        syncFilterState();
        renderAll();
      });
      filterBar.appendChild(button);
    });
  }

  function syncFilterState() {
    filterBar.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.classList.toggle("active", chip.textContent === activeTheme);
    });
  }

  function renderRepoList() {
    repoList.innerHTML = "";

    filteredNodes().forEach((node) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "repo-card" + (node.id === selectedNodeId ? " active" : "");

      const repoName = node.repository?.name || "No repository";
      const stats = node.repository
        ? `${node.repository.language} | ${node.repository.commits} commits | ${node.repository.stars} stars`
        : "Repository metadata pending";

      button.innerHTML = `
        <small>${node.type} | ${node.year}</small>
        <strong>${node.shortTitle}</strong>
        <span>${repoName}</span>
        <span>${stats}</span>
      `;

      button.addEventListener("click", () => {
        selectNode(node.id);
      });

      repoList.appendChild(button);
    });
  }

  function nodePosition(node, visibleNodes) {
    if (activeMode === "network") {
      return node.position;
    }

    if (activeMode === "timeline") {
      const yearSpan = Math.max(1, maxYear - minYear);
      const sameYearNodes = visibleNodes.filter((candidate) => candidate.year === node.year);
      const yearIndex = sameYearNodes.findIndex((candidate) => candidate.id === node.id);
      const x = 120 + ((node.year - minYear) / yearSpan) * 740;
      const y = 180 + yearIndex * 140;
      return { x, y };
    }

    const rank = visibleNodes
      .slice()
      .sort((a, b) => (b.repository?.commits || 0) - (a.repository?.commits || 0));
    const index = rank.findIndex((candidate) => candidate.id === node.id);
    const angle = (Math.PI * 2 * index) / Math.max(1, rank.length);
    const commits = node.repository?.commits || 10;
    const radius = 180 + Math.min(130, commits * 1.1);

    return {
      x: 490 + Math.cos(angle) * radius,
      y: 330 + Math.sin(angle) * radius
    };
  }

  function renderGraph() {
    svg.innerHTML = "";

    const visibleNodes = filteredNodes();
    const visibleIds = new Set(visibleNodes.map((node) => node.id));
    const positions = new Map(visibleNodes.map((node) => [node.id, nodePosition(node, visibleNodes)]));
    const selected = data.nodes.find((node) => node.id === selectedNodeId);
    const hotIds = new Set([selectedNodeId]);

    if (selected) {
      selected.connections.forEach((connection) => hotIds.add(connection.target));
      data.nodes.forEach((node) => {
        if (node.connections.some((connection) => connection.target === selected.id)) {
          hotIds.add(node.id);
        }
      });
    }

    const linkGroup = createSvg("g");
    const nodeGroup = createSvg("g");
    svg.appendChild(linkGroup);
    svg.appendChild(nodeGroup);

    visibleNodes.forEach((node) => {
      node.connections.forEach((connection) => {
        if (!visibleIds.has(connection.target)) {
          return;
        }

        const sourcePosition = positions.get(node.id);
        const targetPosition = positions.get(connection.target);
        const line = createSvg("line", {
          x1: sourcePosition.x,
          y1: sourcePosition.y,
          x2: targetPosition.x,
          y2: targetPosition.y,
          class: "graph-link" + (hotIds.has(node.id) && hotIds.has(connection.target) ? " hot" : "")
        });
        linkGroup.appendChild(line);
      });
    });

    visibleNodes.forEach((node) => {
      const position = positions.get(node.id);
      const group = createSvg("g", {
        class: [
          "graph-node",
          node.id === selectedNodeId ? "is-selected" : "",
          !hotIds.has(node.id) && selectedNodeId ? "is-muted" : ""
        ].join(" ").trim(),
        tabindex: "0",
        role: "button",
        "aria-label": node.title
      });

      group.addEventListener("click", () => selectNode(node.id));
      group.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectNode(node.id);
        }
      });

      if (node.id === selectedNodeId) {
        group.appendChild(createSvg("circle", {
          class: "node-halo",
          cx: position.x,
          cy: position.y,
          r: node.radius + 8
        }));
      }

      const repoWeight = Math.min(18, Math.round((node.repository?.commits || 0) / 8));
      group.appendChild(createSvg("circle", {
        class: "core",
        cx: position.x,
        cy: position.y,
        r: node.radius + repoWeight,
        fill: node.color
      }));

      group.appendChild(createSvg("text", {
        x: position.x,
        y: position.y + node.radius + repoWeight + 23,
        "text-anchor": "middle"
      }, node.shortTitle));

      group.appendChild(createSvg("text", {
        class: "node-meta",
        x: position.x,
        y: position.y + node.radius + repoWeight + 39,
        "text-anchor": "middle"
      }, `${node.year} | ${node.repository?.commits || 0} commits`));

      nodeGroup.appendChild(group);
    });
  }

  function createSvg(tag, attributes, text) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.entries(attributes || {}).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    if (text) {
      element.textContent = text;
    }
    return element;
  }

  function selectNode(nodeId) {
    selectedNodeId = nodeId;
    const node = data.nodes.find((candidate) => candidate.id === nodeId);
    renderAll();
    showDetail(node);
  }

  function showDetail(node) {
    if (!node) {
      return;
    }

    document.getElementById("detail-type").textContent = node.type;
    document.getElementById("detail-status").textContent = node.status;
    document.getElementById("detail-title").textContent = node.title;
    document.getElementById("detail-meta").textContent = [
      node.year,
      node.venue,
      node.authors
    ].join(" | ");
    document.getElementById("detail-summary").textContent = node.summary;
    document.getElementById("detail-impact").textContent = node.impact;

    renderRepoPreview(node);
    populateTokens("detail-themes", node.themes);
    populateTokens("detail-methods", node.methods);
    populateLinks(node.links);
    populateConnections(node.connections);
  }

  function renderRepoPreview(node) {
    const container = document.getElementById("repo-preview");
    container.innerHTML = "";

    if (!node.repository) {
      return;
    }

    const anchor = document.createElement("a");
    anchor.className = "repo-art";
    anchor.href = node.repository.url;
    anchor.target = "_blank";
    anchor.rel = "noopener";
    anchor.innerHTML = `
      <span>${node.repository.language}</span>
      <strong>${node.repository.name}</strong>
      <em>${node.shortTitle}</em>
    `;
    container.appendChild(anchor);

    const metrics = document.createElement("div");
    metrics.className = "repo-metrics";
    metrics.innerHTML = `
      <div><strong>${node.repository.commits}</strong><span>commits</span></div>
      <div><strong>${node.repository.stars}</strong><span>stars</span></div>
      <div><strong>${node.repository.forks}</strong><span>forks</span></div>
    `;
    container.appendChild(metrics);
  }

  function populateTokens(containerId, values) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    values.forEach((value) => {
      const token = document.createElement("span");
      token.className = "token";
      token.textContent = value;
      container.appendChild(token);
    });
  }

  function populateLinks(links) {
    const container = document.getElementById("detail-links");
    container.innerHTML = "";
    links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.rel = "noopener";
      anchor.textContent = link.label;
      container.appendChild(anchor);
    });
  }

  function populateConnections(connections) {
    const container = document.getElementById("detail-connections");
    container.innerHTML = "";
    connections.forEach((connection) => {
      const relatedNode = data.nodes.find((node) => node.id === connection.target);
      if (!relatedNode) {
        return;
      }
      const item = document.createElement("li");
      item.textContent = `${relatedNode.shortTitle}: ${connection.label}.`;
      container.appendChild(item);
    });
  }

  function renderAll() {
    renderRepoList();
    renderGraph();
  }

  function initStarfield() {
    if (!starfield) {
      return;
    }

    const context = starfield.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let stars = [];

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      starfield.width = Math.floor(width * ratio);
      starfield.height = Math.floor(height * ratio);
      starfield.style.width = width + "px";
      starfield.style.height = height + "px";
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.min(220, Math.floor((width * height) / 5200));
      stars = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: index % 9 === 0 ? 1.7 : Math.random() * 1.15 + 0.3,
        alpha: Math.random() * 0.55 + 0.18,
        drift: Math.random() * 0.18 + 0.04,
        tint: index % 11 === 0 ? "255, 212, 106" : index % 7 === 0 ? "168, 140, 255" : "186, 255, 232"
      }));
    }

    function draw(time) {
      context.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        const pulse = reducedMotion ? 0 : Math.sin(time * 0.001 * star.drift + star.x) * 0.22;
        const alpha = Math.max(0.08, star.alpha + pulse);
        context.beginPath();
        context.fillStyle = `rgba(${star.tint}, ${alpha})`;
        context.shadowColor = `rgba(${star.tint}, ${alpha})`;
        context.shadowBlur = star.radius * 7;
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
      });

      if (!reducedMotion) {
        window.requestAnimationFrame(draw);
      }
    }

    resize();
    draw(0);
    window.addEventListener("resize", resize);
  }

  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value;
    renderAll();
  });

  modeTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activeMode = tab.dataset.mode;
      modeTabs.forEach((candidate) => candidate.classList.toggle("active", candidate === tab));
      renderGraph();
    });
  });

  buildFilters();
  initStarfield();
  loadScholarSnapshot();
  renderAll();
  showDetail(data.nodes.find((node) => node.id === selectedNodeId));
})();
