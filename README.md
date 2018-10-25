# Vue CLI 3 Walkthrough

## About

**Created:** October 17, 2018

**Speaker:** Christian Guirreri ([@politicochris](https://twitter.com/politicochris))

## Resources

* Recording - 2018.10.17 - Coming Soon
* [Slides - 2018.10.17](https://github.com/VueDC/vue-cli-3-walkthrough/blob/master/slides/2018-10-17-vue-cli-3-walkthrough.pdf)
* [Vue CLI 3 Plugin Development Guide](https://cli.vuejs.org/dev-guide/plugin-dev.html)

## To Do

* [ ] Show an example of updating (rather than replacing) [Generator templates](https://cli.vuejs.org/dev-guide/plugin-dev.html#generator-templating) with yaml
* [ ] Show an example of webpack modification with the [Service Plugin](https://cli.vuejs.org/dev-guide/plugin-dev.html#service-plugin)
* [ ] Show an example of [modifying built-in plugins via promts](https://cli.vuejs.org/dev-guide/plugin-dev.html#prompts)
* [ ] Show an example of [registering commands for vue-cli-service](https://cli.vuejs.org/dev-guide/plugin-dev.html#service-plugin) and [checking for all available commands](https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-inspect)
* [ ] Show an example of the differences between [resolveWebpackConfig() and resolveChainableWebpackConfig()](https://cli.vuejs.org/dev-guide/plugin-dev.html#resolving-webpack-config-in-plugins)
* [ ] Show more detail about each of the undocumented options and functions available in the [PluginAPI](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/PluginAPI.js), the [GeneratorAPI](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/GeneratorAPI.js), [PromptModuleAPI](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/PromptModuleAPI.js) and [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)

## Questions
* [ ] Does `preset.json` need to be in the root of the git repository in order for it to work?
	* In the case of this repo, the plugin's root folder and `preset.json` is located at `vue-cli-3-walkthrough/examples/plugin-development-101/vue-cli-plugin-init-example/`. When running `vue create` with this path, the return is `404`:
		```
		vue create -p github:vuedc/vue-cli-3-walkthrough/examples/plugin-development-101/vue-cli-plugin-init-example my-project
		```
	* When adding `--clone` to the above statement, the return is `Error: 'git clone' failed with status 128`
	* If the `preset.json` is in the root of the repo, the following works as expected:
		```
		vue create -p github:vuedc/vue-cli-3-walkthrough my-project
		```
* [ ] Does the [download-git-repository](https://www.npmjs.com/package/download-git-repo) package support private BitBucket servers?
	* I have not been able to get any of the remote preset functionality to work with our private BitBucket server, either with `vue create` or with `download-git-repository` so the problem may be with the latter.
