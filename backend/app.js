const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
const User_model = require("./models/user_model");

//middlewares
const app = express();

//parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  try {
    let { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newApp = await User_model.create({
      name,
      email,
      password: hashedPassword,
    });
    res.json(newApp);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen("3000", () => {
  console.log("server is running");
});
