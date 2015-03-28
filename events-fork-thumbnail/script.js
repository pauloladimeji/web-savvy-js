$(document).ready(function () {
	var images = ["img1.jpg", "img2.jpg", "img3.jpg"];
	var clickedTab = function(e) {
		e ? event : window.event; //IE events
		e.preventDefault();
		var $this = $(this),
			link = $this.attr("href"), //#one
			img = $this.data("src");
			tab = $(link), //get currently selected tab via href variable
			tabs = $(".tab");

		$("ul.tabs .active").removeClass("active");
		$this.closest("li").addClass("active"); //identify currently selected tab with "active" class

		$(".tab .shown").removeClass("shown");
		tab.addClass("shown");

		tabs.hide(); //hide other tabs
		tab.attr("src", img); //set image for tab
		tab.show(); //show currently selected tab
	}


	$("ul.tabs").on("click", "a", clickedTab);
	//fake click first tab link to show only first tab on page load
	$("ul.tabs").find("a:first").trigger("click");
});