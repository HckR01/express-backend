import dotenv from "dotenv"; //here we import it but we add its path down in code to make faster that file avelable where dot env file is present
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();
