import { Importer } from "@11ty/import";

export default async function(eleventyConfig) {
	let importer = new Importer();

	importer.setOutputFolder("content/posts"); // --output
	importer.setCacheDuration("24h"); // --cacheduration
	importer.setVerbose(true); // --quiet
	importer.setSafeMode(true); // --overwrite
	importer.setDryRun(false); // --dryrun
	//importer.setDraftsFolder("drafts");
	//importer.setAssetsFolder("assets");
	importer.setAssetReferenceType("relative"); // --assetrefs
	
	// Sources (one or more)
	importer.addSource("wordpress", "http://aqdesigndev.wpenginepowered.com/");
	
	let entries = await importer.getEntries({
		contentType: "markdown", // --format
		within: "*", // date or last updated date must be within this recent duration (e.g. 24h, 7d, 1y)
	});
	
	await importer.toFiles(entries);
	
	importer.logResults();	
};

export const config = {
	templateFormats: [
		"md",
		"njk",
		"html",
		"liquid",
		"11ty.js",
	],
  // markdownTemplateEngine: "njk",
	// htmlTemplateEngine: "njk",
	dir: {
		input: "content",          // default: "."
		includes: "../_includes",  // default: "_includes" (`input` relative)
		// data: "../_data",          // default: "_data" (`input` relative)
		output: "_site"
	}
};