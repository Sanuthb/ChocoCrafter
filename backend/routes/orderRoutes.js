import express from 'express'

import {placeOrder,getUserOrders} from "../controllers/orderController.js"

const orderrouter = express.Router()

orderrouter.post("/create", placeOrder);
orderrouter.get("/user/:userId", getUserOrders);


export default orderrouter