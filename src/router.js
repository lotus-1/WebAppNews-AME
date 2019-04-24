const { handlerHome, handlerPublic } = require('./handler');

const router = (request, response) => {
const endpoint = request.url;

if (endpoint === "/") {
  handlerHome(request, response);
} else {
  handlerPublic(request, response);
}
};


const getData = (request, response) => {
  const myUrl = url.parse(request.url);
  console.log(myUrl);
  const query = myUrl.query;
  console.log(query);
  const value = querystring.parse(query);
  console.log(value);
  const ourUrl = `https://newsapi.org/v2/top-headlines?country=${value.url}&apiKey=05c75aad309f4dc5b04f2638474ce2cd`;

}//   parse the response body and put
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
  router,
  getData
}


