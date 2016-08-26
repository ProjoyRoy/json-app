Meteor.publish('posts', function() {
    return Posts.find({});
});

Meteor.publish('singlePost', function(id) {
    check(id, String);
    return Posts.find({
        _id: id
    });
});

Meteor.publish('healthLibrary', function() {
    return HealthLibrary.find({});
});

Meteor.publish('healthLibraryItem', function(id) {
    check(id, String);
    return HealthLibrary.find({
        _id: id
    });
});
