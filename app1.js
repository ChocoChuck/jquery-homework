$(document).ready(function() {

  $("h1").fadeOut(3000)
  $("h1").fadeIn(3000)

  $("div").click(function(){
  $("div").animate({
    width: 400,
    height: 400
  }, 2000);
  })

  $("div").click(function(){
  $("div").animate({
    width: 100,
    height: 100
  }, 2000);
  })
});