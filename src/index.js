import express from "express";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/notetaking_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
const PORT = 4300;
app.get("/", (req, res) => {
  res.json({
    message: "Notetaking API v1"
  });
});
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
