$(".slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    cssEase: "linear",
    centerMode: true,
    centerPadding: 50,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
            },
        },
    ],
});
