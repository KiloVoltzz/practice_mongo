const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postdata: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  data: { type: Date, default: Date.now },
});

const post = mongoose.model("post", postSchema);

module.exports = post;
