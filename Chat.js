Messages = new Meteor.Collection("messages");
Online = new Meteor.Collection("online");
if (Meteor.isClient) {
  var user = Meteor.user();
  Template.chat_input.events({
    'click #sub': function() {
      var user = Meteor.user();
      var name = user.profile.name;
      var message = $("#chat_in").val();
      Messages.insert({text: message, name: name });
      $("#chat_in").val("");
    }
  });
  Template.addOnline = function () {
    var user = Meteor.user();
    var name = user.profile.name;
    Online.insert({name:name});
  }
  Template.chat_frame.message = function () {
    return Messages.find();
  }
  Template.remove.clear = function () {
    var messages = Messages.find();
    messages.forEach(function (line) {
      Messages.remove(line._id);
   });
  }
  Template.online.list = function () {
    var online = Online.find();
    if(online.count() > 0) {
    online.forEach(function (user) {
        return user.name;
    });
  }
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  }
