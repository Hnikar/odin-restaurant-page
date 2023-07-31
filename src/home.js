export const renderHomeTab = (() => {
	document.addEventListener("DOMContentLoaded", function () {
		const root = document.body;

		const header = document.createElement("header");
		header.innerHTML = `
        <nav>
            <h2>Name</h2>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Contacts</li>
            </ul>
        </nav>
    `;
		root.appendChild(header);

		const content = document.createElement("div");
		content.setAttribute("id", "content");
		root.appendChild(content);

		const contentWrapper = document.createElement("div");
		contentWrapper.classList.add("content-wrapper");

		const heroSection = document.createElement("div");
		heroSection.classList.add("hero");
		heroSection.innerHTML = `
        <h1>Come on down for some delicious cuisine!</h1>
        <p>Tasty and affordable!</p>
        <div class="btn-container">
            <button data-tab-target="#menu" class="order-now-btn">Order Now</button>
        </div>
    `;
		contentWrapper.appendChild(heroSection);

		const infoSection = document.createElement("div");
		infoSection.classList.add("info");
		infoSection.innerHTML = `
        <div class="address">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique maxime quisquam veniam unde?
        </div>
        <div class="hours">Lorem ipsum dolor sit, amet</div>
    `;
		contentWrapper.appendChild(infoSection);

		content.appendChild(contentWrapper);
	});
})();
