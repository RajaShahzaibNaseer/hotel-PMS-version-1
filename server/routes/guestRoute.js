import express from "express"
import BaseController from "../controllers/baseController.js"

const guestRoute = express.Router();
const guestController = new BaseController("guest");

guestRoute.get("/", guestController.getAll.bind(guestController));
guestRoute.get("/:id",guestController.getOne.bind(guestController));
guestRoute.post("/", guestController.create.bind(guestController));
guestRoute.put("/:id", guestController.update.bind(guestController));
guestRoute.delete("/:id", guestController.delete.bind(guestController));

export default guestRoute;
