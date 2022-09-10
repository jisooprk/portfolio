$(function(){
    /* vivus */
    new Vivus('about_title', {duration: 100});
    new Vivus('crs_svg', {duration: 100});
    new Vivus('dozen_svg', {duration: 100});
    
    /* scroll on */
    $(window).scroll(function(){
        var win_top = $(window).scrollTop(),
            offset = 500,
            aboutDonut_ost = $('#about_donut').offset().top,
            donutTxt_ost = $('.donut_txt').offset().top,
            plus_ost = $('#plus').offset().top,
            hotlight_ost = $('#hotlight').offset().top,
            hotTxt_ost = $('.hotlight_txt').offset().top,
            hotSide_ost = $('.hotlight_side').offset().top,
            crs_ost = $('#crs').offset().top,
            dozen_ost = $('#dozen').offset().top;
        
        if(win_top >= aboutDonut_ost - offset){
            $('#about_donut').addClass('on');
        } else{
            $('#about_donut').removeClass('on');
        }
        if(win_top >= donutTxt_ost - offset){
            $('.donut_txt').addClass('on');
        } else{
            $('.donut_txt').removeClass('on');
        }
        
        if(win_top >= plus_ost - offset){
            $('#plus').addClass('on');
        } else{
            $('#plus').removeClass('on');
        }
        
        if(win_top >= hotlight_ost - offset){
            $('.hotlight_now').addClass('animate__flash');
            $('#hotlight').addClass('on');
            $('.bg_st0').addClass('yellow');
        } else{
            $('.hotlight_now').removeClass('animate__flash');
            $('#hotlight').removeClass('on');
            $('.bg_st0').removeClass('yellow');
        }
        if(win_top >= hotTxt_ost - offset){
            $('.hotlight_txt').addClass('on');
        } else{
            $('.hotlight_txt').removeClass('on');
        }
        if(win_top >= hotSide_ost - offset){
            $('.hotlight_side').addClass('on');
        } else{
            $('.hotlight_side').removeClass('on');
        }
        
        if(win_top >= crs_ost - offset){
            $('#crs_svg').addClass('on');
            $('.bg_st0').addClass('red');
        } else{
            $('.bg_st0').removeClass('red');
        }
        
        if(win_top >= dozen_ost - offset){
            $('#dozen_svg').addClass('on');
            $('#dozen').addClass('on');
        } else{
            $('#dozen').removeClass('on');
        }
        
    });
});