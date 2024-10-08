import { Router, Request, Response } from 'express';
import Semester from '../models/semister';
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware';
import { semister } from '../controllers/semisterController';

const router = Router();

// Add a new semester
router.post('/',authenticate, authorizeAdmin, semister );

// Get all semesters
router.get('/', async (req: Request, res: Response) => {
    const semesters = await Semester.find();
    res.json(semesters);
});

export default router;
