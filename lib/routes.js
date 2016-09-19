// import { FlowRouter } from 'meteor/kadira:flow-router'
// import { BlazeLayout } from 'meteor/kadira:blaze-layout'

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

FlowRouter.route('/home', {
  name: 'home',
  action() {
    BlazeLayout.render('ApplicationLayout', {
      header: 'FrontendHeader',
      main: 'HomeLayout',
      footer: 'FrontendFooter',
    })
  }
})
