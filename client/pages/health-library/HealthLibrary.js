Template.HealthLibrary.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('healthLibrary');
    });
});

Template.HealthLibrary.helpers({
    healthLibraryItems: () => {
        return healthLibrary.find({});
    }
});
