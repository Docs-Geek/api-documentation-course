'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// internal db model
exports.Order = new Schema({
  name: String,
  table_number: Number,
  status: String,
  priority: Number,
  dish_ids: [String],
  special_requests: String,
  scheduled_at: String,
  created_at: Date,
  updated_at: Date,
});

// external model (API)
exports.Order.methods.toResultFormat = async function () {
  return {
    // ids have _id
    id: this._id,
    created_at: this.created_at,
    updated_at: this.updated_at,
    scheduled_at: this.scheduled_at,
    name: this.given_name,
    table_number: this.table_number,
    status: this.status,
    priority: this.priority,
    dish_ids: this.dish_ids,
    special_requests: this.special_requests,
  };
};
