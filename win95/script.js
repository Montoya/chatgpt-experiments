const minimizeButton = document.querySelector(".minimize");
const maximizeButton = document.querySelector(".maximize");
const closeButton = document.querySelector(".close");
const content = document.querySelector(".content");

minimizeButton.addEventListener("click", () => {
  console.log("Minimize window");
  content.classList.toggle("hidden");
});

minimizeButton.addEventListener("click", () => {
  console.log("Minimize window");
});

maximizeButton.addEventListener("click", () => {
  console.log("Maximize window");
});

closeButton.addEventListener("click", () => {
  console.log("Close window");
  const window = closeButton.closest(".window");
  window.style.display = "none";
});

const windows = document.querySelectorAll(".window");

windows.forEach((window) => {
  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  const titleBar = window.querySelector(".title-bar");

  titleBar.addEventListener("mousedown", dragStart);
  titleBar.addEventListener("mouseup", dragEnd);
  titleBar.addEventListener("mousemove", drag);

  function dragStart(event) {
    isDragging = true;
    initialX = event.clientX - xOffset;
    initialY = event.clientY - yOffset;
  }

  function dragEnd() {
    isDragging = false;
    initialX = currentX;
    initialY = currentY;
  }

  function drag(event) {
    if (isDragging) {
      event.preventDefault();

      currentX = event.clientX - initialX;
      currentY = event.clientY - initialY;

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, window);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  }
});
