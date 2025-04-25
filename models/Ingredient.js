'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// internal db model
exports.Ingredient = new Schema({
  in_stock_qty: Number,
  name: String,
  price: Number,
  created_at: Date,
  updated_at: Date,
});

// external model (API)
exports.Ingredient.methods.toResultFormat = function () {
  return {
    // ids have _id
    id: this._id,
    created_at: this.created_at,
    updated_at: this.updated_at,
    name: this.name,
    in_stock_qty: this.in_stock_qty,
    price: this.price,
  };
};
