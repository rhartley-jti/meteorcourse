Template.images.helpers({
	images: function() {
		var userFilter = Session.get("userFilter"),
			filter = {};
		if (userFilter) {
			filter = {createdBy: userFilter};
		}
		return Images.find(filter, {sort:{createdOn: -1, rating: -1}, limit:Session.get("imageLimit")});
	},
	filtering_images: function() {
		return Session.get("userFilter");
	},
	getUser: function(user_id) {
		var user = Meteor.users.findOne({_id: user_id});
		if (user) {
			return user.username;
		}
		else {
			return "anon";
		}
	},
	getFilterUser: function() {
		return Meteor.users.findOne({_id: Session.get("userFilter")}).username || "anon";
	}
});