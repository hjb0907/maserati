

    var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    });
    
    const pic=$("#pic");
    const h3=$(".txt .h3");
    const p=$(".txt .p")
    $("#btn1").click(function(e){
        e.preventDefault();
        pic.attr({src:"./images/model_1.png",alt:"기블리"});
        h3.text("YOU'RE NOT LIKE EVERYONE ELSE");
        p.text("스타일, 파워, 스포티한 핸들링, 컴포트의 완벽한 조화");
    });
    $("#btn2").click(function(e){
        e.preventDefault();
        pic.attr({src:"./images/model_2.png",alt:"르반테"});
        h3.text("THE MASERATI OF SUVs");
        p.text("강력한 온로드-오프로드 성능");
        
    });
    $("#btn3").click(function(e){
        e.preventDefault();
        pic.attr({src:"./images/model_3.png",alt:"콰트로"});
        h3.text("AN ICON OF ITALIAN ELEGANCE");
        p.text("세련된 퍼포먼스와 럭셔리함의 매혹적인 만남");
    });
    
    $("#btn4").click(function(e){
        e.preventDefault();
        pic.attr({src:"./images/model_4.png",alt:"mc20"});
        h3.text("THE FIRST OF ITS KIND");
        p.text("시대의 한계를 가볍게 뛰어넘는 마세라티 슈퍼 스포츠 카. 새로운 미래를");
    });
 
      