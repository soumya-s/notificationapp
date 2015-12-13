 var express   =   require('express');
var router    =   express.Router();
var Notification = require('../models/notificationDetails');

router.post('/', function(req, res, next) {
	    if (req.body) {
  var notification = new Notification(req.body);
   
  notification.save(function(err, notificationResult) {
    
  });
  }
});


module.exports = router;
