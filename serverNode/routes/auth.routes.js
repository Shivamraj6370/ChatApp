import express from "express";
const router = express.Router();
import { register, login, getAllUsers } from "../controller/ChatUser";
import { getMessages, addMessage } from "../controller/ChatMessage";
///user =====
router.post("/register", register);
router.post("/login", login);
router.get("/getAllUsers/:id", getAllUsers);
///====ChatMessage====
router.post("/addMessage", addMessage);
router.post("/getMessages", getMessages);

export default router;
