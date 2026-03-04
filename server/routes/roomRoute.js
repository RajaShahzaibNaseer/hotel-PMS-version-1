import express from "express"
import BaseController from "../controllers/baseController.js"

const roomRoute = express.Router();
const roomController = new BaseController("room");

roomRoute.get("/", roomController.getAll.bind(roomController));
roomRoute.get("/:id",roomController.getOne.bind(roomController));
roomRoute.post("/", roomController.create.bind(roomController));
roomRoute.put("/:id", roomController.update.bind(roomController));
roomRoute.delete("/:id", roomController.delete.bind(roomController));

export default roomRoute;
