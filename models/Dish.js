'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// internal db model
exports.Dish = new Schema({
  name: String,
  category: String,
  description: String,
  image_name: String,
  ingredients: [
    {
      ingredient_id: String,
      is_essential: Boolean,
    },
  ],
  price: Number,
  preparation_time: Number,
  station: String,
  created_at: Date,
  updated_at: Date,
});

// this is only returned for GET operations
// external model (API)
exports.Dish.methods.toResultFormat = function () {
  return {
    // ids have _id
    id: this._id,
    created_at: this.created_at,
    updated_at: this.updated_at,
    name: this.name,
    description: this.description,
    category: this.category,
    price: this.price,
    preparation_time: this.preparation_time,
    image_name: this.image_name,
    ingredients: this.ingredients,
    station: this.station,
  };
};
