import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  email: string;
  password: string;
  role: String
  comparePassword: (password: string) => Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

// Hash password before saving
userSchema.pre<IUser>('save', async function(next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Compare passwords
userSchema.methods.comparePassword = async function(password: string) {
  return bcrypt.compare(password, this.password);
};

export const User = model<IUser>('User', userSchema);
