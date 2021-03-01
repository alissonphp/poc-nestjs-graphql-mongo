import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type BotDocument = Bot & Document

@Schema()
export class Bot {
    @Prop({ type: String })
    name: string

    @Prop({ type: String })
    token: string

    @Prop({ type: String })
    url: string
}

export const BotSchema = SchemaFactory.createForClass(Bot);