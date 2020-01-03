import { NestFactory } from '@nestjs/core';
import proxy from 'express-http-proxy';

import { AppModule } from './app/app.module';

async function bootstrap() {

  const app  = await NestFactory.create(AppModule);
  const port = process.env.port || 4000;

  app.use('/example/', proxy('http://example.com'));

  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/');
  });

}

bootstrap();
