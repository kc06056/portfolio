$(function(){

    //  $(".etcmain>li").click(function(){
    //  $(".etcsub").stop(true).show();
       
    //    })


        
 $(".mainmenu").on({
  mouseenter:function(){
   $(".submenu").stop(true).show('slow');
  },
  mouseleave:function(){
   $(".submenu").stop(true).hide('slow');
  }
 });

 $(".title .t1").click(function(){
    $(".tab1").show();
    $(".t1").css({color:'#0041E9'});
    $(".t2").css({color:''});
    $(".t3").css({color:''});
    $(".t4").css({color:''});
    $(".t5").css({color:''});
    $(".tab2").stop(true).hide();
    $(".tab3").stop(true).hide();
    $(".tab4").stop(true).hide();
    $(".tab5").stop(true).hide();
   });
   $(".title .t2").click(function(){
    $(".t1").css({color:''});
    $(".t2").css({color:'#0041E9'});
    $(".t3").css({color:''});
    $(".t4").css({color:''});
    $(".t5").css({color:''});
    $(".tab1").stop(true).hide();
    $(".tab2").show();
    $(".tab3").stop(true).hide();
    $(".tab4").stop(true).hide();
    $(".tab5").stop(true).hide();

   });
   $(".title .t3").click(function(){
    $(".t1").css({color:''});
    $(".t2").css({color:''});
    $(".t3").css({color:'#0041E9'});
    $(".t4").css({color:''});
    $(".t5").css({color:''});
    $(".tab1").stop(true).hide();
    $(".tab2").stop(true).hide();
    $(".tab3").show();
    $(".tab4").stop(true).hide();
    $(".tab5").stop(true).hide();
   });
   $(".title .t4").click(function(){
    $(".t1").css({color:''});
    $(".t2").css({color:''});
    $(".t3").css({color:''});
    $(".t4").css({color:'#0041E9'});
    $(".t5").css({color:''});
    $(".tab1").stop(true).hide();
    $(".tab2").stop(true).hide();
    $(".tab3").stop(true).hide();
    $(".tab4").show();
    $(".tab5").stop(true).hide();
   });
   $(".title .t5").click(function(){
    $(".t1").css({color:''});
    $(".t2").css({color:''});
    $(".t3").css({color:''});
    $(".t4").css({color:''});
    $(".t5").css({color:'#0041E9'});
    $(".tab1").stop(true).hide();
    $(".tab2").stop(true).hide();
    $(".tab3").stop(true).hide();
    $(".tab4").stop(true).hide();
    $(".tab5").show();
   });
  

//  $("section .t1").click(function(){
//     $(".t1").css({color:'#fff',backgroundColor:'#808080'});
//     $(".t2").css({color:'#333',backgroundColor:'#fff'});
//     $(".tab1").show();
//     $(".tab2").hide();
//    });
  
//    $("section .t2").click(function(){
//     $(".t2").css({color:'#fff',backgroundColor:'#808080'});
//     $(".t1").css({color:'#333',backgroundColor:'#fff'});
//     $(".tab2").show();
//     $(".tab1").hide();
//    });
     



})