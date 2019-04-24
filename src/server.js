// const http = require('http');
// const hostname = process.env.HOSTNAME || 'localhost';
// const port = process.env.PORT || 4000;
//
// http.createServer().listen(port, hostname, () => {
//   console.log(`Server running at port http://${hostname}:${port}`)
// });
//

const http = require('http');
const router = require('./router');
const port = 4000;
const server = http.createServer(router);
server.listen(port);
console.log('server is working in your port '+port);
