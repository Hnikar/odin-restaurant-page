export const renderHeader = (() => {
	const root = document.body;

	const header = document.createElement("header");
	header.innerHTML = `
        <nav>
            <h2>Name</h2>
            <ul>
                <li data-tab-target="#home" class="tab-home">Home</li>
                <li data-tab-target="#menu" class="tab-menu"">Menu</li>
                <li data-tab-target="#contact" class="tab-contact"">Contacts</li>
            </ul>
        </nav>
    `;
	root.appendChild(header);

	const content = document.createElement("div");
	content.setAttribute("id", "content");
	root.appendChild(content);
})();
