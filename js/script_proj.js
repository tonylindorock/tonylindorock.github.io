"use strict"

const MAX_SCROLL = 70;

var projTitle;
var progressLabel;

$(document).ready(function () {
    progressLabel = document.getElementById("page-progress");
    if (progressLabel) {
     projTitle = progressLabel.innerHTML;
    }
    observeElementVis();

    window.onscroll = function () {
        handleBanner();
        windowScrolled();
        if (progressLabel) {
            updatePageProgress();
        }
        observeElementVis();
    };
});

function windowScrolled() {
    var scroll = window.scrollY;
    //console.log(scroll);
    if (scroll >= MAX_SCROLL) {
        $("#top-btns").removeClass("disabled");

        $("#top-btns").css({
            "opacity": "100",
            "top": "8px"
        });
    } else {
        $("#top-btns").addClass("disabled");

        $("#top-btns").css({
            "opacity": "0",
            "top": "0"
        });

        hideDropdown();
    }
}

function updatePageProgress() {
    var scrolled = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var progress = Math.round((scrolled / height) * 100);

    progress = clamp(progress, 0, 100);
    var number = "000";
    if (progress < 10){
        number = "00" + progress;
    }else if(progress < 100){
        number = "0" + progress;
    }else{
        number = progress;
    }

    var result = "";
    result += projTitle + " • " + number + "%";

    progressLabel.innerHTML = result;
}

function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

function observeElementVis(){
    var elements = document.getElementsByClassName("scroll-reveal");
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i];
        if (isInViewport(e)){
            reveal(e);
        }else{
            hide(e);
        }
    }
}

// scroll reveal function
function reveal(e) {
    e.classList.add("anim-reveal");
    e.classList.remove("anim-hide");
}

function hide(e){
    e.classList.remove("anim-reveal");
    e.classList.add("anim-hide");
}