export default async function(eleventyConfig) {};

export const config = {
  dir: {
    input: "content",
    includes: "_includes"
  },
  templateFormats: ["html", "liquid", "njk"]
};