$(document).ready(function(){
    $(".utl p").on({
      mouseenter: function(){
        $(this).css("background-color", "Aliceblue");
      },  
      mouseleave: function(){
        $(this).css("background-color", "white");
      }, 
    });
  });

function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 1000);
