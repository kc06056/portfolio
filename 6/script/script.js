//스와이퍼 동작
document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
        // 스와이퍼 설정
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true, 
        },
        navigation: {
            nextEl: null,
            prevEl: null,
        },
    });
});
//헤더에 호버
$(document).ready(function() {
    // 마우스를 mainmenu 위로 올렸을 때
    $('.mainmenu').hover(function() {
        // header 전체를 하얗게 변경
        $('header').css('background-color', '#fff');
        // logo와 user_info에 마우스를 올렸을 때 변화 없도록 설정
        $('.logo, .user_info').hover(function() {
            // 아무 작업도 수행하지 않음
        });
        // 서브메뉴 보이기
        $('.submenu').show();
    }, function() {
        // header를 다시 투명하게 변경
        $('header').css('background-color', 'transparent');
        // 서브메뉴 감추기
        $('.submenu').hide();
    });

    // 마우스를 mainmenu의 후속 요소인 submenu 위로 올렸을 때
    $('.submenu').hover(function() {
        // 아무 작업도 수행하지 않음
    }, function() {
        // 서브메뉴 감추기
        $('.submenu').hide();
    });
});
$(document).ready(function() {
    // 햄버거 메뉴 클릭 시
    $('.hamburger-menu').click(function() {
        // header를 하얗게 변경
        $('header').css('background-color', '#fff');
        // logo와 user_info에 마우스를 올렸을 때 변화 없도록 설정
        $('.logo, .user_info').hover(function() {
            // 아무 작업도 수행하지 않음
        });
    });

    // close-box 클릭 시
    $('.close-box').click(function() {
        // header를 투명하게 변경
        $('header').css('background-color', 'transparent');
    });
});



$(document).ready(function() {
    // 햄버거 바 클릭 시
    $('.hamburger-menu').click(function() {
        $(this).hide(); // 햄버거 바 숨기기
        $('.close-box').show(); // Close 박스 보이기
        $('nav').show(); // 네비게이션 메뉴와 모든 하위 메뉴 표시
    });

    // Close 박스 클릭 시
    $(document).on('click', '.close-box', function() {
        $('.hamburger-menu').show(); // 햄버거 바 보이기
        $('nav').hide(); // 네비게이션 메뉴와 모든 하위 메뉴 숨기기
        $(this).hide(); // Close 박스 숨기기
    });
});


  
          $('.mainmenu > li').hover(
        function() {
            // 호버 시 서브메뉴 표시
            $(this).find('.submenu').show();
        },
        function() {
            // 호버를 벗어날 때 서브메뉴 숨김
            $(this).find('.submenu').hide();
        }
    );
    
      
    
    

