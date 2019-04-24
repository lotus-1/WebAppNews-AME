const fs = require('fs');
const path = require('path');
// const url = require('url');
const querystring = require('querystring');

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



module.exports = {
  handlerHome,
  handlerPublic
}
