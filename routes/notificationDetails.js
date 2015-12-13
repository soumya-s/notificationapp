 var express   =   require('express');
var router    =   express.Router();
var Notification = require('../models/notificationDetails');

router.post('/', function(req,res,next) {
	 if (req.body) {
			  var data=req.body; 
		      var notification   = new Notification();
		      notification.details=data;
		      //console.log(notification.details);  
		 	 notification.save(function(err, notificationResult) {
		  	   if(err){

		  	   }
		  	   else
		  	   {
				  	res.json ({
			         		code:200
			     
			    }); 
		  	   }
		  });
	}
});


module.exports = router;
