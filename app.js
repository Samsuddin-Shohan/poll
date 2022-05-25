const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("hello");
});
mongoose
  .connect("mongodb://localhost:27017/poll", { useNewUrlParser: true })
  .then(() => {
    app.listen(5000, () => {
      console.log("Listening on port 5000");
    });
  })
  .catch((e) => {
    console.log(e);
  });
