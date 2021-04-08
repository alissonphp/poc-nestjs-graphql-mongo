import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://${process.env.MONGODB_HOST}:${process.env.MONGO_PORT}/${process.env.MONGODB_DB}`, {useNewUrlParser: true}),
    BotsModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
