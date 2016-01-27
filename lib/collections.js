Images = new Mongo.Collection("images");

// set up security on Images collection
Images.allow({
	insert: function(userId, doc) {
		if (Meteor.user()) { //allow to insert if logged in
			if (userId != doc.createdBy){
				return false;
			}
			return true;
		}
		return false;
	},
	remove: function(userId, doc) {
		return true;
	}
});