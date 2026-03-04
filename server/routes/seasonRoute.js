import express from "express"
import BaseController from "../controllers/baseController.js"

const seasonRoute = express.Router();
const seasonController = new BaseController("season");

seasonRoute.get("/", seasonController.getAll.bind(seasonController));
seasonRoute.get("/:id",seasonController.getOne.bind(seasonController));
seasonRoute.post("/", seasonController.create.bind(seasonController));
seasonRoute.put("/:id", seasonController.update.bind(seasonController));
seasonRoute.delete("/:id", seasonController.delete.bind(seasonController));

export default seasonRoute;
