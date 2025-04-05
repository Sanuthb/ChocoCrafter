import express from 'express'
import {createChocolate,getAllChocolates} from "../controllers/chocoController.js"


const chocorouter = express.Router()

chocorouter.post("/create", createChocolate);
chocorouter.get("/all", getAllChocolates);

export default chocorouter