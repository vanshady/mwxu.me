import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';
import Routes from './components/Routes.jsx';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

const app = express();
const port = process.env.PORT || 3000;

// 301 Redirect
app.use((req, res, next) => {
  let host = req.get('host');
  if (/^www\./.test(host)) {
    host = host.substring(4, host.length);
    res.writeHead(301, {
      Location: req.protocol + '://' + host + req.originalUrl,
      Expires: new Date().toGMTString(),
    });
    res.end();
  } else {
    next();
  }
});

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
  console.log('what');
  match({ Routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const markup = renderToString(<RouterContext {...renderProps} />);
      conosle.log(markup);
      res.status(200).render('index', { markup });
    } else {
      res.status(404).send('Not found');
    }
  });
});

app.listen(port);
console.log('listening at:', port);
