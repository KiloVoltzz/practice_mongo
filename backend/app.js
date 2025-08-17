const express = require("express");
// const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const app = express();
var jwt = require("jsonwebtoken");

//parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  // res.cookie("name","bob")
  //   bcrypt.genSalt(10, function (err, salt) {
  //     bcrypt.hash("lololo", salt, function (err, hash) {
  //       // Store hash in your password DB.
  //       console.log(hash);
  //     });
  //   });
  var token = jwt.sign({ email: "bar@gmail.com" }, "shhhhh");
  res.cookie("token", token);
  res.send("done");
});

app.get("/read", (req, res) => {
//   console.log(req.cookies);
  //   bcrypt.compare("llololo", "$2b$10$fjfQRYHsyBv4lXTpl5Fbl.oED6HUzcQr2zQIXDsIndQWqesw.Gfj2", function (err, result) {
  //     // result == true
  //     console.log(result)
  //   });
  let data = jwt.verify(req.cookies.token, "shhhhh")
  console.log(data); // bar
  res.send("checking");
});

app.listen("3000", () => {
  console.log("Server is running");
});
