import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.post ("/", UserController.createUser) 


router.get("/", UserController.getUsers)


router.get ("/:id", UserController.getUserById)


export default router