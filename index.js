const buttons = document.querySelectorAll("[data-carousel-button]");
const nextButton = document.querySelector(".next");
const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// const clickThisButton = () => {
//   nextButton.click();
// };

// let interval = setInterval(clickThisButton, 4000);

// pauseButton.addEventListener("click", () => {
//   clearInterval(interval);
//   pauseButton.style.display = "none";
//   playButton.style.display = "block";
// });

// playButton.addEventListener("click", () => {
//   interval = setInterval(clickThisButton, 4000);
//   playButton.style.display = "none";
//   pauseButton.style.display = "block";
// });
