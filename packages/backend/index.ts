import express from "express";
import mongoose from "mongoose";

import { authenticated } from "./middleware/auth";
import { log } from "./services/log";
import { router as playersRouter } from "./modules/players/routes";

const app = express();
mongoose.connect("mongodb://localhost:27017/test");

app.use(express.json());
// app.use(authenticated);
app.use("/players", playersRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	log(`Listening on ::${port}`);
});
