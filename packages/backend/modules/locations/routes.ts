import express from "express";

import { log } from "../../services/log";
import { Location, ILocation } from "./models";

export const router = express.Router();

router.post("/", async (req, res) => {
	const data: ILocation = { name: req.body.name };
	if (req.body.channel) {
		data.channels = [{ id: req.body.channel, active: true }];
	}
	const location = new Location(data);
	await location.save();

	log("Location created", location.id);

	res.send(location.toJSON());
});
