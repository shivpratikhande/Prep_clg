import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';
import cookieParser from "cookie-parser"


export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, role } = req.body;
    await registerUser(email, password, role);
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
