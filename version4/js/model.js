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
			createDay("monday", [breakfast, lunch, dinner]),
			createDay("tuesday", [lunch, shopping, dinner, cooking]),
			createDay("wednesday", [breakfast, lunch, shopping, cooking]),
			createDay("thursday", [breakfast, lunch, shopping, dinner, cooking]),
			createDay("friday", [breakfast, lunch, dinner]),
			createDay("saturday", [lunch, shopping, dinner, cooking]),
			createDay("sunday", [breakfast, lunch, shopping, cooking]),
		]
	};


	window.week = week;
})();