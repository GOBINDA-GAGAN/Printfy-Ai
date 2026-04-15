import "dotenv/config";
import express, { Request, Response } from "express";
import cookieParser from "cookie-parser"
import cors from "cors"
import { HTTP_STATUS } from "./config/http.config";
import { Env } from "./config/env.config";
import { errorHandeler } from "./middlewares/errorHandeler";

const app = express();

//middleware
app.use(express.json({ limit: "10MB" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: [Env.FRONTEND_ORIGIN],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true

}))



app.get("/health", (req: Request, res: Response) => {
    res.status(HTTP_STATUS.OK).json({
        message: "Server is healthy 🚀",
        status: "OKeeeee",
        environment: process.env.NODE_ENV,
        timestamp: new Date().toISOString()
    });
});

app.use(errorHandeler)



app.listen(Env.PORT, async () => {
  try {
    console.log(`Server running on port ${Env.PORT} 🚀`);
  } catch (error) {
    console.error("Server failed to start ❌", error);
  }
});




