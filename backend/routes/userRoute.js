import express from "express";
const router = express.Router();

// __INIT Controllers__
import { createUser, getAllUsers, getUserProfile, loginUser, logoutUser, updateUser } from "../controllers/userController.js";

// __INIT Middlewares__
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";


router.route("/").post(createUser).get(authenticate, authorizeAdmin, getAllUsers);
router.post("/auth", loginUser);
router.post("/logout", logoutUser);
router.route("/profile").get(authenticate, getUserProfile).put(authenticate, updateUser);

export default router;