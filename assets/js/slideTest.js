$('.slick-slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    speed:1800,
    autoplaySpeed:4600,
});

$('.slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('#external-buttons a.active').removeClass('active');
    $('#external-buttons a').eq(nextSlide).addClass('active');
});


$('#external-buttons a').on('click', function(e){
    e.preventDefault();
    $('#external-buttons a.active').removeClass('active');
    $(this).addClass('active');
    var targetSlide = $(this).data('target');
    $('.slick-slider').slick('slickGoTo', targetSlide );
});//click()