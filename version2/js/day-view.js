/*global angular, $*/

var foodplanapp = angular.module("foodplanapp", []);
foodplanapp.controller("dayViewController", ["$scope", function ($scope) {
    "use strict";


    $scope.show = function (msg) {
        alert("You clicked: " + msg);
    };

    function category(title, items) {
        return {
            title: title,
            items: items
        };
    }


    var week = {
        days: [
            {
                title: "Monday",
                categories: [
                    category("lunch", ["eggs", "hamburger", "tomatoes juice with spicy pepper and a bit of salt"]),
                    category("evening", ["soup", "fruits", "yogurt"])
                ]
            },

            {
                title: "Tuesday",
                categories: [
                    category("morning", ["exercise1", "exercise2", "exercise3"]),
                    category("lunch", ["workout 1", "workout 2", "workout 3", "workout 4", "workout 5"]),
                    category("shopping", ["shoppig1", "shoppig2", "shoppig3", "shoppig4"])
                ]
            },

            {
                title: "Wednesday",
                categories: [
                    category("lunch", ["eggs", "hamburger", "tomatoes juice"]),
                    category("evening", ["soup", "fruits", "yogurt"])
                ]
            },

            {
                title: "Thursday",
                categories: [
                    category("morning", ["exercise1", "exercise2", "exercise3"]),
                    category("lunch", ["workout 1", "workout 2", "workout 3", "workout 4", "workout 5"]),
                    category("shopping", ["shoppig1", "shoppig2", "shoppig3", "shoppig4"])
                ]
            },

            {
                title: "Friday",
                categories: [
                    category("lunch", ["eggs", "hamburger", "tomatoes juice with spicy pepper and a bit of salt"]),
                    category("evening", ["soup", "fruits", "yogurt"])
                ]
            },

            {
                title: "Saturday",
                categories: [
                    category("morning", ["exercise1", "exercise2", "exercise3"]),
                    category("lunch", ["workout 1", "workout 2", "workout 3", "workout 4", "workout 5"]),
                    category("shopping", ["shoppig1", "shoppig2", "shoppig3", "shoppig4"])
                ]
            },

            {
                title: "Sunday",
                categories: [
                    category("morning", ["cake1", "cake2", "exercise3"]),
                    category("lunch", ["some 1", "some 2", "some 3", "some 4", "some 5"]),
                    category("shopping", ["shoppig1", "shoppig2", "shoppig3", "shoppig4"])
                ]
            }

        ]
    };



    //week.days = [week.days[0]]; // only Monday 

    $scope.week = week;


}]);



setTimeout(function () {
    var owl = $(".days-carousel");

    owl.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1200, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [1000, 2], //[900, 3], // betweem 900px and 601px
        itemsTablet: false, //[600, 1], //2 items between 600 and 0
        itemsMobile: [750, 1] // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events
    $(".next").click(function () {
        owl.trigger('owl.next');
    });
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    });

}, 1000);