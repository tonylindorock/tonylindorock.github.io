"use strict"
// script

const FIRST_NAME = "YI";
const FIRST_NAME_1 = "CHEN";
const LAST_NAME = "WANG";

const FIRST_NAME_ALT = "TONY";
const LAST_NAME_ALT = "LINDOROCK";

let firstName = FIRST_NAME;
let firstName_1 = FIRST_NAME_1
let lastName = LAST_NAME;

// scroll event
// change the name when scrolling
$(window).scroll(function() {
  nameGlitch();
});

function nameGlitch() {
  let p = Math.random();
  if (p < 0.05) {
    p = Math.random();
    if (p < 0.25) {
      firstName = FIRST_NAME_ALT;
      firstName_1 = "";
      lastName = LAST_NAME_ALT;
    } else {
      firstName = FIRST_NAME;
      firstName_1 = FIRST_NAME_1;
      lastName = LAST_NAME;
    }
  }

  for (let i = 0; i < firstName.length; i++) {
    firstName = replaceChar(firstName, randomizeCharCase(firstName[i]), i);
  }
  for (let i = 0; i < firstName_1.length; i++) {
    firstName_1 = replaceChar(firstName_1, randomizeCharCase(firstName_1[i]), i);
  }
  for (let i = 0; i < lastName.length; i++) {
    lastName = replaceChar(lastName, randomizeCharCase(lastName[i]), i);
  }

  $("#about-name").html(firstName + firstName_1 + "<br>" + lastName);
}

function randomizeCharCase(letter) {
  let p = Math.random();
  if (p < 0.03) {
    p = Math.random();
    if (p < 0.5) {
      letter = letter.toLowerCase();
    } else {
      letter = letter.toUpperCase();
    }
  }
  return letter;
}

function randomizeLang() {

}

function replaceChar(origStr, newChar, index) {
  let firstPart = origStr.substr(0, index);
  let lastPart = origStr.substr(index + 1);

  let newStr = firstPart + newChar + lastPart;
  return newStr;
}
