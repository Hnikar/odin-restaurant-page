export const renderContactTab = (() => {
	const contactInfo = [
		{
			label: "Address",
			value: "123 Main Street, City, Country",
		},
		{
			label: "Phone",
			value: "+1 (555) 123-4567",
		},
		{
			label: "Email",
			value: "contact@example.com",
		},
		{
			label: "Opening Hours",
			value: "Monday - Friday: 9am - 10pm<br>Saturday - Sunday: 11am - 11pm",
		},
	];

	const contact = document.createElement("div");
	contact.setAttribute("id", "contact");
	contact.setAttribute("data-tab-content", "");

	const content = document.getElementById("content");
	content.appendChild(contact);

	const contactSection = document.createElement("section");
	contact.appendChild(contactSection);

	const heading = document.createElement("h2");
	heading.textContent = "Contact Us";
	contactSection.appendChild(heading);

	const contactWrapper = document.createElement("div");
	contactSection.appendChild(contactWrapper);

	const contactList = document.createElement("ul");
	contactList.setAttribute("class", "contact-list");
	contactWrapper.appendChild(contactList);

	contactInfo.forEach((info) => {
		const listItem = document.createElement("li");
		listItem.innerHTML = `<strong>${info.label}: </strong>${info.value}`;
		contactList.appendChild(listItem);
	});

	const mapWrapper = document.createElement("div");
	mapWrapper.setAttribute("class", "map-wrapper");
	contactWrapper.appendChild(mapWrapper);

	const mapFrame = document.createElement("iframe");
	mapFrame.setAttribute("width", "100%");
	mapFrame.setAttribute("height", "300");
	mapFrame.setAttribute("frameborder", "0");
	mapFrame.setAttribute("style", "border:0");
	mapFrame.setAttribute(
		"src",
		`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d77256.36543280983!2d-146.38884367823496!3d-16.148241259431437!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1690908994806!5m2!1sen!2sde`
	);
	mapWrapper.appendChild(mapFrame);
})();
