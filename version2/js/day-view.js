/*global angular*/

var foodplanapp = angular.module("foodplanapp", []);
foodplanapp.controller("dayViewController", ["$scope", function ($scope) {
    "use strict";


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



    week.days = [week.days[0]]; // only Monday 

    $scope.week = week;


}]);