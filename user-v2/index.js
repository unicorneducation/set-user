var prev = $('#prev')
var next = $('#next')

var content = $('.content');
var position = 0;

var numSlides = $('.slide').length - 2;
var maxScroll = numSlides * 800;
var curSlide = 0;

next.click(function () {
  if (position <= maxScroll) {
    position += 800
    content.css({
      "transform": "translateY(-" + position + "px)",
    })
    console.log(position);
    curSlide++;
    loadPage(curSlide)
  }
})

prev.click(function () {
  if (position > 0) {
    position -= 800
    content.css({
      "transform": "translateY(-" + position + "px)",
    })
    console.log(position);
    curSlide--;
    loadPage(curSlide)
  }
})

loadPage(0)

function loadPage(num) {
  // gets teams from group.json 
  $.getJSON("./content.json", function (data) {
    console.log("loaded");

    var content = data.slides[num].content
    var title = data.slides[num].title
    var subtitle = data.slides[num].subtitle

    $('article').fadeOut(function () {
      $('article').html("")
      for (var text of content) {
        $('article').append('<p>' + text + '</p>').delay(300)
      }
    })
    $('article').fadeIn()

    $('#title').fadeOut(function () {
      $('#title').text(title)
    })
    $('#title').fadeIn()

    $('#subtitle').fadeOut(function () {
      $('#subtitle').text(subtitle)
    })
    $('#subtitle').fadeIn()

  });

}