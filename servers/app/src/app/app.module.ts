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
   * Apply express middleware.
   */
  public configure(consumer: MiddlewareConsumer): void {

    const apps = [
      'apple',
      'orange',
      'pear',
    ];

    // Expose each application as static sub folder.
    apps.forEach(app => consumer
      .apply(express.static(join(process.cwd(), `dist/apps/${app}`)))
      .forRoutes(app)
    );

  }

}
