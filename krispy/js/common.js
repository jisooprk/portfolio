$(function(){
    /* nav */
    $('.btn_menu').click(function(e){
        e.preventDefault();
        
        $(this).toggleClass('active');
        $('.nav_wrap').toggleClass('on');
    });
    
    var $gnbLi = $('.gnb>li');
    var $navImg = $('#nav_img');
    $gnbLi.eq(0).mouseover(function(){
        $navImg.removeClass();
    })
    $gnbLi.eq(1).mouseover(function(){
        $navImg.removeClass();
        $navImg.addClass('menu');
    })
    $gnbLi.eq(2).mouseover(function(){
        $navImg.removeClass();
        $navImg.addClass('store');
    })
    $gnbLi.eq(3).mouseover(function(){
        $navImg.removeClass();
        $navImg.addClass('media');
    });
    
    /* e-mail form */
    var $input = $('.signup_form input');
    $($input).focus(function(){
        $(this).next().addClass('blind');
    });
    $($input).blur(function(){
        if($(this).val() == ''){
            $(this).next().removeClass('blind');
        }
//        if(!$(this).val() == ''){
//            $('.signup_form button').css({background:'#c01c2d'});
//        } else{
//            $('.signup_form button').css({background:'rgba(255,255,255,.5)'});
//        }
    });
    
    /* go to top */
    $('.go_top').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0}, 350);
    });
    
});