var next = $('#nextText')
var prev = $('#prevText')
var npcOutput = $('.npc')
var textNum = 0;
var maxText;
var notes = $('#notes')

var local = localStorage;

loadText(textNum)

if (local.getItem('notes')) {
  notes.val(local.getItem('notes'))
}

notes.on('keyup', function () {
  var val = notes.val();
  console.log(val);
  local.setItem('notes', val)
})

function loadText(num) {

  $.getJSON("interview.json", function (data) {
    var content = data.slides[num].content
    maxText = data.slides.length - 1;

    npcOutput.html(content)
  });

  if (textNum == maxText) {
    next.hide();
    textNum = maxText;
  } else {
    next.show();

  }

  if (textNum == 0) {
    prev.hide();
  } else {
    prev.show();

  }
}

next.click(function () {
  if (textNum < maxText) {
    textNum++;
    loadText(textNum);
  }
})

prev.click(function () {
  if (textNum >= 0) {
    textNum--;
    loadText(textNum);
  }
})