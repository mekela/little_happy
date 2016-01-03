$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//show menu
	$( ".js_show_menu" ).click(function() {
	  $( "ul.nav" ).slideToggle( "slow");
	});

	//sidebar menu
	$( ".sidebar_menu_block" ).hide();

	$( ".js-show-sid-menu" ).click(function() {
	  $(this).next().slideToggle( "slow");
	});

	//plusminus
	$('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    
	//zoom slider
	var $easyzoom = $('.easyzoom').easyZoom();

	// Setup thumbnails example
	var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

	$('.thumbnails').on('click', 'a', function(e) {
		var $this = $(this);

		e.preventDefault();

		// Use EasyZoom's `swap` method
		api1.swap($this.data('standard'), $this.attr('href'));
	});

	//tabs
	 $('ul.tabs').each(function(){
	    // For each set of tabs, we want to keep track of
	    // which tab is active and its associated content
	    var $active, $content, $links = $(this).find('a');

	    // If the location.hash matches one of the links, use that as the active tab.
	    // If no match is found, use the first link as the initial active tab.
	    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
	    $active.addClass('active');

	    $content = $($active[0].hash);

	    // Hide the remaining content
	    $links.not($active).each(function () {
	      $(this.hash).hide();
	    });

	    // Bind the click event handler
	    $(this).on('click', 'a', function(e){
	      // Make the old tab inactive.
	      $active.removeClass('active');
	      $content.hide();

	      // Update the variables with the new link and content
	      $active = $(this);
	      $content = $(this.hash);

	      // Make the tab active.
	      $active.addClass('active');
	      $content.show();

	      // Prevent the anchor's default click action
	      e.preventDefault();
	    });
	  });
});


