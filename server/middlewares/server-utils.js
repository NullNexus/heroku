import zlib from 'zlib';

export function writeError(msg, res) {
  res.writeHead(500, { 'Content-Type': 'text/html' });
  res.write('ERROR!');
  res.end();
}

export function redirect(location, res) {
  res.writeHead(303, { 'Location': location });
  res.end();
}

export function writeNotFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.write('Not Found');
  res.end();
}

export function write(string, type, res) {
  zlib.gzip(string, (err, result) => {
    res.writeHead(200, {
      'Content-Length': result.length,
      'Content-Type': type,
      'Content-Encoding': 'gzip'
    });
    res.write(result);
    res.end();
  });
}

export function createPage(html, head) {
  return `
  <!doctype html>
  <html>
    <meta charSet="utf-8">
    <meta httpEquiv="X-UA-Compatible" content="IE=edge">
    ${head.title.toString()}
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${head.meta.toString()}
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css"
      integrity="sha384-HzUaiJdCTIY/RL2vDPRGdEQHHahjzwoJJzGUkYjHVzTwXFQ2QN/nVgX7tzoMW3Ov" crossorigin="anonymous">
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="/dist/main.js"></script>
    </body>
  </html>
  `;
}

