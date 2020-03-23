$('.carousel').carousel({
    interval: 6000
})

function myFunction(x) {
    x.classList.toggle("change");
}

$(() => {
    $(".box").click(function () {
        $(this).toggleClass("clicked");
    });
});
