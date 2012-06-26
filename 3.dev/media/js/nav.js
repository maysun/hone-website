/* _______________________________________________
AUTHOR:		Mason Brown - http://maysundays.com
CONTENT:	Hone - js - main nav functions
_________________________________________________*/

//PAGE SCROLLING NAVIGATION
jQuery(function () {
  // Settings
  var viewportTop    = 0,
      scrollTime    = 500,
      openTime      = 600,
      completeTime  = 1200,
      siteName      = "Hone",
      scrollElement = "html,body";

  // Initialize waypoints
  $("#wrapper > .page-wrapper > section").waypoint({ offset: viewportTop });

  // Detect iOS and Android

    // Sticky nav for desktop
    //$("#header").stickyPanel();
    // Do stuff when waypoints are reached
    $("body").delegate("#wrapper > .page-wrapper > section", "waypoint.reached", function (event, direction) {
      var $active = $(this);
      if (direction === 'up') {
        $active = $active.prev();
      }
      if (!$active.length) { $active.end(); }
      $(".section-active").removeClass("section-active");
      $active.addClass("section-active");
      $(".selected").removeClass("selected");
      $("a[href=#"+$active.attr("id")+"]").addClass("selected");
    });

  // Smooth scrolling for internal links
  $("a[href^='#']").click(function (event) {
    event.preventDefault();
    var $this   = $(this),
        target  = this.hash,
        $target = $(target);
    $(scrollElement).stop().animate({
      "scrollTop": $target.offset().top
    }, scrollTime, "easeInOutExpo", function () {
      window.location.hash = target;
    });
  });
  
});
	



$(document).ready(function(){
    
	
	// MINI MENU BTN - TOGGLE
	$(".mini-nav-list").hide(); //Hide (Collapse) the toggle containers on load
	$(".mini-nav-btn").click(function(){
		$(this).toggleClass("mini-nav-btn-active").next().toggle();
		return false; //Prevent the browser jump to the link anchor
	});

	
	$(".mini-nav-list").click(function(){
		$().toggleClass("mini-nav-btn");
		$(this).hide();

	});

	
	
});