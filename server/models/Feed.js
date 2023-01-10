const { Schema } = require('mongoose');
const commentsSchema = require('./Comments')
// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const feedSchema = new Schema({
  status:
    {
      type: String,
    },
  urgency: {
    type: Number,
    required: true,
    // add a min and max between 1-5 
  },
  // saved book id from GoogleBooks
  resolved: {
    type: Boolean,
    required: true,
  },
  comments: [commentsSchema]
});

module.exports = feedSchema;
