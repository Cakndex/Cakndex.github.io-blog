//滚动特效
$(window).scroll(function () {
  var a = $(this).scrollTop();
  var b = 800;
  $("h1").css({
    backgroundPosition: "center " + a / 2 + "px" });
 
  $(".parallax").css({
    top: a / 1.6 + "px",
    opacity: 1 - a / b });
 
});
 
// parallax scrolling
document.addEventListener("scroll", () => {
  var top = window.pageYOffset;
  var one = document.querySelector(".one");
  var two = document.querySelector(".two");
  var three = document.querySelector(".three");
  var four = document.querySelector(".four");
  var five = document.querySelector(".five");
 
  one.style.bottom = -(top * 0.1) + "px";
  two.style.bottom = -(top * 0.2) + "px";
  three.style.bottom = -(top * 0.3) + "px";
  four.style.bottom = -(top * 0.4) + "px";
});

