import mongoose from "mongoose";

const uri = process.env.MONGO_DB;

const mongoDbDatabase = () => {
  try {
    mongoose.connect(uri);
    console.log("Mongoose database connected");
  } catch (error) {
    console.log(error.message);
  }
};
export default mongoDbDatabase;
