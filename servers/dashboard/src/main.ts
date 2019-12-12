import * as express from 'express';

const app = express();
const apps = ['apple', 'orange', 'pear'];

apps.forEach(a => {
  app.use(`/${a}`, express.static(`./dist/apps/${a}`));
});

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to dashboard!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
