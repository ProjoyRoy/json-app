Template.SinglePost.onCreated(function(){
    var self = this;
    self.autorun(function(){
        var id = FlowRouter.getParam('id');
        self.subscribe('singlePost', id);
    });
});

Template.SinglePost.helpers({
    post: () => {
        var id = FlowRouter.getParam('id');
        return Posts.findOne({_id: id});
    }
});

Template.SinglePost.helpers({
    post_json: () => {
        var id = FlowRouter.getParam('id');
        return Posts.find({_id: id}).fetch();
    }
});