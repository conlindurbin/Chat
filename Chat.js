Messages = new Meteor.Collection("messages");
if (Meteor.isClient) {
  Template.chat_input.events({
    'click #sub': function() {
      var message = $("#chat_in").val();
      Messages.insert({text: message});
      $("#chat_in").val("");
    }
  });
  Template.chat_frame.message = function () {
    return Messages.find();
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  }
