Template.SinglePost.onCreated(function(){
    var self = this;
    self.autorun(function(){
        var id = FlowRouter.getParam('id');
        console.log(id);
        self.subscribe('singlePost', id);
    });
});

Template.SinglePost.helpers({
    post: () => {
        var id = FlowRouter.getParam('id');
        return Posts.findOne({_id: id});
    }
});
