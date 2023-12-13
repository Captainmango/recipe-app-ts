import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(cors({ credentials: true }));

app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("error", (error: Error) => console.log(error));

const server = http.createServer(app);

const port = 6001 || process.env.PORT;

server.listen(6001, () => {
	console.log("Server running on port:", port);
});