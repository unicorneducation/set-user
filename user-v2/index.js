var sidebarContent = $('.content');
var position = 0;

var numSlides = $('.slide').length - 1;
var maxScroll = numSlides * 800;
var curSlide = 0;
var curPage = 0;

var maxLength;

var prev = $('#prev')
var start = $('#start')
var next = $('#next')
var preventSlide = false;
var prevPreventSlide = false;
var preventInput = false;

if (getUrlParameter('p')) {
  var curSlide = getUrlParameter('p')
  slideUp(curSlide)
}
loadPage(curSlide)


function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function loadPage(num) {
  // gets teams from group.json 
  $.getJSON("content.json", function (data) {
    var content = data.slides[num].content
    var title = data.slides[num].title
    var subtitle = data.slides[num].subtitle
    preventSlide = data.slides[num].preventSlide
    preventInput = data.slides[num].preventInput || false
    curPage = data.slides[num].page
    maxLength = data.slides.length - 1
    if (curPage > 0) {
      prevPreventSlide = data.slides[num - 1].preventSlide
    }

    nextText = data.slides[num].next
    prevText = data.slides[num].prev



    $('article').fadeOut(function () {
      $('article').html("")
      for (var text of content) {

        if (text == "featureList") {
          // load features from localStorage
          var feats = loadStorage("feat")
          for (var item in feats) {
            $('article').append('<p class="indent">' + feats[item] + '</p>')
          }
        } else if (text.indexOf("<Name>") >= 0) {
          var person = loadStorage("persona")
          var reg = /<Name>/g;
          text = text.replace(reg, person.name)
          $('article').append('<p>' + text + '</p>')
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

    if (prevText == "") {
      $('.double-nav').hide();
      $('.single-nav').show();
      start.html(nextText);
    }

    if (preventInput) {
      $('input').prop('disabled', true);
    } else {
      $('input').prop('disabled', false);
    }

    next.html(nextText)
    prev.html(prevText)

  })

}

function loadStorage(type) {
  var local = localStorage;

  if (type == "feat") {
    var featureList = JSON.parse(local.getItem("feat"));
    return featureList;
  } else if (type == "persona") {
    var persona = JSON.parse(local.getItem("persona"));
    return persona;
  }

}

function slideUp(times) {
  for (var i = 0; i < times; i++) {
    position += 800
    sidebarContent.css({
      "transform": "translateY(-" + position + "px)",
    })
  }
}

function slideDown(times) {
  for (var i = 0; i < times; i++) {
    position -= 800
    sidebarContent.css({
      "transform": "translateY(-" + position + "px)",
    })
  }
}

start.click(function () {
  // console.log('click');
  if (position < maxScroll) {
    slideUp(1)
    // console.log(position);
    curSlide++;
    loadPage(curSlide)
    console.log(curSlide);
  }
})

next.click(function () {
  console.log('click');
  // if (curSlide == curPage) {
  //   preventSlide = true
  //   $(this).html("<a href='session2.html'>Personas</a>")
  // } else if (curSlide == 2) {
  //   preventSlide = true
  // }
  if (position <= maxScroll) {
    if (preventSlide == "false" || !preventSlide) {
      slideUp(1)
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
  //   preventSlide = false
  // } else if (curSlide == 2) {
  //   preventSlide = true
  // }
  if (position > 0) {
    if (prevPreventSlide == "false" || !prevPreventSlide) {
      slideDown(1)
    }
    curSlide--;
    loadPage(curSlide)
    console.log(curSlide);
  }
})