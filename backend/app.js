const express = require("express");
const path = require("path");
const app = express();
const userModel = require("./userModels");

//parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/create", async (req, res) => {
  try {
    const newUser = await userModel.create({
      name: "rock",
      email: "rock@gmail.com",
      userName: "rockkkkkk",
    });
    res.status(201).send(newUser);
    console.log("New user created");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "An error occurred.", error: error.message });
  }
});

app.get("/update", async (req, res) => {
  try {
    let updateUser = await userModel.findOneAndUpdate(
      { name: "rock", },
      { userName: "rocks" },
      { new: true }
    );
    res.status(201).send(updateUser);
    console.log("user updated");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "An error occurred.", error: error.message });
  }
});

app.get("/read", async (req, res) => {
  try {
    let readUser = await userModel.find()
    res.status(201).send(readUser);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "An error occurred.", error: error.message });
  }
});

app.get("/remove", async (req, res) => {
  try {
    let readUser = await userModel.findOneAndDelete({userName:"rocks"})
    res.status(201).send(readUser);
    console.log("user deleted");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "An error occurred.", error: error.message });
  }
});

app.listen(5000, () => {
  console.log("server is running");
});
