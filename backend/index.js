import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

// __INIT Files__
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoute.js"

// __INIT Configuration__
dotenv.config();
connectDB();

const app = express();

// __INIT Middlewares__
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// __INIT APP__
const PORT = process.env.PORT || 4001;

// __INIT Routes__
app.use("/api/v1/users", userRoutes);

app.listen(PORT, '127.0.0.1', () => console.log(`Server is running on port: ${PORT}`));






