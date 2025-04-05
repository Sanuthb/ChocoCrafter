import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  Address: String,
  role: { type: String, default: 'customer' }
});

const User = mongoose.model('User', userSchema);
export default User;
