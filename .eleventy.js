module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/main.css");
  eleventyConfig.addPassthroughCopy("node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");

  markdownTemplateEngine: 'njk';
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};