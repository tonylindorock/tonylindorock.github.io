"use strict"
// handles video functions


function updateVideo(e, id, action) {
    var vid = document.getElementById(id);
    var thisBtn = document.getElementById(e.id);
    thisBtn.classList.add("disabled");

    switch(action) {
        case "play":
            vid.play();
            var btn = document.getElementById(id + "-control-pause");
            btn.classList.remove("disabled");
            break;
        case "pause":
            vid.pause();
            var btn = document.getElementById(id + "-control-play");
            btn.classList.remove("disabled");
            break;
        case "mute":
            vid.volume = 0.0;
            vid.muted = true;
            var btn = document.getElementById(id + "-control-unmute");
            btn.classList.remove("disabled");
            break;
        case "unmute":
            vid.volume = 1.0;
            vid.muted = false;
            var btn = document.getElementById(id + "-control-mute");
            btn.classList.remove("disabled");
            break;
        default:
            console.log("Something went wrong...");
      }
}