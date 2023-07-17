$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 80,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    slideTransition: "linear",
    autoplayHoverPause: false,
    dots: true,
    responsive: {
        0: {
            items: 1,
        },
        575: {
            items: 3,
        },
        1000: {
            items: 5,
        },
    },
});
