// Hide Navbar When Scrolling to The homes Section
// Select Elemnts
let header = document.querySelector("header");
let homes = document.querySelector(".homes");
// When Scrolling
window.onscroll = () => {
  // Check if We Scroll To  The more homes Sectiom
  if (window.pageYOffset >= homes.offsetTop) {
    header.classList.add("not-sticky");
  } else {
    header.classList.remove("not-sticky");
  }
};

// Popups

// popups Buttons
document.querySelector(".landing .caption-carousel button").onclick = () => {
  document.querySelector(".popup h2").innerHTML =
    "Meet With One Of Our Expert Advisors. Were Here To Help";
};

document.querySelector(".contact button").onclick = () => {
  document.querySelector(".popup h2").innerHTML =
    "CURIOUS ABOUT TURKISH READL ESTATE? YOU'RE IN THE RIGHT PLACE.";
};
// //   Loop Throght All The Inquire Buttons And Add An Onclick Event ForEach Button
document.querySelectorAll(".homes .card-text button").forEach((button) => {
  button.onclick = () => {
    document.querySelector(".popup h2").innerHTML =
      "Learn More About This Property, Plus Many More.";
  };
});

document.querySelector(".homes .more-inquires button").onclick = () => {
  document.querySelector(".popup h2").innerHTML =
    "REQUEST FULL ACCESS TO ALL OF OUR LISTINGS.";
};
