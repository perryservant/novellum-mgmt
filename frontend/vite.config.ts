import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            "@novellum-mgmt/shared":
                "/Users/DEDSEC/Documents/Full-Stack Projects/novellum-mgmt/shared/src"
        }
    }
});
