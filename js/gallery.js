"use strict"
// handles gallery functions

let mouseOver = false;

let mouseScrolled = false;
var timer;

var timer = null;

// force all galleries to reset scroll
window.onbeforeunload = function() {
    var galleries = document.getElementsByClassName("gallery");
    for(let i = 0; i < galleries.length; i++){
        galleries[i].scrollTo(0, 0);
    }   
};

$(document).ready(function(){
    // Get all the galleries
    var galleries = document.getElementsByClassName("gallery");
    for(let i = 0; i < galleries.length; i++){
        // Connect events
        galleries[i].onscroll = function(){
            galleryScrolled(galleries[i])
        }

        var indicator_container = document.getElementById(galleries[i].id + "-indicators");
        
        for(let j = 0; j < galleries[i].children.length; j++){
            // Add click event to images
            galleries[i].children[j].onclick = function(){
                indicatorClicked(galleries[i].id, j)
            }

            // Create indicators
            const indicator = document.createElement("a");
            indicator.classList.add("indicator");
            if (j === 0){
                indicator.classList.add("active");
            }
            indicator.onclick = function(){
                indicatorClicked(galleries[i].id, j)
            }
            if (indicator_container){
                indicator_container.append(indicator)
            }
        }

        //galleries[i].scroll(0, 0);
        updateScroll(galleries[i], 0);
    }   
});

// updates scroll in gallery
function updateScroll(element, scrollPos){
    element.scrollTo(scrollPos, 0);
}

function getScrollRatio(element){
    var childStyle = window.getComputedStyle(element.children[0], null);
    var ratio = element.children[0].offsetWidth + parseInt(childStyle.marginRight);

    return ratio;
}

// update gallery when buttons clicked
// id is gallery id
// dir is direction 1 or -1
function updateGallery(id, dir) {
    var gallery = document.getElementById(id);

    /*var totalScroll = gallery.scrollWidth - (parseInt($("#" + id).css("padding-left"))); 
    var ImgNum = gallery.childElementCount;*/

    updateIndicators(id, dir);
    updateScroll(gallery, gallery.scrollLeft + dir * getScrollRatio(gallery));
    //updateButtons(id);
}

function updateIndicators(id, dir){
    var indicators = document.getElementById(id + "-indicators");
    let currentId = 0;

    for(let i = 0; i < indicators.childElementCount; i++){
        if (indicators.children[i].classList.contains("active")){
            currentId = i;
            break;
        }
    }

    if (currentId + dir < indicators.childElementCount && currentId + dir >= 0){
        indicators.children[currentId].classList.remove("active");
        indicators.children[currentId + dir].classList.add("active");
    }
}

function indicatorClicked(id, index){
    var gallery = document.getElementById(id);
    var indicators = document.getElementById(id + "-indicators");

    updateGalleryIndicator(indicators, index);
    updateScroll(gallery, index * getScrollRatio(gallery));
}

// update gallery when indicators clicked
// id is gallery id
// index is the index of the indicator / image
function updateGalleryIndicator(indicators, index){
    for(let i = 0; i < indicators.childElementCount; i++){
        indicators.children[i].classList.remove("active");
    }

    indicators.children[index].classList.add("active");
}

// called when gallery is scrolled by a mouse
function galleryScrolled(e){
    if (!isTouchScreen()){
        if (!mouseOver){
            return;
        }
    }
    
    var indicators = document.getElementById(e.id + "-indicators");

    var currentPos = e.scrollLeft;
    var ratio = getScrollRatio(e);

    var index = getImageIndex(currentPos, ratio);

    if (index >= indicators.childElementCount){
        index = indicators.childElementCount - 1;
    }

   updateGalleryIndicator(indicators, index);
}

function galleryMouseOver(state){
    mouseOver = state;
}

// determine current image index
// using scrollLeft and scroll ratio
function getImageIndex(currentPos, ratio){
    var pos = currentPos;
    let id = 0;
    while(pos >= ratio / 2){
        pos -= ratio;
        id += 1;
    }
    return id;
}

function updateButtons(id){
    var btnContainer = document.getElementById(id + "-controls");
    var indicators = document.getElementById(id + "-indicators");
    var num = indicators.childElementCount;

    var current = getCurrentIndex(indicators);

    if (current <= 0){
        btnContainer.children[0].classList.add("disabled");
    }else{
        btnContainer.children[0].classList.remove("disabled");
    }
    if (current >= num - 1){
        btnContainer.children[1].classList.add("disabled");
    }else{
        btnContainer.children[1].classList.remove("disabled");
    }
}