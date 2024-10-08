import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import cookieParser from "cookie-parser"
import adminRoutes from "./routes/adminRoutes"
import semisterRoutes from "./routes/semisterRoutes"

const app = express();

app.use(cookieParser());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://shivpratikhande2017:KWAj0BaKnkHOio9s@cluster0.ggko1.mongodb.net/')
.then(() => console.log('Connected successfully to MongoDB'))
.catch(err => console.error("failed to connect", err))

// Use routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use("/admin",adminRoutes)
app.use("/semister",semisterRoutes)


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
