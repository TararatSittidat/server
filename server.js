
import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import prisma from "./config/prisma.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ทดสอบ Server
app.get("/", (req, res) => {
    res.json({
        message: "Server is running"
    });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
