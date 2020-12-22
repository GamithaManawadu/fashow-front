const express = require('express');
const feedbackRoutes = express.Router();

// Require Business model in our routes module
let Feedback = require('./feedback.model');

// Defined store route
feedbackRoutes.route('/add').post(function (req, res) {
  let feedback = new Feedback(req.body);
  feedback.save()
    .then(feedback => {
      res.status(200).json({'feedback': 'feedback is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
feedbackRoutes.route('/').get(function (req, res) {
    Feedback.find(function(err, feedback){
    if(err){
      console.log(err);
    }
    else {
      res.json(feedback);
    }
  });
});

module.exports = feedbackRoutes;