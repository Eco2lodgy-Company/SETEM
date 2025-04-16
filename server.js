import http from "http";
import handler from "serve-handler";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, "dist");

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: distPath,
    rewrites: [
      // 👇 redirige toutes les routes vers index.html
      { source: "**", destination: "/index.html" },
    ],
  });
});

server.listen(3004, () => {
  console.log("Server running at http://localhost:3004");
});
