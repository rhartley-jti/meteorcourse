Template.images.events({
	'click .js-image': function (event) {
		$(event.target).css("width", "50px");
	},
	'click .js-del-image': function (event) {
		var image_id = this._id;
		$("#" + image_id).hide('slow', function () {
			Images.remove({ "_id": image_id });
		});
	},
	'click .js-rate-image': function (event) {
		var rating = $(event.currentTarget).data("userrating");
		var image_id = this.image_id;
		Images.update({ _id: image_id }, { $set: { rating: rating } });
	},
	'click .js-show-image-form': function (event) {
		$("#image_add_form").modal('show');
	},
	'click .js-set-image-filter': function (event) {
		Session.set("userFilter", this.createdBy);
	},
	'click .js-remove-image-filter': function (event) {
		Session.set("userFilter", undefined);
	}
});
