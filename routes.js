var exposed = FlowRouter.group({});

var loggedIn = FlowRouter.group({
  triggersEnter: [
    function() {
      var route;
      if (!(Meteor.loggingIn() || Meteor.userId())) {
        route = FlowRouter.current();
        if (route.route.name !== 'home') {
          Session.set('redirectAfterLogin', route.path);
        }
        return FlowRouter.go('home');
      }
    }
  ]
});


// Home Page
exposed.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

loggedIn.route('/posts', {
	name: 'posts',
	action() {
			BlazeLayout.render("AppLayout", {main: "Posts"});
	}
});

loggedIn.route('/posts/:id', {
    name: 'single-post',
    action() {
        BlazeLayout.render('AppLayout', {main: 'SinglePost'});
    }
});