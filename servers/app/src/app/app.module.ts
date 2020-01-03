import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

import { AppController } from './app.controller';
import { GraphQLModule } from './modules/graphql';

@Module({
  imports: [
    GraphQLModule,
  ],
  controllers: [
    AppController,
  ],
})
export class AppModule implements NestModule {

  /**
   * Apply middleware.
   */
  public configure(consumer: MiddlewareConsumer): void {

    const spas = [
      'apple',
      'orange',
      'pear',
    ];

    spas.forEach(a => consumer
      .apply(express.static(join(process.cwd(), `dist/apps/${a}`)))
      .forRoutes(a)
    );

  }

}
