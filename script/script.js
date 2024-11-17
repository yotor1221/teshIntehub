// Smooth Scrolling Effect
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Highlight Project on Hover
const projectCards = document.querySelectorAll(".project");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.backgroundColor = "#ffffff33"; // Slightly brighter background
    card.style.color = "#fffb";
  });
  card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; // Reset background
    card.style.color = "white"; // Reset color
  });
});

// Button Interaction
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(`You clicked on the ${button.textContent} button!`);
  });
});
