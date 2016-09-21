

Template.basket.onRendered(function() {
  $.Pages.initFormGroupDefault()

  $('#datepicker-component').datepicker();

  $('#timepicker').timepicker().on('show.timepicker', function(e) {
		var widget = $('.bootstrap-timepicker-widget');
		widget.find('.glyphicon-chevron-up').removeClass().addClass('pg-arrow_maximize');
		widget.find('.glyphicon-chevron-down').removeClass().addClass('pg-arrow_minimize');
	});
})
