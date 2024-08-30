"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

exports.User = new Schema({
  user_name: String,
  password: String,
  email: String,
  role: String,
  created_at: Date,
  updated_at: Date,
});

exports.User.methods.toResultFormat = async function () {
  return {
    user_id: this._id,
    created_at: this.created_at,
    updated_at: this.updated_at,
    user_name: this.user_name,
    password: this.password,
    email: this.email,
    role: this.role,
  };
};
