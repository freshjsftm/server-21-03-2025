const http = require('http');

const server = http.createServer((req, res) => {
  res.end('hello from server!!!');
});

const port = 3000;

server.listen(port, () => {
  console.log('Server started at port = ' + port);
});
