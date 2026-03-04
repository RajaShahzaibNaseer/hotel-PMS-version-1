import express from "express"
import BaseController from "../controllers/baseController.js"

const floorRoute = express.Router();
const floorController = new BaseController("floor");

floorRoute.get("/", floorController.getAll.bind(floorController));
floorRoute.get("/:id",floorController.getOne.bind(floorController));
floorRoute.post("/", floorController.create.bind(floorController));
floorRoute.put("/:id", floorController.update.bind(floorController));
floorRoute.delete("/:id", floorController.delete.bind(floorController));

export default floorRoute;
