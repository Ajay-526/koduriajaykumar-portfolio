  
$(document).ready(function(){
    $(".ssc").hide();
    $(".inter").hide();
    $(".s").click(function(){
      $(".ssc").toggle();
      $(".ssc").focus();
      $(".inter").hide();
      $(".degree").hide();  
    })
    $(".i").click(function(){
        $(".inter").toggle();
        $(".ssc").hide();
        $(".degree").hide();
      })
    $(".d").click(function(){
        $(".degree").toggle();
        $(".ssc").hide();
        $(".inter").hide();
      })
  });

