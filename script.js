//$('.carousel').carousel({
//    interval: 4000
//})
function myFunction(x) {
    x.classList.toggle("change");
}

$(window).on("load", function (e) {
    $('.preloader').fadeOut('slow');
})

//
//    console.log("pre");


/*****   *****/

//$(document).ready(function () {
//    $("#hide").click(function () {
//        $("#infografik").hide();
//    });
//    $("#show").click(function () {
//        $("#infografik").show();
//    });
//});

//function myFunction() {
//    document.getElementById("infografik").style.display = "block";
//}



$(function () {
    var fbslide = 0;
    $(".fb-news-toggle-button").click(function () {
        //alert(fbslide);
        if (fbslide == 0) {
            $(".iframe-from-fb").animate({
                left: "0px"
            }, 500);
            $(".fb-news-toggle-button").animate({
                marginLeft: "340px"
            }, 500);
            fbslide = 1;
        } else {
            $(".iframe-from-fb").animate({
                left: "-940px"
            }, 500);
            $(".fb-news-toggle-button").animate({
                marginLeft: "0px"
            }, 500);
            fbslide = 0;
        }
    });
});


ScrollReveal().reveal('#om', {
    delay: 900
});
ScrollReveal().reveal('#produkter', {
    delay: 500
});
ScrollReveal().reveal('#produkter h3', {
    delay: 500
});
ScrollReveal().reveal('#produkter p', {
    delay: 500
});
ScrollReveal().reveal('#materiale', {
    delay: 500
});
ScrollReveal().reveal('.nyhed1', {
    delay: 500
});
ScrollReveal().reveal('.nyhed2', {
    delay: 500
});
ScrollReveal().reveal('.nyhed3', {
    delay: 500
});
ScrollReveal().reveal('#materiale', {
    delay: 500
});
ScrollReveal().reveal('#ingredienser', {
    delay: 500
});
ScrollReveal().reveal('#kontakt', {
    delay: 500
});
ScrollReveal().reveal('#infografik', {
    delay: 500
});
