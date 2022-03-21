// https://www.11ty.dev/docs/config/
module.exports = function(eleventyConfig) {

    //Add files to the public folder.
    eleventyConfig.addPassthroughCopy('./src/styles/style.css');

    // Return your Object options:
    return {
        dir: {
        input: "src",
        output: "public"
        }
    };
};