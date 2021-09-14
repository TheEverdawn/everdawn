import { Schema, model } from 'mongoose';

interface IPlayer {
	name: string
}

const schema = new Schema<IPlayer>({ name: {type: String, required: true} });
export const Player = model<IPlayer>('Player', schema)
