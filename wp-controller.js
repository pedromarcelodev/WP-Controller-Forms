/*
|-------------------------------------------
|	WP Controller Forms
|-------------------------------------------
|
|
|	Author: Pedro Marcelo
|	Author URI: https://github.com/pedromarcelojava
|	Plugin URI: https://github.com/pedromarcelojava/WP-Controller-Forms
|	Version: 1.0
*/

(function($)
{

	$.fn.wpController = function(options)
	{
		if (this.is('form'))
		{			
			var defaults = {
				action: '',
				target: '',
				url: '',
				before: function(r){},
				after: function(r){}
			};

			if (options === undefined) options = {};

			$.wpControllerVars = $.extend({}, defaults, options);

			this.submit(function(e)
			{
				var data = $(this).serialize() + "&action=" + $.wpControllerVars.action

				if ($.wpControllerVars.url.length == 0)
				{
					$.wpControllerVars.url = $(this).attr('action');
				}

				$.post($.wpControllerVars.url, data, function(r)
				{
					$.wpControllerVars.before(r);
					$($.wpControllerVars.target).html(r);
					$.wpControllerVars.after(r);
				});

				e.preventDefault();
			});
		}

		return this;
	}

})(jQuery);