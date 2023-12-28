const http = require("http");

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
  .createServer(async (request, response) => {
    console.log("request ", request.url);

    let filePath = "." + request.url;
    if (filePath == "./api/rss") {
      try {
        const results = await Promise.all(
          URLS.map((url) =>
            fetch(RSS_BASE_URL + url).then((result) => result.text())
          )
        );
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(results), "utf-8");
      } catch (error) {
        console.error(error);
        response.writeHead(500);
        response.end("Sorry, check with the site admin for error: ");
      }
    } else if (process.env.NODE_ENV !== "production") {
      // NOTE: ローカルデモ用機能
      const { demo } = require("./demo");
      demo(response, filePath);
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end("404 - Not Found", "utf-8");
    }
  })
  .listen(PORT);

if (process.env.NODE_ENV !== "production") {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
}
