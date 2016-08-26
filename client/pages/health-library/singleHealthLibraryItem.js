Template.SingleHealthLibraryItem.onCreated(function(){
    var self = this;
    self.autorun(function(){
        var id = FlowRouter.getParam('id');
        console.log(id);
        self.subscribe('healthLibraryItem', id);
    });
});

Template.SingleHealthLibraryItem.helpers({
    healthLibraryItem: () => {
        var id = FlowRouter.getParam('id');
        return HealthLibrary.findOne({_id: id});
    }
});
