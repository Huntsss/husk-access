if (Meteor.isClient) {
  //run client side code
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
