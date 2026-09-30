"use strict"

const SPEED_RATIO = 4;

const banner = document.getElementsByClassName('banner');

function handleBanner(){
  if (!banner[0]){
    return;
  }

  if (isInViewport(banner[0])) {
    $(".banner").css("visibility", "visible");
    window.requestAnimationFrame(function () {
      var scrollOffset = -parseInt((window.scrollY / SPEED_RATIO));
      $(".banner").css({
        'transform': 'translateY(' + scrollOffset + 'px)',
        '-webkit-transform': 'translate3d(0, ' + scrollOffset + 'px, 0)'
      });
    });
  }else{
    $(".banner").css("visibility", "hidden");
  }
}