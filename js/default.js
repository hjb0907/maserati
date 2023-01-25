let w=$(window).width();

$(window).on("resize", function(){
    w=$(window).width();
    if(w>320){
      $(".gnb-bg").removeAttr("style");
      $(".nav").stop().animate({right:"-100%"}, 200);
    }
});

//mobile
$(".main").on("click", mobileGnb);

function mobileGnb(){
    if($(this).hasClass("on")){
      $(this).removeClass("on");
      $(".gnb-bg").stop().slideUp(300);
  }else{
    $(".main").removeClass("on");
    $(".gnb-bg").stop().slideUp(300);
    $(this).addClass("on");
    $(this).next().stop().slideDown(300);
  }
}

$(".mobile-menu").on("click", function(){
  $(".nav").stop().animate({right:0}, 200);
})

$(".close-btn").on("click", function(){
  $(".nav").stop().animate({right:"-100%"}, 200);
});

//PC
$(".depth1").on("mouseenter  focusin", pcGnb)

$(".depth1").on("mouseleave  focusout", gnbLeave)

function pcGnb(){
  if(w>960){
     $(this).find(".gnb-bg").slideDown(300);
  }
}
function gnbLeave(){
  if(w>960){
   $(this).find(".gnb-bg").slideUp(300);
  }
}
