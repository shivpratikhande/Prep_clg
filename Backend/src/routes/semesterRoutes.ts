import { Router, Request, Response } from 'express';
import Semester from '../models/semester';
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware';
import { semester } from '../controllers/semesterController';

const router = Router();

// Add a new semester
router.post('/',authenticate, authorizeAdmin, semester );

// Get all semesters
router.get('/', async (req: Request, res: Response) => {
    const semesters = await Semester.find();
    res.json(semesters);
});

export default router;
