const fs = require("node:fs");
const path = require("node:path");

const manifestPath = path.join(__dirname, "..", "manifest.json");

try {
  const manifestText = fs.readFileSync(manifestPath, "utf8");
  JSON.parse(manifestText);
  console.log("manifest.json is valid JSON");
} catch (error) {
  console.error(`manifest check failed: ${error.message}`);
  process.exitCode = 1;
}
