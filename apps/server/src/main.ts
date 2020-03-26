/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || process.env.APP_PORT || 80;

app.get(
  '*.*',
  express.static(__dirname, {
    maxAge: '1m'
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/*', (req: any, res: any) => {
  res.send({ data: `data recieved: api get` });
});

app.post('/api/*', (req: any, res: any) => {
  res.send({ data: `data recieved: ${req.body.param}` });
});

app.route('*').get((req: any, res: any) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on  port ${PORT}`);
});
