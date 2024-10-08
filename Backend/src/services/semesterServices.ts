import { Types } from 'mongoose';
import semester, { ISemester } from '../models/semester'; // Ensure you're importing the ISemister interface

// Service to create a semester
export const semesterService = async (
  semesterName: string,
  year: number,
  subjects: Types.ObjectId[] // Changed to an array
): Promise<ISemester> => {
  const newSemester = new semester({
    semesterName,
    year,
    subjects,
  });

  return await newSemester.save();
};
