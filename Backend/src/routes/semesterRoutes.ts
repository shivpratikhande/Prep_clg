import express from 'express';
import semesterController from '../controllers/semesterController';

const router = express.Router();

router.post('/semesters', semesterController.createSemester);
router.post('/semesters/:semesterId/subjects', semesterController.addSubject);
router.post('/semesters/:semesterId/subjects/:subjectId/resources', semesterController.addResource);
router.get('/semesters', semesterController.getAllSemesters);

export default router;
