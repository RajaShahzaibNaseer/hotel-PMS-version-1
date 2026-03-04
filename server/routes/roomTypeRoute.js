import express from "express"
import BaseController from "../controllers/baseController.js"

const roomTypeRoute = express.Router();
const roomTypeController = new BaseController("roomType");

roomTypeRoute.get("/", roomTypeController.getAll.bind(roomTypeController));
roomTypeRoute.get("/:id",roomTypeController.getOne.bind(roomTypeController));
roomTypeRoute.post("/", roomTypeController.create.bind(roomTypeController));
roomTypeRoute.put("/:id", roomTypeController.update.bind(roomTypeController));
roomTypeRoute.delete("/:id", roomTypeController.delete.bind(roomTypeController));

export default roomTypeRoute;
