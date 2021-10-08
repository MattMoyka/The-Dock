import { Router } from "express";
import itemsRoutes from "./items.js";
import usersRoutes from "./users.js";
const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", usersRoutes);
router.use("/", itemsRoutes);

export default router;
