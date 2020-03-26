/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-explicit-any */
const express = require('express');
const bodyParser = require('body-parser');
/* eslint-enable @typescript-eslint/no-var-requires */
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

app.get(
  '/api/*',
  (req: any, res: { send: (arg0: { data: string }) => void }) => {
    res.send({ data: `data recieved: api get` });
  }
);

app.post(
  '/api/*',
  (
    req: { body: { param: any } },
    res: { send: (arg0: { data: string }) => void }
  ) => {
    res.send({ data: `data recieved: ${req.body.param}` });
  }
);

app.route('*').get((req: any, res: { sendFile: (arg0: string) => void }) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on  port ${PORT}`);
});
