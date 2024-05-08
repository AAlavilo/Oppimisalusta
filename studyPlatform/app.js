import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

mongoose.connect("mongodb://localhost:27017/study-platform");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.get("/message", (_, res) => res.send("Hello from express!"));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));