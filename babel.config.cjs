module.exports = {
	presets: [
		// The @babel/preset-env preset allows Babel to transpile modern JavaScript (ES6+)
		// into a version of JavaScript that is compatible with the target environments.
		// Here, 'esmodules: true' ensures that the code will be compatible with environments
		// that support ES modules, and 'node: current' ensures compatibility with the current
		// version of Node.js.
		['@babel/preset-env', { targets: { esmodules: true, node: 'current' } }],

		// The @babel/preset-react preset allows Babel to transpile JSX syntax used in React components
		// into standard JavaScript. The 'runtime: automatic' option enables the automatic JSX runtime,
		// which means you don't need to manually import React when using JSX in your components.
		['@babel/preset-react', { runtime: 'automatic' }],
	],
}
