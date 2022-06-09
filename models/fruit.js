
  const mongoose = require('./connection.js')
  ////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose

// const Schema =mongoose.Schema
// const model = mongoose.model
// the same as line 41 destruction objects
const { Schema, model } = mongoose;

// make fruits schema
const fruitsSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
    username: String,
  });


// make fruit model
// 'fruit' is the model name
const Fruit = model("Fruit", fruitsSchema);

module.exports = Fruit;