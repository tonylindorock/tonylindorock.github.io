"use strict"
// script

function goToTop() {
  window.scrollTo(0, 0);
}

function goToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

function scrollToElement(id) {
  var element = document.getElementById(id);
  element.scrollIntoView();
}

function isInViewport(element, center = false) {
  var top = element.offsetTop;
  var left = element.offsetLeft;
  var width = element.offsetWidth;
  var height = element.offsetHeight;

  while (element.offsetParent) {
    element = element.offsetParent;
    top += element.offsetTop;
    left += element.offsetLeft;
  }

  return (
    (top + Math.min(height / 4.0, 128) * center) < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height - (center ? Math.min(height / 4.0, 128) : 0)) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

function isTouchScreen() {
  if (window.matchMedia("(pointer: coarse)").matches) {
    return true;
  }
  return false;
}