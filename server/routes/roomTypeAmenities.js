import express from "express"
import BaseController from "../controllers/baseController.js"

const roomTypeAmenitesRoute = express.Router();
const roomTypeAmenitesController = new BaseController("room_type_amenities");

roomTypeAmenitesRoute.get("/", roomTypeAmenitesController.getAll.bind(roomTypeAmenitesController));
roomTypeAmenitesRoute.get("/:id",roomTypeAmenitesController.getOne.bind(roomTypeAmenitesController));
roomTypeAmenitesRoute.post("/", roomTypeAmenitesController.create.bind(roomTypeAmenitesController));
roomTypeAmenitesRoute.put("/:id", roomTypeAmenitesController.update.bind(roomTypeAmenitesController));
roomTypeAmenitesRoute.delete("/:id", roomTypeAmenitesController.delete.bind(roomTypeAmenitesController));

export default roomTypeAmenitesRoute;
