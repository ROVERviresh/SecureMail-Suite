import express from "express";
const router = express.Router();

import { 
    login,
    signup,
    logout,
    verifyEmail,
    forgotPassword,
    resetPassword,
    checkAuth
} from "../controllers/authController.js";

import { verifyToken } from "../middleware/verifyToken.js";

router.get("/check-auth", verifyToken, checkAuth);

router.post('/signup',signup)

router.post('/verify-email',verifyEmail)

router.post('/login',login)

router.post('/logout',logout)

router.post('/forgot-password',forgotPassword)

router.post("/reset-password/:token", resetPassword);

export default router; 