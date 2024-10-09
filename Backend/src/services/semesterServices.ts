import Semester, { ISemester, ISubject, IResource } from '../models/semester';
import mongoose from 'mongoose';

class SemesterService {
    async createSemester(data: ISemester): Promise<ISemester> {
        const semester = new Semester(data);
        return await semester.save();
    }

    async addSubject(semesterId: string, subjectName: string): Promise<ISubject> {
        const semester = await Semester.findById(semesterId);
        if (!semester) throw new Error('Semester not found');

        const subject: ISubject = {
            subjectId: new mongoose.Types.ObjectId(),
            subjectName,
            resources: [],
        };

        semester.subjects.push(subject);
        await semester.save();
        return subject;
    }

    async addResource(semesterId: string, subjectId: string, resourceData: { resourceType: string; resourceUrl: string }): Promise<IResource> {
        const semester = await Semester.findById(semesterId);
        if (!semester) throw new Error('Semester not found');

        const subject = semester.subjects.find((s: ISubject) => s.subjectId.equals(subjectId));
        if (!subject) throw new Error('Subject not found');

        const resource: IResource = {
            resourceId: new mongoose.Types.ObjectId(),
            resourceType: resourceData.resourceType,
            resourceUrl: resourceData.resourceUrl,
            createdAt: new Date(),
        };

        subject.resources.push(resource);
        await semester.save();
        return resource;
    }

    async getAllSemesters(): Promise<ISemester[]> {
        return await Semester.find({}, { semesterName: 1, year: 1 });
    }
}

export default new SemesterService();
