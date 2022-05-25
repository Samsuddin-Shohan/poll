const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { homeGetController } = require("./controller/homeGetController");
const {
  createPollGetController,
} = require("./controller/createPollGetController");
const {
  createPollPostController,
} = require("./controller/createPollPostController");
const {
  viewAllPollsGetController,
} = require("./controller/viewAllPollsGetController");

const { viewPollGetController } = require("./controller/viewPollGetController");
const {
  viewPollPostController,
} = require("./controller/viewPollPostController");
const { notFoundController } = require("./controller/notFoundController");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", homeGetController);

app.get("/create", createPollGetController);
app.post("/create", createPollPostController);

app.get("/polls", viewAllPollsGetController);

app.get("/polls/:id", viewPollGetController);
app.post("/polls/:id", viewPollPostController);

app.get("*", notFoundController);

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
