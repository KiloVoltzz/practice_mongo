const mongoose = require("mongoose");

const UsermodelSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  {
    timestamps: true,
  }
);

const Usermodel = mongoose.model("Usermodel", UsermodelSchema);

module.exports = Usermodel;
