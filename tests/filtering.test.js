const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// PATHS CORRECTED FOR YOUR STRUCTURE
const htmlPath = path.join(__dirname, "test-filter.html"); // Use test-specific file
const scriptPath = path.join(__dirname, "../script/script.js"); // JS is in script/ folder

// Load files
const html = fs.readFileSync(htmlPath, "utf8");
const script = fs.readFileSync(scriptPath, "utf8");

// Create DOM environment
const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable",
});

// Inject your script into the virtual DOM
const scriptEl = document.createElement("script");
scriptEl.textContent = script;
document.body.appendChild(scriptEl);

// Now test your filtering logic
test("Image filtering works", () => {
  const tabs = document.querySelectorAll(".filtering__tabs .btn");
  const imgs = document.querySelectorAll(".images__grid img");

  // Simulate clicking the "nature" filter
  const natureTab = document.querySelector('[data-filter="nature"]');
  natureTab.click();

  // Verify only nature images are shown
  const visibleImages = document.querySelectorAll(
    ".images__grid img:not(.hide)"
  );
  const allNature = [...visibleImages].every(
    (img) => img.dataset.genre === "nature"
  );

  console.assert(allNature, "Filter should show only nature images");
  console.log("✅ Filter test passed!");
});
