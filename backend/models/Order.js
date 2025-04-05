import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  chocolates: [
    {
      name: String,
      ingredients: [String],
      customization: {
        shapeDesign: String,
        dietaryPreferences: [String],
        packaging: String,
        addOnExtras: [String],
      },
      quantity: Number,
      price: Number,
    },
  ],
  totalAmount: Number,
  paymentStatus: { type: String, default: 'pending' },
  orderStatus: { type: String, default: 'processing' },
  createdAt: { type: Date, default: Date.now },
});


const Order = mongoose.model('Order', orderSchema);
export default Order;
