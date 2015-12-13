var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var NotificationSchema = new Schema({
	// humanId:{ type: String},
	// updatedAt: { type: String},
 //       model:{ type: String},
 //       action: { type: String},
 //       objectId: { type: String},
 //       endpoint:{ type: String}
 
 	details:{type:Array}
  
});
module.exports = mongoose.model('Notification', NotificationSchema);
