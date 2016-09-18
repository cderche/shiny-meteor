FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('ApplicationLayout', {
      header: 'FrontendHeader',
      main: 'HomeLayout',
      footer: 'FrontendFooter',
    })
  }
})
