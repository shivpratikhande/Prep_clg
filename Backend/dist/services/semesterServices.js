"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const semester_1 = __importDefault(require("../models/semester"));
const mongoose_1 = __importDefault(require("mongoose"));
class SemesterService {
    createSemester(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const semester = new semester_1.default(data);
            return yield semester.save();
        });
    }
    addSubject(semesterId, subjectName) {
        return __awaiter(this, void 0, void 0, function* () {
            const semester = yield semester_1.default.findById(semesterId);
            if (!semester)
                throw new Error('Semester not found');
            const subject = {
                subjectId: new mongoose_1.default.Types.ObjectId(),
                subjectName,
                resources: [],
            };
            semester.subjects.push(subject);
            yield semester.save();
            return subject;
        });
    }
    addResource(semesterId, subjectId, resourceData) {
        return __awaiter(this, void 0, void 0, function* () {
            const semester = yield semester_1.default.findById(semesterId);
            if (!semester)
                throw new Error('Semester not found');
            const subject = semester.subjects.find((s) => s.subjectId.equals(subjectId));
            if (!subject)
                throw new Error('Subject not found');
            const resource = {
                resourceId: new mongoose_1.default.Types.ObjectId(),
                resourceType: resourceData.resourceType,
                resourceUrl: resourceData.resourceUrl,
                createdAt: new Date(),
            };
            subject.resources.push(resource);
            yield semester.save();
            return resource;
        });
    }
    getAllSemesters() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield semester_1.default.find({}, { semesterName: 1, year: 1 });
        });
    }
    getSubjectsBySemester(semesterId) {
        return __awaiter(this, void 0, void 0, function* () {
            const semester = yield semester_1.default.findById(semesterId)
                .populate('subjects', 'subjectName'); // Populate subjects
            if (!semester) {
                throw new Error('Semester not found');
            }
            return semester.subjects; // Return the populated subjects
        });
    }
}
exports.default = new SemesterService();
