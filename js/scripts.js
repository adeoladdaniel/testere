/*!
* Start Bootstrap - Modern Business v5.0.4 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.getElementById('txt').value;


function getAndSetVal(){

    var txt1 =document.getElementById('txt').value;
    var txt3 =document.getElementById('txt3').value;

    
    document.getElementById('txt2').value =txt1 + txt3; 
 

}

function getVal(){
    var txt =    document.getElementById('txt').value
    alert('txt')

}



document.getElementById('button').onclick = duplicate;


var i = 0;
var original = document.getElementById('duplicater');

function duplicate() {
var clone = original.cloneNode(true); // "deep" clone
clone.id = "duplicetor" + ++i; // there can only be one element with an ID
original.parentNode.appendChild(clone);
}
document.getElementById('but').onclick = removal;

function removal(){
var elem = document.getElementById("duplicat");
elem.parentNode.removeChild(elem);
}

$(document).ready(function(){
$(".hide").click(function(){
$("p").hide();
});
$(".shower").click(function(){
$(".section_add").show();
});
});

$(document).ready(function(){
    $(".hider").click(function(){
    $("p").hide();
    });
    $(".showew").click(function(){
    $(".spinner-grow").show();
    });
    });
