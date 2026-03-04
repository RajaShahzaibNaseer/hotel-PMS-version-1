import express from "express"
import BaseController from "../controllers/baseController.js"

const amenityRoute = express.Router();
const amenityController = new BaseController("amenity");

amenityRoute.get("/", amenityController.getAll.bind(amenityController));
amenityRoute.get("/:id",amenityController.getOne.bind(amenityController));
amenityRoute.post("/", amenityController.create.bind(amenityController));
amenityRoute.put("/:id", amenityController.update.bind(amenityController));
amenityRoute.delete("/:id", amenityController.delete.bind(amenityController));

export default amenityRoute;
