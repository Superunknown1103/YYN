const mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_wf71g691:hutlbasglpvqvida0inrff4ngu@ds121955.mlab.com:21955/heroku_wf71g691')
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  currentUser: {
   type: String
  },
  productid: {
    type: String
  },
  url: {
    type: String
  },
  name: {
    type: String
  },
  color: {
    type: String
  },
  material: {
    type: String
  },
  brand: {
    type: String
  },
  style: {
    type: String
  },
  liked: {
    type: Boolean
  }
  // Need logic for how to add attributes that are not already inside user-schema
  // Dynamically update the database
});

var Product = module.exports = mongoose.model('Product', ProductSchema);
