export const renderHomeTab = (() => {
	const home = document.createElement("div");
	home.setAttribute("id", "home");
	home.setAttribute("data-tab-content", "");

	const content = document.getElementById("content");

	const contentWrapper = document.createElement("div");
	contentWrapper.classList.add("content-wrapper");

	const heroSection = document.createElement("div");
	heroSection.classList.add("hero");
	heroSection.innerHTML = `
        <h1>Come on down for some delicious cuisine!</h1>
        <p>Tasty and affordable!</p>
        <div class="btn-container">
            <button data-tab-target="#home" class="order-now-btn">Order Now</button>
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
	content.appendChild(home);
	home.appendChild(contentWrapper);
})();
