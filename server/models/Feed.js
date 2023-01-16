const { Schema } = require('mongoose');
const commentsSchema = require('./Comments')
// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const feedSchema = new Schema({
  status:
  {
    type: String,
  },
  urgency: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  // saved book id from GoogleBooks
  resolved: {
    type: String,
  },
  comments: [commentsSchema]
});

module.exports = feedSchema;
