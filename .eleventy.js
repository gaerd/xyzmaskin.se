const fs = require("node:fs");
const path = require("node:path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addWatchTarget("src/_data/categories.json");

  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());

  eleventyConfig.addCollection("categories", () => {
    try {
      const filePath = path.join(__dirname, "src", "_data", "categories.json");
      const raw = fs.readFileSync(filePath, "utf8");
      const cats = JSON.parse(raw);
      if (!Array.isArray(cats)) {
        return [];
      }

      return cats.filter((c) => c && c.enabled !== false);
    } catch (err) {
      console.warn("Failed to load categories data:", err);
      return [];
    }
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
