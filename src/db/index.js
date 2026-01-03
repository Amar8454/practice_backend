import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
// import { asyncHandler } from "../utils/asyncHandler.js";

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










// using asyncHandler where we do not use try and catch
// const showerror = asyncHandler(async (req, res) => {
//   mongoose.connection(`${process.env.MONGODB_URL}/${DB_NAME}`);
// });

// export default showerror;
