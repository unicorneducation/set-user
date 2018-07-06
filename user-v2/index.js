var prev = $('#prev')
var next = $('#next')

var content = $('.content');
var position = 0;

var numSlides = $('.slide').length - 2;
var maxScroll = numSlides * 800;;

next.click(function () {
  if (position <= maxScroll) {
    position += 800
    content.css({
      "transform": "translateY(-" + position + "px)",
    })
    console.log(position);
  }
})

prev.click(function () {
  if (position > 0) {
    position -= 800
    content.css({
      "transform": "translateY(-" + position + "px)",
    })
    console.log(position);
  }
})