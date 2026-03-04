import express from "express"
import BaseController from "../controllers/baseController.js"

const ratePlanRoute = express.Router();
const ratePlanController = new BaseController("rate_plan");

ratePlanRoute.get("/", ratePlanController.getAll.bind(ratePlanController));
ratePlanRoute.get("/:id",ratePlanController.getOne.bind(ratePlanController));
ratePlanRoute.post("/", ratePlanController.create.bind(ratePlanController));
ratePlanRoute.put("/:id", ratePlanController.update.bind(ratePlanController));
ratePlanRoute.delete("/:id", ratePlanController.delete.bind(ratePlanController));

export default ratePlanRoute;
