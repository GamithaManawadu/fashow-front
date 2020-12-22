const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Feedback = new Schema({
  name: {
    type: String
  },
  mobile: {
    type: String
  },
  message: {
    type: String
  },
  email: {
    type: String
  }
},{
    collection: 'feedback'
});

module.exports = mongoose.model('Feedback', Feedback);