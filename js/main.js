/* eslint-disable no-console */
/* eslint-disable quotes */
"use strict";
console.log(">> Ready :)");
// constants and variables

const button = document.querySelector(".js-blender-button");
const blender = document.getElementById("blender");
const soundButton = document.getElementById("js-button-sound");
const soundBlender = document.getElementById("js-blender-sound");

let blenderStatus = "off";

function handleBlenderControl() {
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
