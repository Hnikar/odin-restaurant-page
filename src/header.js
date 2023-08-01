export const renderHeader = (() => {
	const root = document.body;

	const header = document.createElement("header");

	const nav = document.createElement("nav");

	const h2 = document.createElement("h2");
	h2.textContent = "Default Restaurant";
	nav.appendChild(h2);

	const ul = document.createElement("ul");

	const liHome = document.createElement("li");
	liHome.setAttribute("data-tab-target", "#home");
	liHome.classList.add("tab-home");
	liHome.textContent = "Home";
	ul.appendChild(liHome);

	const liMenu = document.createElement("li");
	liMenu.setAttribute("data-tab-target", "#menu");
	liMenu.classList.add("tab-menu");
	liMenu.textContent = "Menu";
	ul.appendChild(liMenu);

	const liContact = document.createElement("li");
	liContact.setAttribute("data-tab-target", "#contact");
	liContact.classList.add("tab-contact");
	liContact.textContent = "Contacts";
	ul.appendChild(liContact);

	nav.appendChild(ul);
	header.appendChild(nav);
	root.appendChild(header);

	const content = document.createElement("div");
	content.setAttribute("id", "content");
	root.appendChild(content);
})();
