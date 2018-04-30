const mongoose =require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var UserSchema = new Schema({
  name : String,
  Lastname: String,
  phone : Number,
  Email : String,
  PWD : String,
  Adress : String,
  Statue : Boolean
});
module.exports = mongoose.model('User', UserSchema);
