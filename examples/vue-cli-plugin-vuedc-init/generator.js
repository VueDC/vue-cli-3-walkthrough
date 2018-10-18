module.exports = (api, options, rootOptions) => {
	// Generator
	// This file will execute...
	//	1) If the plugin is included in the preset
	//	2) During the invoke command, after the plugin is installed
	// Docs: https://cli.vuejs.org/dev-guide/plugin-dev.html#generator
	// Creator Class: https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/Creator.js
	// Generator API Code: https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/GeneratorAPI.js
	
	// Arguments:
	// api: Generator API
	// options: Generator options for this plugin, or options from the preset
	// rootOptions: The preset used to create the project

	// Modify an eslint rule based on an inputted option. Default is false.
	const eslintConfig = {
		rules: {}
	}
	if (options.forceComponentOrder) {
		eslintConfig.rules['vue/order-in-components'] = 'error'
	} else {
		eslintConfig.rules['vue/order-in-components'] = 'never'
	}

	// Modify package.json fields
	api.extendPackage({
		dependencies: {
    		axios: "^0.18.0"
		},
		eslintConfig
	});

	api.onCreateComplete(() => {
		// Delete a file
		// TODO: Delete a folder if it's empty
		// const fs = require('fs');
		// const filename = api.resolve('HelloVueDC.vue');
		// const fileExists = fs.existsSync(filename);
		// if (fileExists) {
		// 	fs.unlink(filename, function(error) {
		// 		if (error) {
		// 			throw error;
		// 		}
		// 		console.log('Deleted filename', filename);
		// 	});
		// }
	})

	// Copy and render all files in ./template with ejs
	api.render("./template", {
		...options,
	});
};
