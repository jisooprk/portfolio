$(function(){
    
    /* agree accordion */
//    $('.agree_open').click(function(){
//        $(this).parent().siblings().slideToggle(300);
//        $(this).parent().parent().siblings().find('.agree_txt').slideUp();
//    });
//    
//    $('.agree_all').click(function(){
//        $('.agree_txt').slideUp();
//    });
    
    $('.agree_open').click(function(){
        $('.agree_group li').removeClass('on');
        
        
        if(!$(this).parent().parent('li').hasClass('on')){
            $(this).parent().parent('li').addClass('on');
        } else{
            $(this).parent().parent('li').removeClass('on');
        }
        
    });
    
    /* agree checkbox 전체 선택 */
    // 전체 선택
    $('.agree_group').on('click', '.check_all', function(){
        $(this).parents('.agree_group').find('input').prop('checked', $(this).is(':checked'));
    });
    
    // 개별 선택
    $('.agree_group').on('click', '.normal_check', function(){
        var is_checked = true;
        
        $('.agree_group .normal_check').each(function(){
            is_checked = is_checked && $(this).is(':checked');
        });
        
        $('.check_all').prop('checked', is_checked);
    });
    
    /* 마케팅 동의 - 전체 선택 */
    // 전체 선택
    $('.mkt_agree_group').on('click', '.mkt_check_all', function(){
        $(this).parents('.mkt_agree_group').find('input').prop('checked', $(this).is(':checked'));
    });
    // 개별 선택
    $('.mkt_agree_group').on('click', '.mkt_check', function(){
        var is_checked = true;
        
        $('.mkt_agree_group .mkt_check').each(function(){
            is_checked = is_checked && $(this).is(':checked');
        });
        
        $('.mkt_check_all').prop('checked', is_checked);
    });
    
    
    /* staking_detail barfiller */
    $('.barfiller').barfiller({ barColor: '#fc6' });
    
});