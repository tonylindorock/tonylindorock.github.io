"use strict"

$(document).ready(function () {
    window.onclick = function (event) {
        if (!event.target.matches('#page-progress')) {
            hideDropdown();
        }
    }
});

function toggleDropdown() {
    if ($("#dropdown-menu").css("opacity") === '0') {
        $("#dropdown-menu").removeClass("disabled");
        $("#dropdown-menu").css({
            "opacity": '1',
            "top": "56px"
        });
    } else {
        hideDropdown();
    }
}

function hideDropdown() {
    $("#dropdown-menu").addClass("disabled");
    $("#dropdown-menu").css({
        "opacity": '0',
        "top": "88px"
    });
}