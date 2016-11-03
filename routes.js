var loggedIn = FlowRouter.group({
  triggersEnter: [
    function() {
      var route;
      if (!(Meteor.loggingIn() || Meteor.userId())) {
        route = FlowRouter.current();
        if (route.route.name !== 'Home') {
          Session.set('redirectAfterLogin', route.path);
        }
        return FlowRouter.go('Home');
      }
    }
  ]
});

var navbar = loggedIn.group({
  name: "navbar"
});

// Home Page
navbar.route('/', {
    name: 'Home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

//Posts
navbar.route('/posts', {
	name: 'Posts',
	action() {
		BlazeLayout.render("AppLayout", {main: "Posts"});
	}
});

loggedIn.route('/posts/:id', {
    name: 'singlePost',
    action() {
        BlazeLayout.render('AppLayout', {main: "SinglePost"});
    }
});

//Health Library
navbar.route('/healthLibrary', {
    name: 'Health Library',
    action() {
        BlazeLayout.render('AppLayout', {main: "HealthLibrary"});
    }
});

loggedIn.route('/healthLibrary/:id', {
    name: 'singleHealthLibraryItem',
    action() {
        BlazeLayout.render('AppLayout', {main: "SingleHealthLibraryItem"});
    }
});
