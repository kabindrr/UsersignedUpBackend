import express from "express";
import { addItem } from "../model/userModal.js";

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  console.log("requested from frontend:", req.body);

  const result = await addItem(req.body);
  console.log(result);

  res.json({
    result,
    message: "user form has been added to the database",
  });
});

export default userRouter;
