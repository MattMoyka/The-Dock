import { Router } from "express";
import * as controllers from "../controllers/items.js";
import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/items", controllers.getItems);
router.get("/items/:id", controllers.getItem);
router.post("/items",  controllers.createItem);
router.put("/items/:id",  controllers.updateItem);
router.delete("/items/:id", restrict, controllers.deleteItem);

export default router;


