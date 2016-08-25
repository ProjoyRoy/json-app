Accounts.onLogin(function() {
  var redirect;
  redirect = Session.get('redirectAfterLogin');
  if (redirect != null) {
    return FlowRouter.go(redirect);
  }
});

Accounts.onLogout(function() {
	return FlowRouter.redirect('home');
});