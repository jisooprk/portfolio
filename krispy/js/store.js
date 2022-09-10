$(function(){
    /* vivus */
    new Vivus('store_title', {duration: 100})
    
    /* scroll on */
    $(window).scroll(function(){
        var win_top = $(window).scrollTop(),
            offset = 500,
            gangnamUp_ost = $('#gangnam .upper_wrap').offset().top,
            gangnamPic_ost = $('#gangnam .pic_wrap').offset().top,
            namygUp_ost = $('#namyoung .upper_wrap').offset().top,
            namygPic_ost = $('#namyoung .pic_wrap').offset().top,
            ydpUp_ost = $('#ydp .upper_wrap').offset().top,
            ydpPic_ost = $('#ydp .pic_wrap').offset().top;
        
        if(win_top >= gangnamUp_ost - offset){
            $('#gangnam').addClass('on');
        } else{
            $('#gangnam').removeClass('on');
        }
        if(win_top >= gangnamPic_ost - offset){
            $('#gangnam .pic_wrap').addClass('on');
        } else{
            $('#gangnam .pic_wrap').removeClass('on');
        }
        
        if(win_top >= namygUp_ost - offset){
            $('#namyoung').addClass('on');
            $('.bg_st0').addClass('yellow');
        } else{
            $('#namyoung').removeClass('on');
            $('.bg_st0').removeClass('yellow');
        }
        if(win_top >= namygPic_ost - offset){
            $('#namyoung .pic_wrap').addClass('on');
        } else{
            $('#namyoung .pic_wrap').removeClass('on');
        }
        
        if(win_top >= ydpUp_ost - offset){
            $('#ydp').addClass('on');
            $('.bg_st0').addClass('red');
        } else{
            $('#ydp').removeClass('on');
            $('.bg_st0').removeClass('red');
        }
        if(win_top >= ydpPic_ost - offset){
            $('#ydp .pic_wrap').addClass('on');
        } else{
            $('#ydp .pic_wrap').removeClass('on');
        }
        
    });
    
    
});