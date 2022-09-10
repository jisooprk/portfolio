$(function(){
    /* qr slide */
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
          },
      });


    
    /* agree accordion */
    $('.agree_open').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('on');
        
        $(this).parent().siblings('.agree_txt').stop().slideToggle(250);
        
        
//        $(this).parent().parent('li').toggleClass('on')
        
//        if(!$(this).parent().parent('li').hasClass('on')){
//            $(this).parent().parent('li').addClass('on');
//        } else{
//            $(this).parent().parent('li').removeClass('on');
//        }
        
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

    /* 마이페이지 전체 선택 */
    // 전체 선택
    $('.my_con').on('click', '.check_all', function(){
        $(this).parents('.my_con').find('input').prop('checked', $(this).is(':checked'));
    });
    
    // 개별 선택
    $('.my_con').on('click', '.normal_check', function(){
        var is_checked = true;
        
        $('.my_con .normal_check').each(function(){
            is_checked = is_checked && $(this).is(':checked');
        });
        
        $('.check_all').prop('checked', is_checked);
    });

    /* datetimepicker */
    $('#datetimepicker').datetimepicker();
    $('#datetimepicker2').datetimepicker();
    $('#datetimepicker3').datetimepicker();
    
    
    /* 첨부파일 */
    var fileTarget = $('.filebox .upload-hidden');

    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }

        $(this).siblings('.upload-name').val(filename);
    });
    
    /* 직접입력 */
    $("#selboxDirect").hide();
    $("#selbox").change(function() {
        if($("#selbox").val() == "direct") {
            $("#selboxDirect").show();
        }  else {
            $("#selboxDirect").hide();
        }
    });
    
    $("#selboxDirect2").hide();
    $("#selbox2").change(function() {
        if($("#selbox2").val() == "direct") {
            $("#selboxDirect2").show();
        }  else {
            $("#selboxDirect2").hide();
        }
    });
    
    $("#selboxDirect3").hide();
    $("#selbox3").change(function() {
        if($("#selbox3").val() == "direct") {
            $("#selboxDirect3").show();
        }  else {
            $("#selboxDirect3").hide();
        }
    });
    
    $("#selboxDirect4").hide();
    $("#selbox4").change(function() {
        if($("#selbox4").val() == "direct") {
            $("#selboxDirect4").show();
        }  else {
            $("#selboxDirect4").hide();
        }
    });
    
    /* login */
    // 입력시 버튼 활성화
    $('#email-input').on('input', checkInput);
    $('#pw-input').on('input', checkInput);

    function checkInput() {
        var email = $('#email-input').val();
        var password = $('#pw-input').val();

        if(email === '' || password === ''){
            // 비활성화
            // $('#submit-btn').css('background-color', 'rgba(34,34,34,.3)');
            $('#submit-btn').prop('disabled', true);
        } else{
            // 활성화
            // $('#submit-btn').css('background-color', '#222');
            $('#submit-btn').prop('disabled', false);
        }
    }
    
    // 비밀번호 표시
    $('.pw_wrap i').on('click', function(){
        $('#pw-input').toggleClass('active');
        if($('#pw-input').hasClass('active')){
            $(this).attr('class', 'fas fa-eye-slash').prev('input').attr('type','text');
        } else{
            $(this).attr('class', 'fas fa-eye').prev('input').attr('type','password');
        }
    });
    
    
});