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

var navbar = loggedIn.group({});

// Home Page
navbar.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

//Posts
navbar.route('/posts', {
	name: 'posts',
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
    name: 'healthLibrary',
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
