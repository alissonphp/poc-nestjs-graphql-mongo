import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CreateBotInput } from 'src/graphql.schema';
import { BotsService } from "./bots.service";
import { Bot } from './schemas/bot.schema';

@Resolver('Bot')
export class BotsResolver {
    constructor(private readonly botsService: BotsService) {}

    @Query('bots')
    async getBots(): Promise<Bot[]> {
        return this.botsService.findAll();
    }

    @Mutation('createBot')
    async create(@Args('createBotInput') args: CreateBotInput): Promise<Bot> {
        const created = await this.botsService.create(args);
        return created;
    }
}