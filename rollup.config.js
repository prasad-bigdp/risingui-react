import { nodeResolve } from "@rollup/plugin-node-resolve"

import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
export default {
	// Input file (typically the output from Vite's library mode)
	input: "index.js", // Update this to match your Vite output file

	// Output configuration
	output: {
		file: "dist/index", // Your final bundled file
		format: "esm", // Universal Module Definition (works in both browser and Node.js)
		name: "risingui-react", // Global name for UMD bundle
		exports: "named", // Recommended for libraries
		globals: {
			// Define any external dependencies here
			// 'react': 'React',
			// 'lodash': '_'
		},
	},

	// Plugins configuration
	plugins: [
		nodeResolve({
			extensions: [".js", ".jsx"],
			// Add this to properly resolve relative paths
			moduleDirectories: ["node_modules", "src"],
		}),

		// Convert CommonJS modules to ES6
		commonjs({
			include: /node_modules/, // Process node_modules
			exclude: [], // Add any specific exclusions
			sourceMap: false, // Set to true if you need sourcemaps
			dynamicRequireTargets: [], // Handle dynamic requires if needed
		}),

		// Babel configuration
		babel({
			// Only transpile our source, not dependencies (usually)
			include: ["src/**", "dist/index.js"], // Adjust to match your source
			exclude: "node_modules/**",
			babelHelpers: "bundled",
			extensions: [".js", ".jsx"], // Include if using TypeScript
			presets: [
				[
					"@babel/preset-env",
					{
						targets: {
							browsers: ["> 0.5%", "last 2 versions", "not dead"],
							node: "current",
						},
						modules: false,
						useBuiltIns: "usage",
						corejs: 3,
					},
					"@babel/preset-react", // Add React preset for JSX
				],
			],
			plugins: [
				"@babel/plugin-transform-react-jsx", // Transform JSX
				"@babel/plugin-proposal-class-properties",
			],
		}),
	],

	// External dependencies that shouldn't be bundled
	external: [
		"react",
		"react-dom",
		// 'react',
		// 'react-dom',
		// Add other peer dependencies here
	],

	// Enable treeshaking (recommended)
	treeshake: true,
}
