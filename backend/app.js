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

app.listen(3000, () => {
  console.log("server is running");
});
