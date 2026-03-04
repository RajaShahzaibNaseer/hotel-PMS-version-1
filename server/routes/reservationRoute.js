import express from "express"
import BaseController from "../controllers/baseController.js"

const reservationRoute = express.Router();
const reservationController = new BaseController("reservation");

reservationRoute.get("/", reservationController.getAll.bind(reservationController));
reservationRoute.get("/:id",reservationController.getOne.bind(reservationController));
reservationRoute.post("/", reservationController.create.bind(reservationController));
reservationRoute.put("/:id", reservationController.update.bind(reservationController));
reservationRoute.delete("/:id", reservationController.delete.bind(reservationController));

export default reservationRoute;
