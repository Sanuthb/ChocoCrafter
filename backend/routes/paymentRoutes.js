import express from "express";
import { getAllpayments, processPayment } from "../controllers/paymentControllers.js";

const paymentrouter = express.Router();
paymentrouter.post("/pay", processPayment);
paymentrouter.get("/", getAllpayments);

export default paymentrouter;
