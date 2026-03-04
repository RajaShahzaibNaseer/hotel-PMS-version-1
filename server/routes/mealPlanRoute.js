import express from "express"
import BaseController from "../controllers/baseController.js"

const mealPlanRoute = express.Router();
const mealPlanController = new BaseController("meal_plan");

mealPlanRoute.get("/", mealPlanController.getAll.bind(mealPlanController));
mealPlanRoute.get("/:id",mealPlanController.getOne.bind(mealPlanController));
mealPlanRoute.post("/", mealPlanController.create.bind(mealPlanController));
mealPlanRoute.put("/:id", mealPlanController.update.bind(mealPlanController));
mealPlanRoute.delete("/:id", mealPlanController.delete.bind(mealPlanController));

export default mealPlanRoute;
