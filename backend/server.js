import express from "express";
import db from "./database/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors"
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";



const app = express();
const port = process.env.PORT || 5001;
dotenv.config();


app.use(cors({ origin: "http://localhost:5173", credentials: true }));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/auth',authRoutes)



app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

//jskXLko12UvqRS2y

