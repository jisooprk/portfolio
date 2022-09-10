$(function(){
    /* vivus */
    new Vivus('media_title', {duration: 100})
    new Vivus('sketch_cam', {duration: 100})
    
    /* scroll on */
    $(window).scroll(function(){
        var win_top = $(window).scrollTop(),
            offset = 500,
            theaterTxt_ost = $('.theater_txt').offset().top,
            theaterV_ost = $('.theater_v').offset().top,
            theaterPic_ost = $('.theater_pic').offset().top,
            sketchTxt_ost = $('.sketch_txt').offset().top,
            sketchV_ost = $('.sketch_v').offset().top,
            sketchMore_ost = $('.sketch_more').offset().top,
            homeTxt_ost = $('.home_txt').offset().top,
            homeV_ost = $('.home_v').offset().top;
        
        if(win_top >= theaterTxt_ost - offset){
            $('.theater_txt').addClass('on');
        } else{
            $('.theater_txt').removeClass('on');
        }
        if(win_top >= theaterV_ost - offset){
            $('.theater_v').addClass('on');
        } else{
            $('.theater_v').removeClass('on');
        }
        if(win_top >= theaterPic_ost - offset){
            $('.theater_pic').addClass('on');
        } else{
            $('.theater_pic').removeClass('on');
        }
        
        if(win_top >= sketchTxt_ost - offset){
            $('.sketch_txt').addClass('on');
            $('.bg_st0').addClass('yellow');
        } else{
            $('.sketch_txt').removeClass('on');
            $('.bg_st0').removeClass('yellow');
        }
        if(win_top >= sketchV_ost - offset){
            $('.sketch_v').addClass('on');
        } else{
            $('.sketch_v').removeClass('on');
        }
        if(win_top >= sketchMore_ost - offset){
            $('.sketch_more').addClass('on');
        } else{
            $('.sketch_more').removeClass('on');
        }
        
        if(win_top >= homeTxt_ost - offset){
            $('.home_txt').addClass('on');
            $('.bg_st0').addClass('red');
        } else{
            $('.home_txt').removeClass('on');
            $('.bg_st0').removeClass('red');
        }
        if(win_top >= homeV_ost - offset){
            $('.home_v').addClass('on');
        } else{
            $('.home_v').removeClass('on');
        }
        
    });
    
    
});