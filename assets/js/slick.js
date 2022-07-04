/*

$(document).ready(function(){

    $('.rps-slider').slick({
        infinite: true,
        arrows: true,
        dots:true
    });

    $(".slick-nav li a").click(function(e){
        var slideIndex = $(this).parent().index();
        $(".rps-slider").slickGoTo(parseInt(slideIndex))
    });

});

*/

$(document).ready(function()
{"use strict";
    $('.slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:1,
        autoplay:true,
        speed:1800,
        autoplaySpeed:4600,
        fade:false,
        touchMove:true,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});

