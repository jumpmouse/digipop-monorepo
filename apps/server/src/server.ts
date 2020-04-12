/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-explicit-any */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const helmet = require('helmet'); /* eslint-enable @typescript-eslint/no-var-requires */
const app = express();
const PORT = process.env.APP_PORT || 3000;
const parentPath = path.join(__dirname, '/..');
const assetsPath = path.join(__dirname, '/../assets');
// const sectionContentPath = path.join(__dirname, '/../data');

app.use(compression());
app.use(helmet());

// serve static files
app.use('/content-management/assets/*.*', (req: any, res: any) => {
  const fileName = `${req.params[0]}.${req.params[1]}`;
  res.sendFile(fileName, { root: assetsPath });
});

app.get(
  '*.*',
  express.static(parentPath, {
    maxAge: '1m'
  })
);

// api
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get(
  '/api/script-content',
  (req: any, res: { send: (arg0: { data: object }) => void }) => {
    try {
      const rawData = fs.readFileSync('script-content.json');
      const scriptContent = JSON.parse(rawData);
      res.send({ data: scriptContent });
    } catch (err) {
      if (err.code === 'ENOENT') {
        throw new Error('Data not found!');
      } else {
        throw err;
      }
    }
  }
);

app.get(
  '/api/script-content/:sectionName',
  (req: any, res: { send: (arg0: { data: object }) => void }) => {
    try {
      const rawData = fs.readFileSync(`${req.params.sectionName}.json`);
      const sectionContent = JSON.parse(rawData);
      res.send({ data: sectionContent });
    } catch (err) {
      if (err.code === 'ENOENT') {
        throw new Error('Data not found!');
      } else {
        throw err;
      }
    }
  }
);

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

// routes
app
  .route(['/content-management', '/content-management/*'])
  .get((req: any, res: { sendFile: (arg0: string) => void }) => {
    res.sendFile(parentPath + '/content-management/index.html');
  });

app.route('*').get((req: any, res: { sendFile: (arg0: string) => void }) => {
  res.sendFile(parentPath + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Digipop server listening on port ${PORT}`);
});
