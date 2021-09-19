import { Schema, model } from "mongoose";

interface ILocationChannel {
	id: string;
	active: boolean;
	created?: Date;
	archived?: Date;
}
export interface ILocation {
	name: string;
	channels?: ILocationChannel[];
}

const schema = new Schema<ILocation>(
	{
		name: { type: String, required: true },
		channels: [
			{
				id: { type: String, required: true },
				active: Boolean,
				created: Date,
				archived: Date,
			},
		],
	},
	{ timestamps: true }
);
export const Location = model<ILocation>("Location", schema);
