import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectedDB = async () => {
  try {
    const connectionDB = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log("MongoDb connected");
    console.log(connectionDB.connection.host);

  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default connectedDB;
