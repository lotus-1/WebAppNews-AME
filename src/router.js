const fs = require("fs");
const path = require("path");
const url = require('url');
const querystring = require('querystring');
const request = require('request');

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
  }else if (url.indexOf('/public/') !== -1) {
  const extension = url.split(".")[1];
    const extensionTypes = {
      html : 'text/html',
      js : 'application/javascript'
    };
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { 'Content-Type' : 'text/html' });
      response.end('<h1> So sorry, I can\'t find this file...</h1>');
    } else {
      response.writeHead(200, { 'Content-Type' : extensionTypes[extension]});
      response.end(file);
    }
  });
};

const getData =((request, response) =>{

const myUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=05c75aad309f4dc5b04f2638474ce2cd";
const { query } = myUrl.parse(request.url);
console.log(query);
});
// const getData =((request, response) =>{
//   const myUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=05c75aad309f4dc5b04f2638474ce2cd";
//   console.log('this is url', url.parse(myUrl));
//
// });
module.exports ={ router, getData}
