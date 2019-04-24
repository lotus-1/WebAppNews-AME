const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');
const rqst = require('request');


const handlerHome = (request, response) => {
  const endpoint = request.url;
  response.writeHead(200, { 'Content-Type': 'text/html' });
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end('404 - file not found');
      return;
    }
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(file);
  });
};

const handlerPublic = (request, response) => {
const url = request.url;
const extension = url.split('.')[1];
const filePath = path.join(__dirname, '..', 'public', url);
const type = {
    html : 'text/html',
    css : 'text/css',
    js : 'application/javascript'
  }[extension]

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end('404 - file not found');
      return;
    }
    response.writeHead(200, { 'Content-Type': type });
    response.end(file);
  });
};

const handlerData = ((request, response) => {
  console.log('request.url is : ' , request.url );
  const parseUrl = url.parse(request.url);
  console.log('parseUrl is : ' , parseUrl);
const parseQuery = querystring.parse(parseUrl.query)['q'];
  console.log(parseQuery);
let dataUrl = `https://newsapi.org/v2/top-headlines?country=&apiKey=05c75aad309f4dc5b04f2638474ce2cd`;
console.log('data url : ', dataUrl);
// const result = dataUrl.parse(url);
// console.log('result is : ' , result);
rqst(dataUrl, (err, res, body) => {
  if (err) {
    response.writeHead(404, { 'content-type': 'text/html'})
    response.end('file not found');
  } else {
    const parseBody = json.parse(body);
    let resultUrl = parseBody.data.articles.url;
    response.writeHead(200, { 'content-type': 'text/html'})
    response.end(resultUrl);
  }
})
});



module.exports = {
  handlerHome,
  handlerPublic,
  handlerData
}
