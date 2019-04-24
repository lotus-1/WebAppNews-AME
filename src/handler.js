const fs = require("fs");
const path = require("path");
const url = require("url");
const querystring = require("querystring");
const rqst = require("request");

const handlerHome = (request, response) => {
  const endpoint = request.url;
  response.writeHead(200, { "Content-Type": "text/html" });
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("404 - file not found");
      return;
    }
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(file);
  });
};

const handlerPublic = (request, response) => {
  const url = request.url;
  const extension = url.split(".")[1];
  const filePath = path.join(__dirname, "..", "public", url);
  const type = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript"
  }[extension];

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("404 - file not found");
      return;
    }
    response.writeHead(200, { "Content-Type": type });
    response.end(file);
  });
};

const handlerData = (request, response) => {

  const parseUrl = url.parse(request.url);
  const parseQuery = querystring.parse(parseUrl.query);
  const dataUrl = `https://newsapi.org/v2/top-headlines?country=${parseQuery.q}&apiKey=05c75aad309f4dc5b04f2638474ce2cd`;
  console.log("data url : ", dataUrl);
    rqst(dataUrl, (err, res, body) => {
    if (err) {
      res.writeHead(404, { "content-type": "text/html" });
      res.end("file not found");
    } else {
      const parseBody = JSON.parse(body);
      console.log("parseBody is : ", parseBody);
      let resUrl = parseBody.articles[0].url;
      console.log('this is urlres:' ,resUrl);
      response.writeHead(200);
      response.end(JSON.stringify(`${resUrl}`));

    }
  });
};

module.exports = {
  handlerHome,
  handlerPublic,
  handlerData
};
