// usedata.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017", {
      dbName: "fullybackend",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected to fullybackend");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

export default connectDB;
