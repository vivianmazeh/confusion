$(document).ready(function (){
    $("#carouselButton").click(function(){
      if($("#carouselButton").children("span").hasClass("fa-pause")){
          $("#carouselButton").carousel('pause');
          $("#carouselButton").children("span").removeClass("fa-pause");
          $("#carouselButton").children("span").addClass("fa-play")
      }else if($("#carouselButton").children("span").hasClass("fa-play")){
          $("#carouselButton").carousel('cycle');
          $("#carouselButton").children("span").removeClass("fa-play");
          $("#carouselButton").children("span").addClass("fa-pause")
      }
    });

    $("#reserveTableButton").click(function(){
      $("#reserveTableModal").modal().open();
    });

    $("#loginButton").click(function(){
      $("#loginModal").modal().open();
    });
  });