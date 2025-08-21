const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.use(express());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/create", async (req, res) => {
  let newUser = await userModel.create({
    userName: "rob",
    email: "rob@gmail.com",
    age: 22,
    posts: [],
  });
  res.send(newUser);
});

app.get("/newPost", async (req, res) => {
  let newPost = await postModel.create({
    postdata: "readddddd",
    user: "68a55c6835c988d086bfee1d",
  });

  let user = await userModel.findOne({ _id: "68a55c6835c988d086bfee1d" });
//   console.log(newPost)
  user.posts.push(newPost._id);
  user.save()
  res.send(newPost);
});

app.listen(3000, () => {
  console.log("servere is running");
});
