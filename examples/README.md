# Vue CLI 3 Examples

## Plugin Development 101
### Files:
1. `project-example`: Simple project example with this presentation's custom plugin.
1. `vue-cli-plugin-init-example`: A custom vue plugin that has already been published to npm as `@vuedc/vue-cli-plugin-init-example`.


### Local Plugin Development
1. Create a new project using the preset locally
	```
	vue create -p ./PATH-TO-FOLDER/vue-cli-3-walkthrough/examples/plugin-development-101/vue-cli-plugin-init-example my-project
	```

1. Add the plugin from a local directory (for development)
	```
	yarn add ../vue-cli-plugin-init-example
	```
	...or...
	```
	npm install ../vue-cli-plugin-init-example
	```

1. Invoke the plugin
	```
	vue invoke vue-cli-plugin-init-example
	```

1. Continue local development
* Modify files in the `vue-cli-plugin-init-example` folder
* Run both the `add` and `invoke` commands from above


### Distribute and reuse the plugin remotely
1. Create a new project using the preset remotely
	> Functionality for this is based on the [download-git-repository](https://www.npmjs.com/package/download-git-repo) package. The `preset.json` file must be in the root of your repository and can only contain a single preset.
	```
	vue create -p github:vuedc/vue-cli-3-walkthrough my-project
	```

1. Install and invoke the plugin from the npm registry to your project
	```
	vue add @vuedc/init-example
	```
	...or...
	```
	npm install @vuedc/vue-cli-plugin-init-example
	vue invoke @vuedc/init-example
	```

