$(function(){
    /* calc - tab */
    
    
    
    
    
    /* swiper slide */
    var swiper = new Swiper(".price_inner", {
        slidesPerView: 'auto',
        spaceBetween: 25,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    
    var swiper = new Swiper(".staking_slider_con", {
        slidesPerView: 'auto',
        spaceBetween: 25,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    
});