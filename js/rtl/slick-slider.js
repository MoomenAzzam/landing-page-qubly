$(".slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
    centerMode: true,
    rtl: false,
    centerPadding: 50,
    prevArrow: $("<p>prev1</p>"),
    nextArrow: $("<p>next1</p>"),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            },
        },
    ],
});
