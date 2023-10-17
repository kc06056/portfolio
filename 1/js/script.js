$(function(){

  $(".hambar").click(function(){
    $("header ul").stop(true).show();
    $(".hambar").stop(true).hide();
    $(".closebar").stop(true).show();
      
      })
      $(".closebar").click(function(){
        $("header ul").stop(true).hide();
        $(".closebar").stop(true).hide();
        $(".hambar").stop(true).show();
          })
        })