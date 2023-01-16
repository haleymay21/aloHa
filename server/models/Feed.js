const { Schema } = require("mongoose");
const commentsSchema = require("./Comments");
// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const feedSchema = new Schema({
<<<<<<< HEAD
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
=======
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
>>>>>>> ddb5bd7608cd798bc7bf491dcab135cdaefba524
  },
  comments: [commentsSchema],
});

module.exports = feedSchema;
