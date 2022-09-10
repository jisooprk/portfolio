$(function(){
    /* intro */
    $('.intro').addClass('end');
    
    /* header */
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            if(!$('header').hasClass('shrink')){
                $('header').addClass('shrink');
            }
        } else{
            if($('header').hasClass('shrink')){
                $('header').removeClass('shrink');
            }
        }
    });
    
    /* nav */
    $('.btn_nav').click(function(e){
        e.preventDefault();
        $('header').toggleClass('active');
        $('#nav_wrap').slideToggle();
    });
    
    $(window).resize(function(){
        if($(this).width() >= 1024){
            $('header').removeClass('active');
            $('#nav_wrap').show();
        } else{
            $('#nav_wrap').hide();
        }
    });
    
    /* visual slider */
    $('.vis_slider').bxSlider({
        auto:true,
        autoHover:false,
        speed:1000,
        pause:3000,
        mode:'fade',
        autoControls:false,
        pager:true,
        controls:false
    });
    
    /* spotlight slider */
    $('.spot_slider').bxSlider({
        auto:true,
        autoHover:true,
        speed:1000,
        pause:3000,
        minSlides:2,
        maxSlides:4,
        slideWidth:396,
        slideMargin:24,
        moveSlides:1,
        pager:false,
        nextSelector:'.spot_ctrls .next',
        prevSelector:'.spot_ctrls .prev'
    });
    
    /* scroll on */
    $(window).scroll(function(){
        var win_top = $(window).scrollTop(),
            offset = 500,
            new_ost = $('.new_inner').offset().top,
            gift_ost = $('#gift').offset().top,
            clean_ost = $('.clean_inner').offset().top,
            service_ost = $('#service').offset().top;
        
        if(win_top >= new_ost - offset){
            $('.new_inner').addClass('on');
        } else{
            $('.new_inner').removeClass('on');
        };
        
        if(win_top >= gift_ost - offset){
            $('#gift').addClass('on');
        } else{
            $('#gift').removeClass('on');
        };
        
        if(win_top >= clean_ost - offset){
            $('.clean_inner').addClass('on');
        } else{
            $('.clean_inner').removeClass('on');
        };
        
        if(win_top >= service_ost - offset){
            $('#service').addClass('on');
        } else{
            $('#service').removeClass('on');
        };
        
    });
    
    
    
    
    
    
});