/// <reference path="../typings/jquery/jquery.d.ts"/>

(function () {
	$(document).ready(function () {
		init();
	});

	function init() {
		console.log("hello world!!");	
		
		var dayCardWidth = 200;
		var $daysBoard = $(".days-board"),
			$dayCards = $daysBoard.children(".day-card");
	
	
	
		
		// duplicate days
		$daysBoard.append($dayCards.clone());
		$daysBoard.append($dayCards.clone());
	
		// I kinda need something to do me the binding
		// because I have to query again dom to have the correct childs
		$dayCards = $daysBoard.children(".day-card");
		
		// calculate board width
		var daysBoardWidth = ((dayCardWidth + 10) * $dayCards.length) + "px";
		$daysBoard.css("width", daysBoardWidth);
		
		
	
	}
})();