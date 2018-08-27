'use strict'
var numberOfLis = 50000;
var anchor = document.getElementById("scroll-div");

var createDivForPNG = function(postFix){
    var nextImage = document.createElement("IMG");
    nextImage.src = "./images/small-icon-png-3.png"
    var nextLi = document.createElement("div");
    var textContent = document.createTextNode("my_content_" + postFix);
    nextLi.appendChild(nextImage);
    nextLi.appendChild(textContent); 
    return nextLi;   
}

var createDivForFA = function(index){
    var nextLi = document.createElement("div");
    var textContent = document.createTextNode("my_content_" + index);
    nextLi.appendChild(textContent);
    return nextLi
}

var createDivForFontAwesome = function(index){
    var nextSpan = document.createElement("span");
    nextSpan.classList.add("fa");
    nextSpan.classList.add("fa-home");
    var nextLi = document.createElement("div");
    var textContent = document.createTextNode("my_content_" + index);
    nextLi.appendChild(nextSpan);
    nextLi.appendChild(textContent);
    return nextLi
}


var loadDivs = function(makeRelevantDiv){
    for (let index = 0; index < numberOfLis; index++) {
        anchor.appendChild(makeRelevantDiv(index));
    }
}

var prePendDiv = function(makeRelevantDiv, textContent){
    anchor.insertBefore(makeRelevantDiv(textContent), anchor.childNodes[0]); 
}