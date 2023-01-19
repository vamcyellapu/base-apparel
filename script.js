"use strict";

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const errMsg = document.getElementById("err-msg");
const errIcon = document.getElementById("err-icon");
const inputBox = document.getElementById("input-box");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
// btn.addEventListener("click", function () {
//   const email = validateEmail(input.value);
//   if (!email) {
//     errMsg.classList.remove("hidden");
//     inputBox.classList.add("border-4", "border-secondary");
//     errIcon.classList.remove("hidden");
//   } else {
//     errMsg.classList.add("hidden");
//     inputBox.classList.remove("border-4", "border-secondary");
//     errIcon.classList.add("hidden");
//   }
// });

input.addEventListener("keydown", function (e) {
  const email = validateEmail(e.target.value);
  if (!email) {
    errMsg.classList.remove("hidden");
    inputBox.classList.add("border-4", "border-secondary");
    errIcon.classList.remove("hidden");
  } else {
    errMsg.classList.add("hidden");
    inputBox.classList.remove("border-4", "border-secondary");
    errIcon.classList.add("hidden");
  }
});
