const mongoose = require("mongoose");

// Connect MongoDB at default port 27017.
mongoose.connect("mongodb://localhost:27017/allUsers");

const userSchema = new mongoose.Schema({
  userName: { type: String },
  email: { type: String },
  age: { type: Number },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref:"post" }],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
