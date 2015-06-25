if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      document.getElementById("haha").disabled = true;
      var heading = document.getElementById("GattiPrat");
      heading.className = "animated bounceInDown";
      var wait = setInterval(function() {
        ended();
        clearInterval(wait);
      }, 1000);
    }
  });

  function ended() {
    var btn = document.getElementById("haha");
    var heading = document.getElementById("GattiPrat");
    heading.className = "";
    btn.disabled = false;
  }

  Template.reset.events({
    'click button': function () {
      // reset the count when the button is clicked
      Session.set('counter', 0);
      var heading = document.getElementById("GattiPrat");
      heading.className = "";
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
