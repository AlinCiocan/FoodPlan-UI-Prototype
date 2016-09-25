/* global angular*/
(function () {
    var app = angular.module("foodplan", []);
    app.controller("WeekController", ["$scope", function ($scope) {
        // populate the model
        $scope.week = window.week;

        $scope.currentDay = $scope.week.days[0];


        $scope.show = function (msg) {
            alert(msg);
        };

    }]);


    app.controller("WeekMenuController", ["$scope", function ($scope) {
        var input = $("#week-menu__datepicker").pickadate(); // initiliaze pickadate 
        var picker = input.pickadate("picker"); // return the picker

        $scope.changeWeek = function () {
            picker.open();
        };
    }]);

})();



setTimeout(function () {
    var owl = $(".days-carousel");

    owl.owlCarousel({
        items: 1, //10 items above 1000px browser width
        /*itemsDesktop: [1200, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [1000, 2], //[900, 3], // betweem 900px and 601px
        itemsTablet: false, //[600, 1], //2 items between 600 and 0
        itemsMobile: [750, 1] // itemsMobile disabled - inherit from itemsTablet option
        */
        touchDrag: false,
        mouseDrag: false,
        rewindNav: false
    });

    // Custom Navigation Events
    $(".week-navigation__previous-day").click(function () {
        owl.trigger('owl.prev');
    });
    $(".week-navigation__next-day").click(function () {
        owl.trigger('owl.next');
    });
}, 0);