module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());

  eleventyConfig.addCollection("categories", (collectionApi) => {
    const cats = collectionApi.globalData.categories || [];
    return cats.filter(c => c.enabled !== false);
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
