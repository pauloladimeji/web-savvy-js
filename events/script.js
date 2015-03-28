$(document).ready(function () {
	var clickedTab = function(e) {
		e ? event : window.event;
		e.preventDefault();
		var $this = $(this),
			link = $this.attr("href"), //#one
			tab = $(link), //get currently selected tab via href variable
			tabs = $(".tab");

		$("ul.tabs .active").removeClass("active");
		$this.closest("li").addClass("active"); //identify currently selected tab with "active" class

		tabs.hide(); //hide other tabs
		tab.show(); //show currently selected tab
	}


	$("ul.tabs").on("click", "a", clickedTab);
	//fake click first tab link to show only first tab on page load
	$("ul.tabs").find("a:first").trigger("click");
});