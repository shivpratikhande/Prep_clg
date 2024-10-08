import mongoose, { Document, Schema } from 'mongoose';

const allowedSemesters = [
    { id: 1, name: "Semester 1" },
    { id: 2, name: "Semester 2" },
    { id: 3, name: "Semester 3" },
    { id: 4, name: "Semester 4" },
    { id: 5, name: "Semester 5" },
    // Add more as needed
];

interface IResource {
    resourceId: mongoose.Types.ObjectId;
    resourceType: 'pdf' | 'video';
    resourceUrl: string;
    createdAt: Date;
}

interface ISubject {
    subjectId: mongoose.Types.ObjectId;
    subjectName: string;
    resources: IResource[];
}

export interface ISemester extends Document {
    semesterName: string;
    year: number;
    subjects: ISubject[];
}

const ResourceSchema: Schema = new Schema({
    resourceId: { type: mongoose.Types.ObjectId, default: new mongoose.Types.ObjectId() },
    resourceType: { type: String, enum: ['pdf', 'video'], required: true },
    resourceUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const SubjectSchema: Schema = new Schema({
    subjectId: { type: mongoose.Types.ObjectId, default: new mongoose.Types.ObjectId() },
    subjectName: { type: String, required: true },
    resources: [ResourceSchema],
});

const SemesterSchema: Schema = new Schema({
    semesterName: { type: String, required: true, enum: allowedSemesters.map(sem => sem.name) },
    year: { type: Number, required: true },
    subjects: [SubjectSchema],
});

export default mongoose.model<ISemester>('Semester', SemesterSchema);
