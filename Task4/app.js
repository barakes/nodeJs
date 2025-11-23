// Created by Nati, Barak, Sapir

const http = require('http'); // Core module to create an HTTP server
const url = require('url');   // Module for parsing URL paths
const fs = require('fs');     // File system module for reading files
const path = require('path'); // Utility module for handling file paths

// Create the server
const server = http.createServer(function (req, res) {

  // Extract pathname from the full URL
  let pathNameFull = req.url;
  pathNameObj = url.parse(pathNameFull, true);
  pathName = pathNameObj.pathname;

  // Serve home page (index)
  if (pathName === '/') {
    const htmlPath = path.join(__dirname, 'templates', 'page.html');
    const fileStream = fs.createReadStream(htmlPath, 'UTF-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fileStream.pipe(res);

  // Serve any .html file inside /templates
  } else if (req.url.match('[.]html$')) {
    const htmlPath = path.join(__dirname, 'templates', req.url);
    const fileStream = fs.createReadStream(htmlPath, 'UTF-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fileStream.pipe(res);

  // Serve CSS files from /styles
  } else if (req.url.match('[.]css$')) {
    const cssPath = path.join(__dirname, 'styles', req.url);
    const fileStream = fs.createReadStream(cssPath, 'UTF-8');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fileStream.pipe(res);

  // Serve JPG images (base directory)
  } else if (req.url.match('[.]jpg$')) {
    const picturePath = path.join(__dirname, req.url);
    const fileStream = fs.createReadStream(picturePath);
    res.writeHead(200, { 'Content-Type': 'image/jpg' });
    fileStream.pipe(res);

  // Handle unknown routes
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page not found</h1>');
  }
});

// Start server on port 3000
server.listen(3000);
console.log('Node.js web server at port 3000 is running..');
