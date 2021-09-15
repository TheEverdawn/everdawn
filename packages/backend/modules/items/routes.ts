import express from "express";

import { log } from "../../services/log";
import { Item } from "./models";

export const router = express.Router();

router.post("/", async (req, res) => {
	const item = new Item({
		name: req.body.name,
		room: req.body.room,
	});
	await item.save();

	log("Item seeded", item.toJSON());

	res.send(item);
});

router.get("/", async (req, res, next) => {
	if (!req.query.room) return next("Please specify room to retrieve items");
	const items = await Item.find({ room: req.query.room as string }).exec();
	res.send(items);
});
