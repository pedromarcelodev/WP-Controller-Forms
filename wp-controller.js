/*
|-------------------------------------------
|	WP Controller Forms
|-------------------------------------------
|
|
|	Author: Pedro Marcelo
|	Author URI: https://github.com/pedromarcelojava
|	Plugin URI: https://github.com/pedromarcelojava/WP-Controller-Forms
|	Version: 1.3.1
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
				validFields: '',
				validFieldsFunction: function(index, element){},
				validFieldsError: function(){},
				beforePost: function(){},
				before: function(r){},
				after: function(r){}
			};

			if (options === undefined) options = {};

			if ($.wpControllerVars === undefined)
			{
				$.wpControllerVars = {};
				$.wpControllerVars[this.attr('id')] = $.extend({}, defaults, options);
			}
			else
			{
				$.wpControllerVars[this.attr('id')] = $.extend({}, defaults, options);
			}

			this.submit(function(e)
			{
				var wpcVars = $.wpControllerVars[$(this).attr('id')];
				var data = $(this).serialize() + "&action=" + wpcVars.action;

				var faults = $(this).find(wpcVars.validFields).filter(wpcVars.validFieldsFunction);

				if (faults.length)
				{
					wpcVars.validFieldsError();
				}
				else
				{
					if (wpcVars.url.length == 0)
					{
						wpcVars.url = $(this).attr('action');
					}

					wpcVars.beforePost();

					$.post(wpcVars.url, data, function(r)
					{
						wpcVars.before(r);
						$(wpcVars.target).html(r);
						wpcVars.after(r);
					});
				}

				e.preventDefault();
			});
		}

		return this;
	}

})(jQuery);