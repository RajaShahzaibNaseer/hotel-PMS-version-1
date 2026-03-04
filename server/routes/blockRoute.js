import express from "express"
import BaseController from "../controllers/baseController.js"

const blockRoute = express.Router();
const blockController = new BaseController("block");

blockRoute.get("/", blockController.getAll.bind(blockController));
blockRoute.get("/:id",blockController.getOne.bind(blockController));
blockRoute.post("/", blockController.create.bind(blockController));
blockRoute.put("/:id", blockController.update.bind(blockController));
blockRoute.delete("/:id", blockController.delete.bind(blockController));

export default blockRoute;
