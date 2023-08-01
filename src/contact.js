export const renderContactTab = (() => {
	const contact = document.createElement("div");
	contact.setAttribute("id", "contact");
	contact.setAttribute("data-tab-content", "");

	const content = document.getElementById("content");
	content.appendChild(contact);
})();
