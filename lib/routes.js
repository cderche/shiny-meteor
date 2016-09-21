FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('_defaultLayout', {
      main: 'home',
      header: 'defaultHeader',
    })
  },
})

var basketRoutes = FlowRouter.group({
  prefix: '/basket',
  name: 'basket',
})

basketRoutes.route('/', {
  action() {
    BlazeLayout.render('_defaultLayout', {
      main: 'basket',
      header: 'darkHeader',
    })
  }
})
