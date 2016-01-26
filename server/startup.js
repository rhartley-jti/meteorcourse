if (Meteor.isServer) {
  Meteor.startup(function() {
    if (Images.find().count() == 0) {
      console.log("startup.js says: Creating Images collection");
      for(var i = 1; i < 23; i++) {
        Images.insert(
          {
            img_src: "img_" + i + ".jpg",
            img_alt: "image number" + i
          });
      }
      console.log("startup.js says: Images count after creation: " + Images.find().count());
    }
  });
}
