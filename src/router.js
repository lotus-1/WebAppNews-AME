const { handlerHome, handlerPublic } = require('./handler');

const router = (request, response) => {
const endpoint = request.url;

if (endpoint === "/") {
  handlerHome(request, response);
} else {
  handlerPublic(request, response);
}
};



module.exports = router;
