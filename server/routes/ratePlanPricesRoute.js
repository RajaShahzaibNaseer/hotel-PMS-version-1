import express from "express"
import BaseController from "../controllers/baseController.js"

const ratePlanPricesRoute = express.Router();
const ratePlanPricesController = new BaseController("rate_plan_prices");

ratePlanPricesRoute.get("/", ratePlanPricesController.getAll.bind(ratePlanPricesController));
ratePlanPricesRoute.get("/:id",ratePlanPricesController.getOne.bind(ratePlanPricesController));
ratePlanPricesRoute.post("/", ratePlanPricesController.create.bind(ratePlanPricesController));
ratePlanPricesRoute.put("/:id", ratePlanPricesController.update.bind(ratePlanPricesController));
ratePlanPricesRoute.delete("/:id", ratePlanPricesController.delete.bind(ratePlanPricesController));

export default ratePlanPricesRoute;
