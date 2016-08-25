// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

// Home Page
// FlowRouter.route('/dashboard', {
//     name: 'dashboard',
//     action() {
//         BlazeLayout.render("AppLayout", {main: "Dashboard"});
//     }
// });

FlowRouter.route('/posts', {
	name: 'posts',
	action() {
			BlazeLayout.render("AppLayout", {main: "Posts"});
	}
});

FlowRouter.route('/posts/:id', {
    name: 'single-post',
    action() {
        BlazeLayout.render('AppLayout', {main: 'SinglePost'});
    }
});