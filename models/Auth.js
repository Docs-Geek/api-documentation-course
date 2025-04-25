'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// internal db model
exports.Auth = new Schema({
  created_at: Date,
  updated_at: Date,
  access_token: String,
  expires_at: Date,
  refresh_token: String,
  token_type: String,
  user_name: String,
});

// external model (API)
exports.Auth.methods.toResultFormat = function () {
  return {
    // ids have _id
    id: this._id,
    created_at: this.created_at,
    updated_at: this.updated_at,
    access_token: this.access_token,
    expires_at: this.expires_in,
    refresh_token: this.refresh_token,
    token_type: this.token_type,
    user_name: this.user_id,
  };
};
// Maybe dont return all the fields. Maybe just return these:
// access_token: this.access_token,
// expires_in: this.expires_in,
// refresh_token: this.refresh_token,
// token_type: this.token_type,
