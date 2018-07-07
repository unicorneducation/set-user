var content = $('.content');
var position = 0;

var numSlides = $('.slide').length - 1;
var maxScroll = numSlides * 800;
var curSlide = 0;
var curPage = 0;

var maxLength;

var prev = $('#prev')
var start = $('#start')
var next = $('#next')
var prevent = false;
var prevPrevent = false;

loadPage(curSlide)

function loadPage(num) {
  // gets teams from group.json 
  $.getJSON("content.json", function (data) {
    var content = data.slides[num].content
    var title = data.slides[num].title
    var subtitle = data.slides[num].subtitle
    prevent = data.slides[num].prevent
    curPage = data.slides[num].page
    maxLength = data.slides.length - 1
    if (curPage > 0) {
      prevPrevent = data.slides[num - 1].prevent
    }

    nextText = data.slides[num].next
    prevText = data.slides[num].prev

    $('article').fadeOut(function () {
      $('article').html("")
      for (var text of content) {

        if (text == "featureList") {
          // load features from localStorage
          var feats = loadStorage()
          for (var item in feats) {
            $('article').append('<p class="indent">' + feats[item] + '</p>')
          }
        } else {
          $('article').append('<p>' + text + '</p>')
        }
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

    if (curSlide == 0) {
      $('.double-nav').hide();
      $('.single-nav').show();

    } else {
      $('.single-nav').hide();
      $('.double-nav').show();
    }

    next.html(nextText)
    prev.html(prevText)



  })

}

function loadStorage() {
  var local = localStorage;
  var featureList = JSON.parse(local.getItem("feat"));

  return featureList;
}

start.click(function () {
  // console.log('click');
  if (position < maxScroll) {

    position += 800
    content.css({
      "transform": "translateY(-" + position + "px)",
    })
    // console.log(position);
    curSlide++;
    loadPage(curSlide)
    console.log(curSlide);
  }
})

next.click(function () {
  console.log('click');
  // if (curSlide == curPage) {
  //   prevent = true
  //   $(this).html("<a href='session2.html'>Personas</a>")
  // } else if (curSlide == 2) {
  //   prevent = true
  // }
  if (position <= maxScroll) {
    if (prevent == "false" || !prevent) {
      position += 800
      content.css({
        "transform": "translateY(-" + position + "px)",
      })
    }
    if (curSlide < maxLength) {
      curSlide++;
      loadPage(curSlide)
    }
    console.log(curSlide);
  }
})

prev.click(function () {
  // if (curSlide == 1) {
  //   prevent = false
  // } else if (curSlide == 2) {
  //   prevent = true
  // }
  if (position > 0) {
    if (prevPrevent == "false" || !prevPrevent) {
      position -= 800
      content.css({
        "transform": "translateY(-" + position + "px)",
      })
    }
    curSlide--;
    loadPage(curSlide)
    console.log(curSlide);
  }
})