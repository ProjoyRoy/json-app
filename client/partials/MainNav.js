Template.registerHelper('groupRoutes', function () {
  FlowRouter.watchPathChange()
  var groupName = 'navbar'
  return _.filter(FlowRouter._routes, function (route) {
    return route.group.name === groupName
  })
})