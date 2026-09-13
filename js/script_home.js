"use strict"
// script

const MAX_SCROLL = 4;

let index = 0;

var content;

var scrollTarget = 0;
var scrollTimer;

$(document).ready(function(){
    content = document.getElementById("home-content");
    scrollTimer = window.setInterval(autoScroll, 8000);

    content.onscroll = function(){
        clearInterval(scrollTimer);
        index = getContentIndex();
        scrollTimer = window.setInterval(autoScroll, 8000);
    };
});

function autoScroll(){
    index += 1;
    if (index >= MAX_SCROLL){
        index = 0;
    }
    var totalScroll = content.scrollHeight - content.clientHeight;

    if (index == 0){
        content.scrollTop = 0;
    }else{
        content.scrollTop += totalScroll / MAX_SCROLL;
    }
}

function getContentIndex(){
    var totalScroll = content.scrollHeight - content.clientHeight;
    var oneScroll = totalScroll / MAX_SCROLL;
    var currentScroll = content.scrollTop;
    let id = 0;
    while(currentScroll > oneScroll){
        currentScroll -= oneScroll;
        id += 1;
    }
    return id;
}