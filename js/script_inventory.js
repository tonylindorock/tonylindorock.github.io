"use strict"

function onProjBtnEntered(e){
    var vid = e.children[0];
    if (vid.tagName === "VIDEO"){
        vid.play();
    }
}

function onProjBtnExited(e){
    var vid = e.children[0];
    if (vid.tagName === "VIDEO"){
        vid.pause();
        vid.currentTime = 0;
    }
}