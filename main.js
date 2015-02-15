Posts = new Mongo.Collection("posts");

if (Meteor.isServer){
  //code here will run on the backend
  Meteor.methods({
    addPost: function(title, story, author, date) {
      Posts.insert({
        title: title,
        story: story,
        author: author,
        date: date
      });
    },
    deletePost: function(id) {
      Posts.remove(id);
    }
  });
}

if (Meteor.isClient){
  //code here will run on clientside
}