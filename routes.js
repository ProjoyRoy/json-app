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
	name: 'post',
	action() {
			BlazeLayout.render("PostLayout", {main: "Post"});
	}
});