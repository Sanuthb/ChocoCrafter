import express from 'express'
import {getAllUsers,getAllOrders, deleteUser, updateOrderStatus} from "../controllers/adminController.js"

const adminrouter = express.Router()

adminrouter.get("/users" ,getAllUsers);
adminrouter.get("/orders", getAllOrders);
adminrouter.delete("/deleteuser/:id", deleteUser);
adminrouter.put("/updateorder/:id", updateOrderStatus);

export default adminrouter