import { Router } from "express";
import { Request, Response } from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware";
import { banner } from "../controllers/adminController";

const router = Router()

router.post('/banner', authenticate, authorizeAdmin, banner );

export default router;