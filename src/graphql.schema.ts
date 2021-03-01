
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateBotInput {
    name: string;
    token: string;
    url: string;
}

export abstract class IQuery {
    abstract bots(): Bot[] | Promise<Bot[]>;
}

export abstract class IMutation {
    abstract createBot(createBotInput?: CreateBotInput): Bot | Promise<Bot>;
}

export class Bot {
    id?: number;
    name?: string;
    token?: string;
    url?: string;
}
