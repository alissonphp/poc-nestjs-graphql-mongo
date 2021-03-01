import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';

import { BotsModule } from './bots/bots.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/blackbot'),
    BotsModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
