import "./style.css";
import { renderHeader } from "./header";
import { renderHomeTab } from "./home";
import { renderMenuTab } from "./menu";
import { renderContactTab } from "./contact";

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) =>
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove("active");
		});
		target.classList.add("active");
	})
);
