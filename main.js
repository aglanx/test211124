const button = document.getElementById("changeColor"); // Get button element

button.addEventListener("click", function() {
  const heading = document.querySelector(".heading"); // Get heading element
  heading.style.color = "red"; // Change heading color to red on click
});