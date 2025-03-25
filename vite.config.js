import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		lib: {
			entry: "index.js", // your library entry
			name: "risingui-react",
			//fileName: (format) => `my-library.${format}.js`
		},
		rollupOptions: {
			// Externalize deps that shouldn't be bundled
			external: ["react", "react-dom"],
			/*output: {
        globals: {
          react: 'React',
          react-dom: 'ReactDOM'
        }*/
		},
	},
})
