const mongoose =require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var UserSchema = new Schema({
  email : String,
  password : String,
  name : String,
  lastname: String,
  phone : Number,
  address : String
});
module.exports = mongoose.model('User', UserSchema);
