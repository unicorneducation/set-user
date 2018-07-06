var prev = $('#prev')
var next = $('#next')

var content = $('.content');

var position = 0;

next.click(function () {
  position += 800

  console.log(position);

  content.css({
    "transform": "translateY(-" + position + "px)",
  })


})

prev.click(function () {
  position -= 800

  console.log(position);

  content.css({
    "transform": "translateY(-" + position + "px)",
  })
})