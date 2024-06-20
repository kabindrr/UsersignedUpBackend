import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoDbDatabase from "./src/databaseConfig/mongoConfig.js";
import userRouter from "./src/routes/userRouter.js";

const app = express();
const PORT = 8005;

app.use(cors());

app.use(express.json(""));
app.use(morgan("dev"));
mongoDbDatabase();

app.use("/", userRouter);

app.listen(PORT, (error) => {
  error
    ? console.log("some error")
    : console.log(`server connected at ${PORT}`);
});
