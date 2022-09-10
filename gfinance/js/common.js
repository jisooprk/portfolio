$(function(){
    /* nav */
    $('.btn_nav').click(function(e){
        e.preventDefault();
        $('header').addClass('active');
        $('.dim').fadeIn(300);
        $('html,body').css({overflow:'hidden', height:'100%'});
    });
    $('.close_nav').click(function(e){
        e.preventDefault();
        $('header').removeClass('active');
        $('.dim').fadeOut(300);
        $('html,body').css({overflow:'auto', height:'auto'});
    });
    
    /* go to top */
    $('.go_top').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0}, 400);
    });
    
    /* faq tab */
    var tabAnchor = $('.tabs_nav_1 li'),
        tabPanel = $('.tabs_panel_1');
    
    tabAnchor.click(function(e){
        e.preventDefault();
        tabAnchor.find('a').removeClass('active');
        $(this).find('a').addClass('active');
        
        tabPanel.hide();
        
        var targetIdx = $(this).index();
        tabPanel.eq(targetIdx).show();
    });
    tabAnchor.eq(0).trigger('click');
    
    /* customer tab */
//    var tabAnchor2 = $('.tabs_nav_2 li'),
//        tabPanel2 = $('.tabs_panel_2');
//    
//    tabAnchor2.click(function(e){
//        e.preventDefault();
//        tabAnchor2.find('a').removeClass('active');
//        $(this).find('a').addClass('active');
//        
//        tabPanel2.hide();
//        
//        var targetIdx = $(this).index();
//        tabPanel2.eq(targetIdx).show();
//    });
//    tabAnchor2.eq(0).trigger('click');
    
    /* modal */
    $('.to_modal_asset_loan').click(function(e){
        e.preventDefault();
        
        $('.modal_dimmed').fadeIn(300);
        $('.modal_asset_loan').fadeIn(300);
        $('html,body').css({overflow:'hidden', height:'100%'});
    });
    $('.to_modal_id').click(function(e){
        e.preventDefault();
        
        $('.modal_dimmed').fadeIn(300);
        $('.modal_id').fadeIn(300);
        $('html,body').css({overflow:'hidden', height:'100%'});
    });
    $('.to_modal_pw').click(function(e){
        e.preventDefault();
        
        $('.modal_dimmed').fadeIn(300);
        $('.modal_pw').fadeIn(300);
        $('html,body').css({overflow:'hidden', height:'100%'});
    });
    
    $('.btn_close, .btn_close_2, .modal_dimmed').click(function(e){
        e.preventDefault();
        
        $('.modal_dimmed').fadeOut(300);
        $('.modal_wrap').fadeOut(300);
        $('html,body').css({overflow:'auto', height:'auto'});
    });
    
    /* modal - iframe */
    $('.modal_dimmed, .btn_close').click(function(){
        modalClose();
    });
    
    $('.to_modal_ifrm').click(function(e){
        e.preventDefault();
        var to_url = $(this).attr('data-url');
        
        $('.modal_ifrm_wrap').fadeIn(300);
        $('.modal_dimmed').fadeIn(300);
//        $('.btn_close').fadeIn(300);
//        $('.ifrm').attr('src', to_url).fadeIn(300);
//        $('html,body').css({overflow:'hidden', height:'100%'});
        $('.wrap').addClass('no_scroll');
    });
    
    function modalClose() {
//        $('.ifrm').fadeOut(300);
//        $('.btn_close').fadeOut(300);
        $('.modal_ifrm_wrap').fadeOut(300);
        $('.modal_dimmed').fadeOut(300);
//        $('html,body').css({overflow:'auto', height:'auto'});
        $('.wrap').removeClass('no_scroll');
    }
    
    
    
    
    
    
    
    
    
    
    
});