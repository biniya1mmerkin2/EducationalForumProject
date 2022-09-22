import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/forum.js";
import user from "./routes/user.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use("/forum", router);
app.use("/user", user);

app.get("/", (req, res) => {
  res.send("welcome to our server Api");
});

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server is running on PORT:${PORT}`);
    })
  )
  .catch((error) => console.log(error));
