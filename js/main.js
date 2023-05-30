/* eslint-disable no-console */
/* eslint-disable quotes */
"use strict";
console.log(">> Ready :)");
// constants and variables

const button = document.querySelector(".js-blender-button");
const blender = document.getElementById("blender");
const soundButton = document.getElementById("js-button-sound");
const soundBlender = document.getElementById("js-blender-sound");
const soundAlarm = document.getElementById("js-alarm");
const clock = document.querySelector(".js-clock");
const play = document.querySelector(".js-play");
const stopButton = document.querySelector(".js-stop");
// traigo todos los input

let blenderStatus = "off";
let repeater;

let hours = 0;
let minutes = 0;
let seconds = 0;

const allInput = document.querySelectorAll(".js-input");

for (const recorrer of allInput) {
  recorrer.addEventListener("change", hanleInput);
}

// saves the input values

function hanleInput(ev) {
  ev.preventDefault();
  const idInput = ev.target.id;
  let valueInput = parseFloat(ev.target.value);
  console.log(valueInput);
  console.log(idInput);
  if (idInput === "hs") {
    hours = valueInput;
  }
  if (idInput === "min") {
    minutes = valueInput;
  } else {
    seconds = valueInput;
  }
  console.log(seconds);
  console.log(hours);
}

//START TIMER

function startTimer() {
  console.log("plauy");
  countdown();
  setTimer();
}

//  chronometer

function setTimer() {
  clock.innerHTML = ` <input id="hs" type="text" class="number js-input" 
  value=${hours > 9 ? hours : "0" + hours} />
          <label for="hs" class="label js-label">hs</label>
          <input
            id="min"
            type="text"
            class="number js-input"
           value=${minutes > 9 ? minutes : "0" + minutes} 
          />
          <label for="min" class="label js-label">min</label>
          <input id="sg" type="text" class="number js-input" value=${
            seconds > 9 ? seconds : "0" + seconds
          } />
          <label for="sg" class="label js-label">sg</label>`;
}

function countdown() {
  repeater = setInterval(runner, 1000);
}

// calculates remaining time

function runner() {
  if (seconds > 0) {
    blender.classList.add("active");
    soundBlender.play();
    seconds--;
  } else {
    if (minutes > 0) {
      blender.classList.add("active");
      soundBlender.play();
      seconds = 59;
      minutes--;
    } else {
      if (hours > 0) {
        blender.classList.add("active");
        soundBlender.play();
        seconds = 59;
        minutes = 59;
        hours--;
      } else {
        soundAlarm.play();
        blender.classList.remove("active");
        soundBlender.pause();
      }
    }
  }
  setTimer();
}

// Stop timer

function stopTimer() {
  clearInterval(repeater);
  location.reload();
  blender.classList.remove("active");
}

stopButton.addEventListener("click", stopTimer);

play.addEventListener("click", startTimer);

//active image

function handleBlenderControl(ev) {
  ev.preventDefault();
  if (blenderStatus === "off") {
    blenderStatus = "on";
    soundBr();
    blender.classList.add("active");
  } else {
    blenderStatus = "off";
    soundBr();
    blender.classList.remove("active");
  }
}

button.addEventListener("click", handleBlenderControl);

// active sounds

function soundBr() {
  if (soundBlender.paused) {
    soundButton.play();
    soundBlender.play();
  } else {
    soundButton.play();
    soundBlender.pause();
    soundBlender.currentTime = 0;
  }
}
