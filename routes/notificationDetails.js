 var express   =   require('express');
var router    =   express.Router();
var Notification = require('../models/notificationDetails');

router.post('/', function(req, res, next) {
	    if (!error && req.statusCode == 200) {
  var notification = new Notification(req.body);
   
  notification.save(function(err, notificationResult) {
    
  });
  }
});


module.exports = router;
