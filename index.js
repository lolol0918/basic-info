const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let filePath = "";

  // Routing logic
  if (req.url === "/") {
    filePath = "./index.html";
  } else if (req.url === "/about") {
    filePath = "./about.html";
  } else if (req.url === "/contact-me") {
    filePath = "./contact-me.html";
  } else {
    filePath = "./404.html";
    res.statusCode = 404;
  }

  // Read and serve file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
      return;
    }

    res.writeHead(res.statusCode || 200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
