import { Request, Response } from 'express';
import semesterService from '../services/semesterServices';

class SemesterController {
    async createSemester(req: Request, res: Response) {
        try {
            const semester = await semesterService.createSemester(req.body);
            res.status(201).json({ semesterId: semester._id, semester });
        } catch (error: unknown) { // Specify the type as unknown
            if (error instanceof Error) {
                res.status(400).json({ error: error.message }); // Access error.message safely
            } else {
                res.status(500).json({ error: 'An unexpected error occurred.' });
            }
        }
    }

    async addSubject(req: Request, res: Response) {
        const { semesterId } = req.params;
        const { subjectName } = req.body;

        try {
            const subject = await semesterService.addSubject(semesterId, subjectName);
            res.status(201).json(subject);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unexpected error occurred.' });
            }
        }
    }

    async addResource(req: Request, res: Response) {
        const { semesterId, subjectId } = req.params;

        try {
            console.log("in")
            const resource = await semesterService.addResource(semesterId, subjectId, req.body);
            console.log("sown")

            res.status(201).json(resource);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unexpected error occurred.' });
            }
        }
    }

    async getAllSemesters(req: Request, res: Response) {
        try {
            const semesters = await semesterService.getAllSemesters();
            res.status(200).json(semesters);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unexpected error occurred.' });
            }
        }
    }
}

export default new SemesterController();
