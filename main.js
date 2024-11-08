/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
	el = el.trim();
	if (all) {
		return [...document.querySelectorAll(el)];
	} else {
		return document.querySelector(el);
	}
};

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
	let selectEl = select(el, all);
	if (selectEl) {
		if (all) {
			selectEl.forEach((e) => e.addEventListener(type, listener));
		} else {
			selectEl.addEventListener(type, listener);
		}
	}
};

/**
 * Easy on scroll event listener
 */
const onscroll = (el, listener) => {
	el.addEventListener("scroll", listener);
};

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

// Typed Initiate
let typed_text_output =
	document.querySelector(".typed-text-output").textContent;
console.log(typed_text_output);
if (typed_text_output.length == 0) {
	let typed_strings = document.querySelector(".typed-text").textContent;
	let typed = new Typed(".typed-text-output", {
		strings: typed_strings.split(", "),
		typeSpeed: 100,
		backSpeed: 20,
		smartBackspace: false,
		loop: true,
	});
}

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		stagePadding: 30,
		loop: false,
		margin: 20,
		nav: true,

		responsive: {
			0: {
				items: 1,
				// nav: true,
			},
			520: {
				items: 2,
				// nav: true,
			},
			800: {
				items: 3,
				// nav: true,
			},
			1200: {
				items: 4,
				// nav: true,
			},
		},
	});
});

window.onload = function () {
	let prevBtn = document.querySelector("button.owl-prev");
	let nextBtn = document.querySelector("button.owl-next");

	// Detecting if the class has been added and printing its name

	var mutationObserverConfig = { attributes: true };
	var prevBtnTrigger = function (mutations) {
		for (var mutation of mutations) {
			if (mutation.attributeName === "class") {
				if (mutation.target.classList.contains("disabled")) {
					prevBtn.style.display = "none";
				} else if (mutation.target.style.display === "none") {
					prevBtn.style.display = "flex";
				}
			}
		}
	};
	var nextBtnTrigger = function (mutations) {
		for (var mutation of mutations) {
			if (mutation.attributeName === "class") {
				if (mutation.target.classList.contains("disabled")) {
					nextBtn.style.display = "none";
				} else if (mutation.target.style.display === "none") {
					nextBtn.style.display = "flex";
				}
			}
		}
	};

	console.log(prevBtn);
	var prevObserver = new MutationObserver(prevBtnTrigger);
	prevObserver.observe(prevBtn, mutationObserverConfig);
	var nextObserver = new MutationObserver(nextBtnTrigger);
	nextObserver.observe(nextBtn, mutationObserverConfig);
};

// filter projects
function filterSelection(e) {
	let projects = document.querySelectorAll(".project");
	let categories = document.querySelectorAll(".category");

	categories.forEach((category) =>
		category.classList.remove("category-active")
	);
	e.target.classList.add("category-active");

	let filter = e.target.dataset.filter;

	if (filter == "*") {
		projects.forEach((project) => project.classList.remove("hidden_project"));
	} else {
		projects.forEach((project) =>
			project.classList.contains(filter)
				? project.classList.remove("hidden_project")
				: project.classList.add("hidden_project")
		);
	}
}

// form validation
var r = document.querySelector(":root");
var rs = getComputedStyle(r);
let nameErr = document.getElementById("name_error");
let emailErr = document.getElementById("email_error");
let msgErr = document.getElementById("msg_error");
function setInvalidStyle(input) {
	// console.log(input);

	if (input.name === "name") {
		// input of name
		if (!input.checkValidity()) {
			nameErr.style.display = "block";
			nameErr.innerHTML = input.validationMessage;
			input.style.borderColor = "red";
		} else {
			input.style.borderColor = rs.getPropertyValue("--clr-accent-2");
			nameErr.style.display = "none";
		}
	} else if (input.name === "email") {
		// input of email
		if (!input.checkValidity()) {
			emailErr.style.display = "block";
			emailErr.innerHTML = input.validationMessage;
			input.style.borderColor = "red";
		} else {
			input.style.borderColor = rs.getPropertyValue("--clr-accent-2");
			emailErr.style.display = "none";
		}
	} else if (input.name === "message") {
		// input of email
		if (!input.checkValidity()) {
			msgErr.style.display = "block";
			msgErr.innerHTML = input.validationMessage;
			input.style.borderColor = "red";
		} else {
			input.style.borderColor = rs.getPropertyValue("--clr-accent-2");
			msgErr.style.display = "none";
		}
	}
}

/**
 * Navbar links active state on scroll
 */

let navbarlinks = select("#navList .scrollto", true);
const navbarlinksActive = () => {
	let position = window.scrollY + 200;
	navbarlinks.forEach((navbarlink) => {
		if (!navbarlink.hash) return;
		let section = select(navbarlink.hash);
		if (!section) return;
		if (
			position >= section.offsetTop &&
			position <= section.offsetTop + section.offsetHeight
		) {
			navbarlink.classList.add("active");
		} else {
			navbarlink.classList.remove("active");
		}
	});
};
window.addEventListener("load", navbarlinksActive);
onscroll(document, navbarlinksActive);

/**
 * submit form to web3forms
 */

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const formData = new FormData(form);
	const object = Object.fromEntries(formData);
	const json = JSON.stringify(object);
	result.innerHTML = "Please wait...";

	fetch("https://api.web3forms.com/submit", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: json,
	})
		.then(async (response) => {
			let json = await response.json();
			if (response.status == 200) {
				result.innerHTML = json.message;
			} else {
				console.log(response);
				result.innerHTML = json.message;
			}
		})
		.catch((error) => {
			console.log(error);
			result.innerHTML = "Something went wrong!";
		})
		.then(function () {
			form.reset();
			setTimeout(() => {
				result.innerHTML = "";
			}, 3000);
		});
});

// change the position of the lightbox from the top
lightbox.option({
	positionFromTop: 100,
	showImageNumberLabel: false,
});
