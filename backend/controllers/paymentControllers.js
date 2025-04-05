import Stripe from "stripe";
import Payment from "../models/Payment.js";

const stripe = new Stripe("sk_test_51R6Kj6KomPn9UsXDMmiSXHOelCxYJ4HWA0qvFdWcktQoCJ8Oxvd5LTGUPvG8qUEuD83JlBONtjrwu1oYdActS9zy009MHbUwgw");

export const processPayment = async (req, res) => {
  try {
    const { customerId, amount } = req.body;
    console.log(customerId)
    if (!customerId || !amount) {
      return res.status(400).json({ error: "Customer ID and amount are required" });
    }

    // Step 1: Create Payment Intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects amount in paise (multiply by 100)
      currency: "inr",
    });

    // Step 2: Store payment record in MongoDB
    const newPayment = new Payment({
      customerId,
      amount,
      currency: "INR",
      paymentId: paymentIntent.id,
      status: "pending", // you can later update this to 'succeeded' after confirmation
    });

    await newPayment.save();

    // Step 3: Send client secret to frontend
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentId: paymentIntent.id,
    });

  } catch (error) {
    console.error("❌ Error in processPayment:", error);
    res.status(500).json({ error: error.message });
  }
};



export const getAllpayments = async (req, res) => {
  try {
    const payment = await Payment.find();
    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};