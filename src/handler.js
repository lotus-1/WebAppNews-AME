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

const handlerData = (request, response) => {
  const myUrl = url.parse(request.url);
  console.log(myUrl);
  const query = myUrl.query;
  console.log(query);
  const value = querystring.parse(query);
  console.log(value);
  const ourUrl = `https://newsapi.org/v2/top-headlines?country=${value.url}&apiKey=05c75aad309f4dc5b04f2638474ce2cd`;

};

//   parse the response body and put
//   request(ourUrl, (err. response, body) => {
//       const parsedBody = JSON.parse(body);
//       console.log(parsedBody.url);
//       if (err) {
//      response.writeHead(404, {'Content-Type' : 'text/html'});
//      response.end('Sorry, there is a server error');
//    } else {
//      console.log(parsedBody.rates.ILS);
//      res.writeHead(200, {'Content-Type' : 'text/html'});
//      res.end(parsedBody.rates.ILS);
//    }
//  });
//
// }




module.exports = {
  handlerHome,
  handlerPublic,
  handlerData
}
