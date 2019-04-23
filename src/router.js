const fs = require("fs");
const path = require("path");

const router = (request, response) => {
  const url = request.url;
  if (url === "/") {
    const filePath = path.join(__dirname, "..", "public", "index.html");
    fs.readFile(filePath, (error, file) => {
      if (error) {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('404 - FILE NOT FOUND');
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
      }
    });
  }
};
module.exports = router;
