/*
|-------------------------------------------
|	WP Controller Forms
|-------------------------------------------
|
|
|	Author: Pedro Marcelo
|	Author URI: https://github.com/pedromarcelojava
|	Plugin URI: https://github.com/pedromarcelojava/WP-Controller-Forms
|	Version: 1.2
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
				valid_fields: '',
				valid_fields_function: function(){},
				valid_fields_error: function(){},
				before: function(r){},
				after: function(r){}
			};

			if (options === undefined) options = {};

			$.wpControllerVars = $.extend({}, defaults, options);

			this.submit(function(e)
			{
				var wpc_vars = $.wpControllerVars;
				var data = $(this).serialize() + "&action=" + wpc_vars.action;

				var faults = $(this).find(wpc_vars.valid_fields).filter(wpc_vars.valid_fields_function);

				if (faults.length)
				{
					wpc_vars.valid_fields_error();
				}
				else
				{
					if (wpc_vars.url.length == 0)
					{
						wpc_vars.url = $(this).attr('action');
					}

					$.post(wpc_vars.url, data, function(r)
					{
						wpc_vars.before(r);
						$(wpc_vars.target).html(r);
						wpc_vars.after(r);
					});
				}

				e.preventDefault();
			});
		}

		return this;
	}

})(jQuery);