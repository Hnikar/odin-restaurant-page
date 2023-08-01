import defaultDishImage from "/src/img/defaultDish.png";
export const renderMenuTab = (() => {
	const menuItems = [
		{
			category: "Appetizers",
			items: [
				{
					name: "Appetizer 1",
					description:
						"Description of Dish 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					price: "$10",
					imageUrl: defaultDishImage,
				},
				{
					name: "Appetizer 2",
					description:
						"Description of Dish 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
					price: "$12",
					imageUrl: defaultDishImage,
				},
			],
		},
		{
			category: "Main Courses",
			items: [
				{
					name: "Main Course 1",
					description:
						"Description of Dish 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
					price: "$20",
					imageUrl: defaultDishImage,
				},
				{
					name: "Main Course 2",
					description:
						"Description of Dish 4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
					price: "$18",
					imageUrl: defaultDishImage,
				},
			],
		},
		{
			category: "Desserts",
			items: [
				{
					name: "Dessert 1",
					description:
						"Description of Dish 5. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					price: "$8",
					imageUrl: defaultDishImage,
				},
				{
					name: "Dessert 2",
					description:
						"Description of Dish 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
					price: "$10",
					imageUrl: defaultDishImage,
				},
			],
		},
	];

	const menu = document.createElement("div");
	menu.setAttribute("id", "menu");
	menu.setAttribute("data-tab-content", "");

	const content = document.getElementById("content");
	content.appendChild(menu);

	menuItems.forEach((category) => {
		const section = document.createElement("section");
		menu.appendChild(section);

		const heading = document.createElement("h2");
		heading.textContent = category.category;
		section.appendChild(heading);

		const dishesWrapper = document.createElement("div");
		dishesWrapper.classList.add("dishes-wrapper");
		section.appendChild(dishesWrapper);

		category.items.forEach((item) => {
			const dish = createDish(
				item.name,
				item.description,
				item.price,
				item.imageUrl
			);
			dishesWrapper.appendChild(dish);
		});
	});
})();

// Helper function to create a dish
function createDish(name, description, price, imageUrl) {
	const dish = document.createElement("div");
	dish.classList.add("dish");

	const image = document.createElement("img");
	image.src = imageUrl;
	image.alt = name;
	dish.appendChild(image);

	const dishDetails = document.createElement("div");
	dishDetails.classList.add("dish-details");

	const dishName = document.createElement("h3");
	dishName.textContent = name;
	dishDetails.appendChild(dishName);

	const dishDescription = document.createElement("p");
	dishDescription.textContent = description;
	dishDetails.appendChild(dishDescription);

	const dishPrice = document.createElement("p");
	dishPrice.textContent = "Price: " + price;
	dishDetails.appendChild(dishPrice);

	dish.appendChild(dishDetails);

	return dish;
}
