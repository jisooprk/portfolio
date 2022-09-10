$(function(){
    /* vivus */
    new Vivus('menu_title', {duration: 100})
    
    /* scroll on */
    $(window).scroll(function(){
        var win_top = $(window).scrollTop(),
            offset = 500,
            donut_ost = $('#sub2_donut').offset().top,
            coffee_ost = $('#sub2_coffee').offset().top,
            others_ost = $('#sub2_others').offset().top;
        
        if(win_top >= donut_ost - offset){
            $('#sub2_donut').addClass('on');
        } else{
            $('#sub2_donut').removeClass('on');
        }
        if(win_top >= coffee_ost - offset){
            $('#sub2_coffee').addClass('on');
            $('.bg_st0').addClass('yellow');
        } else{
            $('#sub2_coffee').removeClass('on');
            $('.bg_st0').removeClass('yellow');
        }
        if(win_top >= others_ost - offset){
            $('#sub2_others').addClass('on');
            $('.bg_st0').addClass('red');
        } else{
            $('#sub2_others').removeClass('on');
            $('.bg_st0').removeClass('red');
        }
        
    });
    
    
});