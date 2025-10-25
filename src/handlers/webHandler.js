const fs = require('fs');
const path = require('path');

/**
 * Serve the HTML frontend
 */
exports.serveHome = async (event) => {
  try {
    const htmlPath = path.join(__dirname, '../../public/index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
      },
      body: html
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html'
      },
      body: '<h1>Error loading page</h1>'
    };
  }
};
