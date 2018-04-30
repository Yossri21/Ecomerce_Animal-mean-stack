const mongoose =require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var AnimalSchema = new Schema({
  title: String,
  description: String,
  Price: String,
  Created: { type: Date, default: Date.now },
  Categorie: ["Cat" , "Dog" , "Bird" , "Cow" , "Lamb" , "Horse" , "Other" ],
  Age: Number,
  Weight : Number,
  Image : [String],
  user: Schema.ObjectId
});

module.exports = mongoose.model('Animal', AnimalSchema);
