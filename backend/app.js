const express = require("express");
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const upload = multer();

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/test", upload.none(), (req, res) => {
  console.log(req.body);
  res.send("user data found");
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

app.listen(3000, () => {
  console.log("server is running");
});
