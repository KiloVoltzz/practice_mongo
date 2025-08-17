// mdbc
// msch
const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/practice_mongo');

const userModelsSchema =  mongoose.Schema({
  name: String, 
  email: String,
  userName: String,
});

const UserModels = mongoose.model('user', userModelsSchema)

module.exports = UserModels