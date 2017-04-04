$(window).scroll(function(){

  if( $(window).width() > 600) {
    if (elementInViewport2(document.querySelector('.beach'))){
      $(".nav.menu").css("background-color", "rgba(0,0,0,0)");
      $(".nav.menu .header.item").css("color", "#66CCCC");
      $(".nav.menu a.item").css("color", "#66CCCC");
    } else {
      $(".nav.menu").css("background-color", "#66CCCC");
      $(".nav.menu .header.item").css("color", "white");
      $(".nav.menu a.item").css("color", "white");
    }
  }


});

function elementInViewport2(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}
