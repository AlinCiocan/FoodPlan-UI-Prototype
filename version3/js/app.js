/* global angular*/
(function () {
	var app = angular.module("foodplan", []);
	app.controller("WeekController", ["$scope", function ($scope) {
		// populate the model
		$scope.week = window.week;
		
		
		
		
	}]);
})();