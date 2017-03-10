import http from 'http';
import fs from 'fs';
import Helmet from 'react-helmet';
import React from 'react';

import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { createPage, write, writeError, writeNotFound, redirect } from './middlewares/server-utils';
import routes from '../src/routes';

const PORT = process.env.PORT || 5000;

function renderApp(props, res) {
  const markup = renderToString(<RouterContext {...props} />);
  const head = Helmet.rewind();
  const html = createPage(markup, head);
  write(html, 'text/html', res);
}

http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    write('haha', 'text/plain', res);
  }
  // serve JavaScript assets
  else if (/dist/.test(req.url)) {
    fs.readFile(`.${req.url}`, (err, data) => {
      write(data, 'text/javascript', res);
    });
  }

  // handle all other urls with React Router
  else {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error)
        writeError('ERROR!', res);
      else if (redirectLocation)
        redirect(redirectLocation, res);
      else if (renderProps)
        renderApp(renderProps, res);
      else
        writeNotFound(res);
    });
  }
}).listen(PORT);
console.log(`listening on port ${PORT}`);

