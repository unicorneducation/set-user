  var content = $('.content');
  var position = 0;

  var numSlides = $('.slide').length - 1;
  var maxScroll = numSlides * 800;
  var curSlide = 0;

  var prev = $('#prev')
  var start = $('#start')
  var next = $('#next')
  var prevent = false;

  loadPage(curSlide)

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

      if (curSlide == 0) {
        $('.double-nav').hide();
        $('.single-nav').show();

      } else {
        $('.single-nav').hide();
        $('.double-nav').show();
      }


    })

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
    if (curSlide == 1) {
      prevent = true
      $(this).html("<a href='/#'>Personas</a>")
    } else if (curSlide == 2) {
      prevent = true
    }
    if (position <= maxScroll) {
      if (prevent == "false" || !prevent) {
        position += 800
        content.css({
          "transform": "translateY(-" + position + "px)",
        })
      }
      if (curSlide <= numSlides) {
        curSlide++;
        loadPage(curSlide)
      }
      console.log(curSlide);
    }
  })

  prev.click(function () {
    if (curSlide == 1) {
      prevent = false
    } else if (curSlide == 2) {
      prevent = true
    }
    if (position > 0) {
      if (prevent == "false" || !prevent) {
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