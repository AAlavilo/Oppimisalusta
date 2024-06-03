import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017/study-platform");

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
        console.log("Database connected");
    });
};

export default connectDB;
