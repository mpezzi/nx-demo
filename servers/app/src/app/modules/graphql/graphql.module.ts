import { HttpModule, Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { clients } from './clients';
import { finders } from './finders';
import { resolvers } from './resolvers';

@Module({
  imports: [
    HttpModule,
    NestGraphQLModule.forRoot({
      include: [GraphQLModule],
      typePaths: ['./**/graphql.graphql'],
      definitions: {
        path: join(process.cwd(), 'libs/interface/src/lib/graphql.ts')
      },
      debug: true,
      playground: true
    }),
  ],
  providers: [...clients, ...finders, ...resolvers]
})
export class GraphQLModule {}
