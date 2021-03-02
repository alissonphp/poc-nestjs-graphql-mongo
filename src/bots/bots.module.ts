import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BotsResolver } from './bots.resolver';
import { BotsService } from './bots.service';
import { Bot, BotSchema } from './schemas/bot.schema';

@Module({
    imports: [MongooseModule.forFeature([
        { name: Bot.name, schema: BotSchema }
    ])],
    providers: [BotsService, BotsResolver]
})
export class BotsModule { }
