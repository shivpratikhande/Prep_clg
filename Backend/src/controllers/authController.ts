import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';
import semester from '../models/semester';


const allowedSemesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5'];


export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, role, semesterName } = req.body;

    //logic

    if (role === 'student') {
      // Validate semester only for students
      if (!allowedSemesters.includes(semesterName)) {
        res.status(400).json({ message: "Invalid semester name" });
        return; // Early return to prevent further execution
      }

      const semesterr = await semester.findOne({ semesterName });
      if (!semester) {
        res.status(400).json({ message: "Semester not found" });
        return; // Early return
      }
    } else if (role === 'admin') {
      //nt
    } else {
      res.status(400).json({ message: "Invalid role" });
      return; // Early return
    }

    await registerUser(email, password, role, semesterName);
    console.log(email, password, role)
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const { token } = await loginUser(email, password);

    res.cookie('token', token, {
      httpOnly: true,  // Prevents JavaScript access
      secure: true,    // Cookie is only sent over HTTPS
/*       sameSite: 'Strict' // Helps prevent CSRF attacks
 */    });

    res.json({ token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json({ message: error.message });
    } else {
      res.status(401).json({ message: 'An unknown error occurred' });
    }
  }
};
