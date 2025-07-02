"use strict";

// creating the function to update the clock

function updateClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  const currentTime = `${hours}:${minutes}:${seconds}`;
  const clock = document.getElementById("clock");
  clock.textContent = currentTime;
}

// update the clock
setInterval(updateClock, 1000);

// show immediately
updateClock();

// converting to the stop watch

const stopWatch = document.querySelector(".stopwatch");

stopWatch.addEventListener("click", () => {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.replace("stop_watch.html");
  }, 500);
});
