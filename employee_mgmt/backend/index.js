const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const authRouter = require("./routes/auth.router");
const connectDB = require("./config/dbConfig");
const app = express();

const Port = 8080;

app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("hello");
});


app.use("/api/auth", authRouter);

mongoose.connection.once("open", () => {
  console.log("connected to DB");
  app.listen(process.env.PORT || Port, () => {
    console.log("Server is running");
  });
});