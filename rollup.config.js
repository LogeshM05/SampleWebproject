import resolve from '@rollup/plugin-node-resolve'; // Plugin to resolve node_modules dependencies
import commonjs from '@rollup/plugin-commonjs'; // Plugin to convert CommonJS modules to ES6

export default {
  input: 'src/index.js', // Entry point for your JavaScript code
  output: {
    dir: 'dist', // Output file where the bundled code will be saved
    format: 'iife', // Output format (e.g., 'iife', 'cjs', 'esm') 
  },
  plugins: [
    resolve(), // Resolve third-party modules from node_modules
    commonjs(), // Convert CommonJS modules to ES6
  ],
};