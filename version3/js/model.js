(function () {
	function createCategory(categoryName, items) {
		return {
			name: categoryName,
			items: items
		};
	}

	function createDay(dayName, categories) {
		return {
			name: dayName,
			categories: categories
		};
	}

	var breakfast = createCategory("Breakfast", ["eggs", "juice"]);
	var lunch = createCategory("Lunch", ["peas soup", "polenta", "tomatoes"]);
	var dinner = createCategory("Dinner", ["fruit salad", "yogurt"]);
	var cooking = createCategory("Cooking", ["beans soup", "rice with mushrooms"]);
	var shopping = createCategory("Shopping", ["oranges 1kg", "one bottle of milk", "bannanas"]);

	var week = {
		days: [
			createDay("Monday", [breakfast, lunch, dinner]),
			createDay("Tuesday", [lunch, shopping, dinner, cooking]),
			createDay("Wednesday", [breakfast, lunch, shopping, cooking]),
			createDay("Thursday", [breakfast, lunch, shopping, dinner, cooking]),
			createDay("Friday", [breakfast, lunch, dinner]),
			createDay("Saturday", [lunch, shopping, dinner, cooking]),
			createDay("Sunday", [breakfast, lunch, shopping, cooking]),
		]
	};


	window.week = week;
})();