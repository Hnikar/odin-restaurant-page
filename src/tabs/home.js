export const renderHomeTab = (() => {
	const home = document.createElement("div");
	home.setAttribute("id", "home");
	home.setAttribute("data-tab-content", "");
	home.classList.add("active");

	const content = document.getElementById("content");

	const contentWrapper = document.createElement("div");
	contentWrapper.classList.add("content-wrapper");

	const heroSection = document.createElement("div");
	heroSection.classList.add("hero");

	const heroTitle = document.createElement("h1");
	heroTitle.textContent = "Savor the Flavors, Experience the Passion!";
	heroSection.appendChild(heroTitle);

	const heroParagraph = document.createElement("p");
	heroParagraph.textContent = "Discover Your Culinary Adventure";
	heroSection.appendChild(heroParagraph);

	const btnContainer = document.createElement("div");
	btnContainer.classList.add("btn-container");

	const orderButton = document.createElement("button");
	orderButton.setAttribute("data-tab-target", "#home");
	orderButton.classList.add("order-now-btn");
	orderButton.textContent = "Order Now";
	btnContainer.appendChild(orderButton);

	heroSection.appendChild(btnContainer);

	contentWrapper.appendChild(heroSection);

	const infoSection = document.createElement("div");
	infoSection.classList.add("info");

	const addressDiv = document.createElement("div");
	addressDiv.classList.add("address");
	addressDiv.textContent = "123 Main Street, City, Country";
	infoSection.appendChild(addressDiv);

	const hoursDiv = document.createElement("div");
	hoursDiv.classList.add("hours");
	hoursDiv.textContent = "Mon-Sat:       8:00 - 22:00";
	infoSection.appendChild(hoursDiv);

	contentWrapper.appendChild(infoSection);

	content.appendChild(home);
	home.appendChild(contentWrapper);
})();
