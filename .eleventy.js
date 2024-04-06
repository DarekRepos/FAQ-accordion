const Faq = require('./src/_includes/components/Faq');
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    
    eleventyConfig.setBrowserSyncConfig({
        files: './public/static/**/*.css',
    });
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/_data");
    eleventyConfig.addShortcode("Faq", Faq);

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'public',
            data: "_data"
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        pathPrefix: '/FAQ-accordion/',
    };
};