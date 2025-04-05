import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"
import adminrouter from "./routes/adminRoutes.js";
import orderrouter from "./routes/orderRoutes.js";
import chocorouter from "./routes/chocoRoutes.js";
import authrouter from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import paymentrouter from "./routes/paymentRoutes.js";
dotenv.config()
const app=express();
app.use(cors())
app.use(json())


app.use("/api/v1/auth",authrouter)
app.use("/api/v1/chocolate",chocorouter)
app.use("/api/v1/order",orderrouter)
app.use("/api/v1/admin",adminrouter)
app.use("/api/v1/payments", paymentrouter);

connectDB()
const PORT=process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));