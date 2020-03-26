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
