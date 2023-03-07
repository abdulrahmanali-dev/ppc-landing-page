// Hide Navbar When Scrolling to The more-inquires Section
// Select Elemnts
let header = document.querySelector("header");
let moreInquires = document.querySelector(".more-inquires");
// When Scrolling
window.onscroll = () => {
  // Check if We Scroll To  The more-inquires Sectiom
  if (window.pageYOffset >= moreInquires.offsetTop) {
    header.classList.add("not-sticky");
  } else {
    header.classList.remove("not-sticky");
  }
};

// Popups

// Create Pop Ups Functions
let creatPopUp = (heading, button) => {
  let popupDiv = document.createElement("div");
  popupDiv.className = "popup-div";
  let popup = document.createElement("div");
  popup.className = "popup";
  popupDiv.appendChild(popup);
  //   Exit Button
  let exitButton = document.createElement("div");
  let exitButtonText = document.createTextNode("X");
  exitButton.append(exitButtonText);
  exitButton.className = "exit-button";
  popup.appendChild(exitButton);
  // Heading
  let popupHeading = document.createElement("h2");
  let popupHeadingText = document.createTextNode(heading);
  popupHeading.append(popupHeadingText);
  popup.appendChild(popupHeading);
  // Form
  let popupForm = document.createElement("form");
  popup.appendChild(popupForm);
  // Input one
  let popupinputOne = document.createElement("input");
  popupinputOne.type = "text";
  popupinputOne.placeholder = "Name";
  popupForm.appendChild(popupinputOne);
  // Input Two
  let popupinputTwo = document.createElement("input");
  popupinputTwo.type = "text";
  popupinputTwo.placeholder = "Phone";
  popupForm.appendChild(popupinputTwo);
  // Input Three
  let popupinputThree = document.createElement("input");
  popupinputThree.type = "text";
  popupinputThree.placeholder = "Email";
  popupForm.appendChild(popupinputThree);
  // Button
  let popupButton = document.createElement("button");
  let popupButtonText = document.createTextNode(button);
  popupButton.append(popupButtonText);
  popupForm.appendChild(popupButton);

  // append to body

  document.body.appendChild(popupDiv);
};

// popups Buttons

document.querySelector(".landing .call-to-action button").onclick = () =>
  creatPopUp(
    "Meet With One Of Our Expert Advisors. Were Here To Help",
    "CONTACT"
  );

document.querySelector(".contact button").onclick = () =>
  creatPopUp(
    "curios about turkish real estate? you're in the right place.",
    "reach out "
  );

//   Loop Throght All The Inquire Buttons And Add An Onclick Event ForEach Button
document
  .querySelectorAll(".homes .card-info .card-text button")
  .forEach((button) => {
    button.onclick = () =>
      creatPopUp("Learn More About This Property, Plus Many More.", "Inquire");
  });
document.querySelector(" .news button").onclick = () =>
  creatPopUp("Stay Current On All Things Turkish Real Estate.", "Sign up");


  // Remove Popup When Clicking On The Exit Button
window.addEventListener("click", (e) => {
  if (e.target.className == "exit-button") {
    document.querySelector(".popup-div").remove();
  }
});
