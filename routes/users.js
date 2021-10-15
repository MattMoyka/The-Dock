import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);
// router.post('/change-password', controllers.changePassword)

// bonus challenge
router.post("/change-password", controllers.changePassword);

// basic routes
router.get("/users/:id", controllers.getUser);
router.get("/users", controllers.getUsers);

// generic nested routes
router.get("/users/:id/items", controllers.getUserItems);
router.get("/users/:id/items/:itemId", controllers.getUserItem);
router.post("/users/:id/items", controllers.createUserItem);
router.put("/users/:id/items/:itemId", controllers.updateUserItem);
router.delete("/users/:id/items/:itemId", controllers.deleteUserItem);

export default router;
