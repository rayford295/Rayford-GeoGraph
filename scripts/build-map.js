const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const papersDir = path.join(repoRoot, "wiki", "papers");
const outputPath = path.join(repoRoot, "data.js");

function parseScalar(value) {
  if (value === "true") {
    return true;
  }

  if (value === "false") {
    return false;
  }

  if (/^-?\d+$/.test(value)) {
    return Number(value);
  }

  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
}

function parseFrontmatter(frontmatter) {
  const lines = frontmatter.split(/\r?\n/);
  const result = {};
  let index = 0;

  while (index < lines.length) {
    const rawLine = lines[index];
    const line = rawLine.trimEnd();

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const topLevelMatch = line.match(/^([A-Za-z0-9_]+):(?:\s+(.*))?$/);
    if (!topLevelMatch) {
      index += 1;
      continue;
    }

    const key = topLevelMatch[1];
    const inlineValue = topLevelMatch[2];

    if (inlineValue && inlineValue.trim() !== "") {
      result[key] = parseScalar(inlineValue.trim());
      index += 1;
      continue;
    }

    index += 1;
    const childLines = [];

    while (index < lines.length) {
      const childRaw = lines[index];
      if (!childRaw.trim()) {
        index += 1;
        continue;
      }

      if (!childRaw.startsWith("  ")) {
        break;
      }

      childLines.push(childRaw);
      index += 1;
    }

    result[key] = parseBlock(childLines);
  }

  return result;
}

function parseBlock(lines) {
  if (!lines.length) {
    return null;
  }

  if (lines[0].trimStart().startsWith("- ")) {
    const hasObjectItems = lines.some((line) => {
      const trimmed = line.trimStart();
      return trimmed.startsWith("- ") && trimmed.slice(2).trim().includes(":");
    });

    if (!hasObjectItems) {
      return lines
        .filter((line) => line.trimStart().startsWith("- "))
        .map((line) => parseScalar(line.trimStart().slice(2).trim()));
    }

    const items = [];
    let current = null;

    lines.forEach((line) => {
      const trimmed = line.trimStart();

      if (trimmed.startsWith("- ")) {
        const content = trimmed.slice(2).trim();

        if (!content) {
          current = {};
          items.push(current);
          return;
        }

        if (content.includes(":")) {
          current = {};
          items.push(current);
          const splitIndex = content.indexOf(":");
          const itemKey = content.slice(0, splitIndex).trim();
          const itemValue = content.slice(splitIndex + 1).trim();
          current[itemKey] = parseScalar(itemValue);
          return;
        }

        items.push(parseScalar(content));
        current = null;
        return;
      }

      const splitIndex = trimmed.indexOf(":");
      if (current && splitIndex >= 0) {
        const itemKey = trimmed.slice(0, splitIndex).trim();
        const itemValue = trimmed.slice(splitIndex + 1).trim();
        current[itemKey] = parseScalar(itemValue);
      }
    });

    return items;
  }

  const object = {};
  lines.forEach((line) => {
    const trimmed = line.trimStart();
    const splitIndex = trimmed.indexOf(":");
    if (splitIndex < 0) {
      return;
    }

    const itemKey = trimmed.slice(0, splitIndex).trim();
    const itemValue = trimmed.slice(splitIndex + 1).trim();
    object[itemKey] = parseScalar(itemValue);
  });
  return object;
}

function parsePaperFile(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const frontmatterMatch = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!frontmatterMatch) {
    throw new Error(`Missing frontmatter in ${filePath}`);
  }

  const frontmatter = parseFrontmatter(frontmatterMatch[1]);
  const body = frontmatterMatch[2];
  const summaryMatch = body.match(/## Summary\s+([\s\S]*?)(?:\n## |\s*$)/);
  const impactMatch = body.match(/## Impact\s+([\s\S]*?)(?:\n## |\s*$)/);

  return {
    id: frontmatter.id,
    shortTitle: frontmatter.short_title,
    title: frontmatter.title,
    year: frontmatter.year,
    venue: frontmatter.venue,
    type: frontmatter.type,
    status: frontmatter.status,
    authors: Array.isArray(frontmatter.authors) ? frontmatter.authors.join(", ") : "",
    summary: summaryMatch ? summaryMatch[1].trim().replace(/\n+/g, " ") : "",
    impact: impactMatch ? impactMatch[1].trim().replace(/\n+/g, " ") : "",
    themes: frontmatter.themes || [],
    methods: frontmatter.methods || [],
    links: frontmatter.links || [],
    connections: frontmatter.connections || [],
    repository: frontmatter.repository || null,
    position: frontmatter.position || { x: 100, y: 100 },
    color: frontmatter.color || "#157bc0",
    radius: frontmatter.radius || 34
  };
}

function buildData() {
  const paperFiles = fs
    .readdirSync(papersDir)
    .filter((file) => file.endsWith(".md"))
    .sort();

  const nodes = paperFiles.map((file) => parsePaperFile(path.join(papersDir, file)));
  const themes = Array.from(
    new Set(
      nodes.flatMap((node) => node.themes)
    )
  ).sort();

  const payload = {
    generatedAt: new Date().toISOString(),
    themes: ["All"].concat(themes),
    nodes
  };

  const output = `window.researchMapData = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(outputPath, output, "utf8");
}

buildData();
