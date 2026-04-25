(function () {
  const data = window.researchMapData;
  const svg = document.getElementById("graph");
  const filterBar = document.getElementById("filter-bar");
  const detailEmpty = document.getElementById("detail-empty");
  const detailContent = document.getElementById("detail-content");

  const themeCount = new Set(
    data.nodes.flatMap(function (node) {
      return node.themes;
    })
  ).size;

  document.getElementById("paper-count").textContent = String(data.nodes.length);
  document.getElementById("theme-count").textContent = String(themeCount);

  let activeTheme = "All";
  let selectedNodeId = null;

  function buildFilters() {
    data.themes.forEach(function (theme) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-chip" + (theme === activeTheme ? " active" : "");
      button.textContent = theme;
      button.addEventListener("click", function () {
        activeTheme = theme;
        syncFilterState();
        renderGraph();
      });
      filterBar.appendChild(button);
    });
  }

  function syncFilterState() {
    const chips = filterBar.querySelectorAll(".filter-chip");
    chips.forEach(function (chip) {
      chip.classList.toggle("active", chip.textContent === activeTheme);
    });
  }

  function renderGraph() {
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svg.appendChild(defs);

    const linkGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const nodeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svg.appendChild(linkGroup);
    svg.appendChild(nodeGroup);

    data.nodes.forEach(function (node) {
      node.connections.forEach(function (connection) {
        const target = data.nodes.find(function (candidate) {
          return candidate.id === connection.target;
        });

        if (!target) {
          return;
        }

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", node.position.x);
        line.setAttribute("y1", node.position.y);
        line.setAttribute("x2", target.position.x);
        line.setAttribute("y2", target.position.y);
        line.setAttribute("class", "graph-link");

        const nodeVisible = isVisible(node);
        const targetVisible = isVisible(target);
        if (!nodeVisible || !targetVisible) {
          line.classList.add("muted");
        }

        linkGroup.appendChild(line);
      });
    });

    data.nodes.forEach(function (node) {
      const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      group.setAttribute("class", "graph-node");
      group.setAttribute("tabindex", "0");
      group.setAttribute("role", "button");
      group.setAttribute("aria-label", node.title);

      if (!isVisible(node)) {
        group.classList.add("is-muted");
      }

      if (selectedNodeId === node.id) {
        group.classList.add("is-selected");
      }

      group.addEventListener("click", function () {
        selectedNodeId = node.id;
        renderGraph();
        showDetail(node);
      });

      group.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectedNodeId = node.id;
          renderGraph();
          showDetail(node);
        }
      });

      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", node.position.x);
      circle.setAttribute("cy", node.position.y);
      circle.setAttribute("r", node.radius);
      circle.setAttribute("fill", node.color);
      circle.setAttribute("fill-opacity", isVisible(node) ? "0.96" : "0.4");

      const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
      title.setAttribute("x", node.position.x);
      title.setAttribute("y", node.position.y + node.radius + 24);
      title.setAttribute("text-anchor", "middle");
      title.textContent = node.shortTitle;

      const year = document.createElementNS("http://www.w3.org/2000/svg", "text");
      year.setAttribute("x", node.position.x);
      year.setAttribute("y", node.position.y + node.radius + 40);
      year.setAttribute("text-anchor", "middle");
      year.setAttribute("class", "node-year");
      year.textContent = String(node.year);

      group.appendChild(circle);
      group.appendChild(title);
      group.appendChild(year);
      nodeGroup.appendChild(group);
    });
  }

  function isVisible(node) {
    return activeTheme === "All" || node.themes.indexOf(activeTheme) >= 0;
  }

  function showDetail(node) {
    detailEmpty.classList.add("hidden");
    detailContent.classList.remove("hidden");

    document.getElementById("detail-type").textContent = node.type;
    document.getElementById("detail-title").textContent = node.title;
    document.getElementById("detail-meta").textContent = [
      node.year,
      node.venue,
      node.status,
      node.authors
    ].join(" | ");
    document.getElementById("detail-summary").textContent = node.summary;
    document.getElementById("detail-impact").textContent = node.impact;

    populateTokens("detail-themes", node.themes);
    populateTokens("detail-methods", node.methods);
    populateLinks(node.links);
    populateConnections(node.connections);
  }

  function populateTokens(containerId, values) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    values.forEach(function (value) {
      const token = document.createElement("span");
      token.className = "token";
      token.textContent = value;
      container.appendChild(token);
    });
  }

  function populateLinks(links) {
    const container = document.getElementById("detail-links");
    container.innerHTML = "";

    links.forEach(function (link) {
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

    connections.forEach(function (connection) {
      const relatedNode = data.nodes.find(function (node) {
        return node.id === connection.target;
      });

      if (!relatedNode) {
        return;
      }

      const item = document.createElement("li");
      item.textContent = relatedNode.shortTitle + ": " + connection.label + ".";
      container.appendChild(item);
    });
  }

  buildFilters();
  renderGraph();
})();
