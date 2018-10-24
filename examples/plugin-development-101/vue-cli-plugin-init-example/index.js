module.exports = (api, projectOptions) => {
	// Service
	// This file will execute...
	//	1) Anytime when vue-cli-service is started
	// Docs: https://cli.vuejs.org/dev-guide/plugin-dev.html#service-plugin
	// Service Class: https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/Service.js
	// Plugin API Code: https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/PluginAPI.js
	
	// Arguments:
	// api: Plugin API
	// projectOptions: vue.config.js or the "vue" field in package.json

	api.chainWebpack(webpackConfig => {
		// modify webpack config with webpack-chain
	});

	api.configureWebpack(webpackConfig => {
		// modify webpack config or return object to be merged with webpack-merge
	});

	api.registerCommand("build", args => {
		// do something when running `vue-cli-service build`
	});
};
