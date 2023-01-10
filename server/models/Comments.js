const { Schema } = require('mongoose');

const commentsSchema = new Schema({
    commentText:
      {
        type: String,
      },
    })

    module.exports = commentsSchema;
