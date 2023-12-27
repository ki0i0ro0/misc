const http = require("http");
const fs = require("fs");
const path = require("path");

const RSS_BASE_URL = "https://note.hr-forecaster.jp";
const URLS = [
  "/m/m9a73f77b56c7/rss",
  "/m/m7c879fd89eb9/rss",
  "/m/m24a606663ae4/rss",
  "/m/m365f7b0172e9/rss",
  "/m/m4e64e61ffcc5/rss",
];
const PORT = process.env.PORT || 3000;

http
  .createServer(async function (request, response) {
    console.log("request ", request.url);

    let filePath = "." + request.url;
    if (filePath == "./api/rss") {
      const results = await Promise.all(
        URLS.map((url) =>
          fetch(RSS_BASE_URL + url).then((result) => result.text())
        )
      ).catch((error) => {
        console.log(error);
        response.writeHead(500);
        response.end("Sorry, check with the site admin for error: ");
      });
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(JSON.stringify(results), "utf-8");
    } else {
      if (filePath == "./") {
        filePath = "./public/index.html";
      }

      const extname = String(path.extname(filePath)).toLowerCase();
      const mimeTypes = {
        ".html": "text/html",
        ".js": "text/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".wav": "audio/wav",
        ".mp4": "video/mp4",
        ".woff": "application/font-woff",
        ".ttf": "application/font-ttf",
        ".eot": "application/vnd.ms-fontobject",
        ".otf": "application/font-otf",
        ".wasm": "application/wasm",
      };

      const contentType = mimeTypes[extname] || "application/octet-stream";

      fs.readFile(filePath, function (error, content) {
        if (error) {
          if (error.code == "ENOENT") {
            fs.readFile("./404.html", function (error, content) {
              response.writeHead(404, { "Content-Type": "text/html" });
              response.end(content, "utf-8");
            });
          } else {
            response.writeHead(500);
            response.end(
              "Sorry, check with the site admin for error: " +
                error.code +
                " ..\n"
            );
          }
        } else {
          response.writeHead(200, { "Content-Type": contentType });
          response.end(content, "utf-8");
        }
      });
    }
  })
  .listen(PORT);

if (process.env.NODE_ENV !== "production") {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
}
