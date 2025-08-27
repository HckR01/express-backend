import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`Database connected ${connectionInstance.connection.host}`);
  } catch (err) {
    console.log("connection ERROOR :", err);
    process.exit(1); //nodejs give a power to use process anywhere it can terminate or stop the code running
  }
};

export default connectDB;
//done