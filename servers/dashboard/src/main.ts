import { app } from './app';

const port = process.env.port || 4000;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});

server.on('error', console.error);
