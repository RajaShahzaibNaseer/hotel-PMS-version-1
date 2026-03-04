import express from "express"
import BaseController from "../controllers/baseController"

const router = express.Router();
const blockController = BaseController("block");

router.get("/", blockController.getAll());
router.get("/:id",blockController.getOne());
router.post("/", blockController.create());
router.put("/:id", blockController.update());
router.delete("/:id", blockController.delete());

module.exports = router;
