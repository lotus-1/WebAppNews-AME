const { handlerHome, handlerPublic, handlerData } = require('./handler');

const router = (request, response) => {
const endpoint = request.url;

if (endpoint === "/") {
  handlerHome(request, response);
} else if (endpoint.indexOf('/search') !== -1 ) {
    handlerData(request, response);
} else {
  handlerPublic(request, response);
}
};






module.exports = router;
