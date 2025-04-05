import mongoose from 'mongoose';

const chocolateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  base: String,
  flavors: [{ name: String, price: Number }],
  fillings: [{ name: String, price: Number }],
  toppings: [{ name: String, price: Number }],
  shape: String,
  dietary: [String],
  packaging: String,
  price: Number,
  createdAt: { type: Date, default: Date.now },
});


const Chocolate = mongoose.model('Chocolate', chocolateSchema);
export default Chocolate;
