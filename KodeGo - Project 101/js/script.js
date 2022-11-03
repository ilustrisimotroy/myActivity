$(document).ready(function(){

    $(window).scroll(function(){

      if(this.scrollY > 20) {
          $('.nav_bar').addClass("sticky");
      } else {
          $('.nav_bar').removeClass("sticky");
      }
      if(this.scrollY > 500) {
          $('.scroll-up-btn').addClass("show");
      } else {
          $('.scroll-up-btn').removeClass("show");
      }

    //   if(this.scrollY > 20) {
    //       $('.card-1').addClass("fadeInLeft");
    //   } else {
    //       $('.card-1').removeClass("fadeInLeft");
    //   }

    //   if(this.scrollY > 20) {
    //       $('.card-2').addClass("fadeInTop");
    //   } else {
    //       $('.card-2').removeClass("fadeInTop");
    //   }

    //   if(this.scrollY > 20) {
    //       $('.card-3').addClass("fadeInRight");
    //   } else {
    //       $('.card-3').removeClass("fadeInRight");
    //   }

    //   if(this.scrollY > 20) {
    //       $('.card-4').addClass("fadeInBottom");
    //   } else {
    //       $('.card-4').removeClass("fadeInBottom");
    //   }
  });

  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0})
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function(){
      $('.nav_bar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

});