import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    default: null,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("UserData", userSchema);
