import express from "express"
import BaseController from "../controllers/baseController.js"

const guestReservationRoute = express.Router();
const guestReservationController = new BaseController("guestReservation");

guestReservationRoute.get("/", guestReservationController.getAll.bind(guestReservationController));
guestReservationRoute.get("/:id",guestReservationController.getOne.bind(guestReservationController));
guestReservationRoute.post("/", guestReservationController.create.bind(guestReservationController));
guestReservationRoute.put("/:id", guestReservationController.update.bind(guestReservationController));
guestReservationRoute.delete("/:id", guestReservationController.delete.bind(guestReservationController));

export default guestReservationRoute;
