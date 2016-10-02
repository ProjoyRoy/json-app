Template.Posts.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('posts');
    });
});

Template.Posts.helpers({
    posts: () => {
        return Posts.find({});
    }
});

