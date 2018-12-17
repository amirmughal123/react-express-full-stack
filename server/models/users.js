import mongoose from 'mongoose';

const Users = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String, unique: true, required: true },
  eCode: { type: String },
  password: { type: String, required: true },
  confirmPassword: { type: String },
  phoneNo: { type: String, unique: true, required: true },
  pCode: { type: String },
  dateOfBirth: { type: String },
  gender: { type: String },
  token: { type: String }
});

export default mongoose.model('users', Users);
