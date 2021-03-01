import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from 'mongoose'
import { CreateBotDto } from "./dto/create-bot.dto";

import { Bot, BotDocument } from "./schemas/bot.schema";

@Injectable()
export class BotsService {
    constructor(
        @InjectModel(Bot.name) private botModel: Model<BotDocument>
    ) { }

    async create(args: CreateBotDto): Promise<Bot> {
        const newBot = new this.botModel(args);
        return newBot.save()
    }

    async findAll(): Promise<Bot[]> {
        return this.botModel.find().exec();
    }
}