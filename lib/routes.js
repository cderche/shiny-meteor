FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('ApplicationLayout', {
      header: 'HomeHeader',
      main: 'HomeLayout',
      footer: 'FrontendFooter',
    })
  }
})

var basketRoutes = FlowRouter.group({
  prefix: '/basket',
  name: 'basket',
})

basketRoutes.route('/', {
  action() {
    BlazeLayout.render('ApplicationLayout', {
      header: 'BasketHeader',
      main: 'BasketItemsLayout'
    })
  }
})
