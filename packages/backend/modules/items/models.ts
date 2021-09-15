import { Schema, model } from "mongoose";

interface IItem {
	name: string;
	room: string;
}

const schema = new Schema<IItem>({
	name: { type: String, required: true },
	room: { type: String, required: true },
});
export const Item = model<IItem>("Item", schema);
