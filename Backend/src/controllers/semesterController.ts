
import { Request, Response } from 'express';
import { semesterService } from '../services/semesterServices';

export const semester = async (req: Request, res: Response): Promise<void> => {
    try {
        const { semesterName, year, subjects } = req.body;
        await semesterService(semesterName, year, subjects)
        console.log(semesterName, year, subjects)
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
};
