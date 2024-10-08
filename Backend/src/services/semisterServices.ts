import { Types } from 'mongoose';
import Semister, { ISemester } from '../models/semister'; // Ensure you're importing the ISemister interface

// Service to create a semester
export const semisterService = async (
  semesterName: string,
  year: number,
  subjects: Types.ObjectId[] // Changed to an array
): Promise<ISemester> => {
  const newSemester = new Semister({
    semesterName,
    year,
    subjects,
  });

  return await newSemester.save();
};
