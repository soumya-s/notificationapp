var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var NotificationSchema = new Schema({
	notification :{ type: Array}
  
});
module.exports = mongoose.model('Notification', NotificationSchema);
