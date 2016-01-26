Template.body.helpers({
	username: function() {
	    var user = Meteor.user();
	    if (user) {
	        return user.username;
	    }
	    else {
	        return "anonymous internet user";
	    }
	}
});