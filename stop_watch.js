"use strict";

let stopWatchInterval;
let stopWatchRunning = false;
let centiSeconds = 0;

// setting the buttons
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const clock = document.getElementById("clock");

// function to update the stopwatch
function updateStopWatch() {
  centiSeconds++;

  let mins = Math.floor(centiSeconds / 6000)
    .toString()
    .padStart(2, "0");
  let secs = Math.floor((centiSeconds % 6000) / 100)
    .toString()
    .padStart(2, "0");
  let cs = (centiSeconds % 100).toString().padStart(2, "0");

  clock.textContent = `${mins}:${secs}.${cs}`;
}

// start button
startBtn.addEventListener("click", () => {
  if (!stopWatchRunning) {
    stopWatchInterval = setInterval(updateStopWatch, 10); // every 10ms
    stopWatchRunning = true;
  }
});

// stop button
stopBtn.addEventListener("click", () => {
  stopWatchRunning = false;
  clearInterval(stopWatchInterval);
});

// reset button
resetBtn.addEventListener("click", () => {
  stopWatchRunning = false;
  clearInterval(stopWatchInterval);
  centiSeconds = 0;
  clock.textContent = `00:00.00`;
});
// back to clock
const backtoClock = document
  .querySelector(".clock")
  .addEventListener("click", () => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.replace("digital_clock.html");
    }, 500);
  });
