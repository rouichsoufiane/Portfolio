// nav toggle
let menu = document.getElementById("navList");
let navOverlay = document.getElementById("navOverlay");
menu.style.maxHeight = "0px";

function toggleMenu() {
	if (menu.style.maxHeight == "0px") {
		menu.style.maxHeight = "300px";
		navOverlay.classList.add("nav_overlay");
	} else {
		menu.style.maxHeight = "0px";
		navOverlay.classList.remove("nav_overlay");
	}
}

navOverlay.addEventListener("click", () => {
	// console.log("navOverlay");
	menu.style.maxHeight = "0px";
	navOverlay.classList.remove("nav_overlay");
});

/**
 * Easy on scroll event listener
 */
const onscroll = (el, listener) => {
	el.addEventListener("scroll", listener);
};
/**
 * Toggle .header-scrolled class to #header when page is scrolled
 */
let selectHeader = document.getElementById("header");
if (selectHeader) {
	console.log(selectHeader);
	const headerScrolled = () => {
		if (window.scrollY > 80) {
			console.log("yeees");
			selectHeader.classList.add("header-scrolled");
		} else {
			selectHeader.classList.remove("header-scrolled");
		}
	};
	window.addEventListener("load", headerScrolled);
	onscroll(document, headerScrolled);
}

let navItems = document.querySelectorAll(".nav_list a");
navItems.forEach((item) =>
	item.addEventListener("click", () => {
		removeActiveClass();
		item.classList.add("active");
	})
);

function removeActiveClass() {
	navItems.forEach((item) => item.classList.remove("active"));
}

// image carousel

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		// stagePadding: 30,
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,

		// margin: 20,
		// nav: true,
	});
});
