import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src/"),
			"@api": path.resolve(__dirname, "src/api"),
			"@forms": path.resolve(__dirname, "src/components/forms"),
			"@icons": path.resolve(__dirname, "src/components/icons"),
			"@layout": path.resolve(__dirname, "src/components/layout"),
			"@ui": path.resolve(__dirname, "src/components/ui"),
			"@config": path.resolve(__dirname, "src/config"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@routes": path.resolve(__dirname, "src/routes"),
			"@store": path.resolve(__dirname, "src/store"),
			"@types": path.resolve(__dirname, "src/types"),
			"@utils": path.resolve(__dirname, "src/utils"),
		},
	},
	build: {
		outDir: "dist",
	},
});
