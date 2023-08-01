export const renderMenuTab = (() => {
	const menu = document.createElement("div");
	menu.setAttribute("id", "menu");
	menu.setAttribute("data-tab-content", "");

	const content = document.getElementById("content");
	content.appendChild(menu);
})();
