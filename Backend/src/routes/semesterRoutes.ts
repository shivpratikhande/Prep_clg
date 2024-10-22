import express from 'express';
import semesterController from '../controllers/semesterController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/semesters', semesterController.createSemester);
router.post('/semesters/:semesterId/subjects', semesterController.addSubject);
router.post('/semesters/:semesterId/subjects/:subjectId/chapters', semesterController.addchapter);
router.post('/semesters/:semesterId/subjects/:subjectId/chapters/:chapterId/resources', semesterController.addResource);
/* router.post('/semesters/:semesterId/subjects/questionPaper', semesterController.addQuestionPaper);
 */


router.get('/semesters', semesterController.getAllSemesters);
router.get('/semesters/:semesterId/subjects', semesterController.getSubjectsBySemester.bind(semesterController));
router.get("/semesters/:semesterId/subjects/:subjectId/chapters", semesterController.getChaptersById)
router.get('/semesters/:semesterId/questionPaper', semesterController.getSubjectsBySemester.bind(semesterController));

export default router;
