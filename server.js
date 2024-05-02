const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Serve portfolio.json file

  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url === '/portfolio.json') {
    const filePath = path.join(__dirname, 'portfolio.json');
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Content-Length': stat.size
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } else {
    // Serve other files (HTML, CSS, JavaScript)
    // Add more routes if needed
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world!');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});