const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("Node.js app via Docker & CI/CD deployed by Chitransh Jangid");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

