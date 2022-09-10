$(function(){
    
    /* slider */
    $('.best_slider_wrap').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover : true,
        arrows:true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    
    /* svg vivus */
    new Vivus('svg_donut', {duration: 100});
    new Vivus('svg_coffee', {duration: 100});
    new Vivus('svg_others', {duration: 100});
    
    /* hotnow parallax */
    $('#hot').parallax({
        imageSrc: 'img/bg_hotnow.jpg',
        speed:0,
        zIndex:0
    });
    
    /* scroll on */
    $(window).scroll(function(){
        var win_top = $(window).scrollTop(),
            offset = 500,
            hotnow_ost = $('#hot').offset().top,
            shareTxt1_ost = $('.share_txt1').offset().top,
            share1_ost = $('.share1').offset().top,
            share2_ost = $('.share2').offset().top,
            shareTxt2_ost = $('.share_txt2').offset().top,
            share3_ost = $('.share3').offset().top;
        if(win_top >= hotnow_ost - offset){
            $('#hot').addClass('on');
        } else{
            $('#hot').removeClass('on');
        };
        
        if(win_top >= shareTxt1_ost - offset){
            $('.share_txt1').addClass('on');
        } else{
            $('.share_txt1').removeClass('on');
        };
        if(win_top >= share1_ost - offset){
            $('.share1').addClass('on');
        } else{
            $('.share1').removeClass('on');
        };
        if(win_top >= share2_ost - offset){
            $('.share2').addClass('on');
            $('.bg_st0').addClass('yellow');
        } else{
            $('.share2').removeClass('on');
            $('.bg_st0').removeClass('yellow');
        };
        if(win_top >= shareTxt2_ost - offset){
            $('.share_txt2').addClass('on');
            $('.bg_st0').addClass('red');
        } else{
            $('.share_txt2').removeClass('on');
            $('.bg_st0').removeClass('red');
        };
        if(win_top >= share3_ost - offset){
            $('.share3').addClass('on');
        } else{
            $('.share3').removeClass('on');
        };
    });
    
    
    
    
});