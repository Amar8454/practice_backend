import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectedDB from "./db/index.js";

dotenv.config();
const app = express();

connectedDB();
























// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log(error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`mongodb connected`);
//     });
//   } catch (error) {
//     console.log("MongDb Url FAILED :", error);
//     throw error;
//   }
// })();
