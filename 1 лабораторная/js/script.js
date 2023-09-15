$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, #menu').toggleClass('active');
        $('body').toggleClass('lock');
    });-
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        infinite: false,
        initialSlide: 1,
        centerMode: true,
        variableWidth: true,
        responsive:[
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                }
            }
        ]
    });
    $('.slider__blog').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        infinite: false,
        initialSlide: 1,
        centerMode: true,
        variableWidth: true,
        responsive:[
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 0,
                    infinite: false,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ],
        responsive:[
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 0,
                    infinite: false,
                    slidesToScroll: 2,
                    centerMode: false,
                }
            }
        ]
    });
});