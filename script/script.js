$(document(){

    $(".contents a img").click(function(){
        $(".contents img").stop(true).css({opacity: 505})
        $(".contents span").stop(true).show();
       });



});
// gsap.registerPlugin(ScrollTrigger);

// gsap.to('.contents1>img', {
// ScrollTrigger:'.contents1>h3',
// y: 500,
// duraion: 5   
// });

// gsap.from('.contents1>img',{
//     duration:2,
//     y:400,
//     opacity:0,
//     ScrollTrigger:'.contents1>h3'
// })
