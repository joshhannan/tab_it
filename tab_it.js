(function($) {
	$.fn.tab_it = function( options ) {
		var active_button;
		var object = $(this);
		var settings = $.extend({
			tab_button:  '.tab_links .button',
			tab_content: '.tab_content .tab'
		}, options );
		$(this).each(function() {
			// SETUP TABS
			$(settings.tab_content).hide();
			$(settings.tab_content).first().show();
			$(settings.tab_button).parents('div').find(settings.tab_button).first().addClass('active');
			$(settings.tab_button).click(function() {
				if( !$(this).hasClass('active') ) {
					// SET UP ACTIVE BUTTON
					active_button = $(this).data('name');
					$('.tab_links .button').removeClass('active');
					$(this).addClass('active');
					//TOGGLE CORRESPONDING CONTENT
					$(settings.tab_content).hide();
					$(settings.tab_content+'#'+active_button).fadeIn('300');
				}
			});
		});
		return this;
	}; //  END TAB_IT FUNCTION
}(jQuery));