const { Schema } = require("mongoose");
const commentsSchema = require("./Comments");
// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const feedSchema = new Schema({
  status: {
    type: String,
  },
  general: {
    type: Boolean,
    required: false,
  },
  // saved book id from GoogleBooks
  resolved: {
    type: Boolean,
    required: false,
  },
  comments: [commentsSchema],
});

module.exports = feedSchema;
