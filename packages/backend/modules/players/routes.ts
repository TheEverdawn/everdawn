import express from "express";

import { log } from "../../services/log";
import { Player } from "./models";

export const router = express.Router();

router.post("/", async (req, res) => {
	const player = new Player({ name: req.body.name });
	await player.save();

	log("Player created", player.id);

	res.send(player.toJSON());
});
