var local = localStorage;
var persona = {}

var imgChosen

// Change Pictures
for (let i = 0; i < 13; i++) {
  let container = document.getElementById('persona_bilder').getElementsByTagName('li')[i]
  container.style.background = 'url("src/p' + (i + 1) + '.jpg")'
  container.style.backgroundSize = 'cover'
  container.setAttribute('data-num', i)
  container.addEventListener("click", function () {
    changePicture(container);
    imgChosen = container.getAttribute('data-num')
  })
}

function changePicture(from) {
  document.getElementById('main_picture').style.background = from.style.background
  document.getElementById('bio_picture').style.background = from.style.background
  document.getElementById('bio_2_picture').style.background = from.style.background
}

// Change Gender
for (let i = 0; i < 3; i++) {
  let item = document.getElementById('genders').getElementsByTagName('item')[i]
  item.addEventListener("click", function () {
    changeGender(item)
  })
}

let activeGender = null

function changeGender(from) {
  if (activeGender != null) {
    activeGender.style.fontWeight = 300
  }
  from.style.fontWeight = 800
  activeGender = from
  console.log(from)
}


function checkBio() {
  document.getElementById('bio_age').innerText = document.getElementById('age').value + ' Jahre'
  if (activeGender.innerText.length != 0) {
    document.getElementById('bio_gender').innerText = activeGender.innerText

  } else {
    document.getElementById('bio_gender').innerHTML = activeGender.firstElementChild.value
  }
  document.getElementById('bio_name').innerText = document.getElementById('name').value
  document.getElementById('bio_text').innerText = document.getElementById('persona_text').value

  // store in persona Object

  if (JSON.parse(local.getItem('persona')) != null) {
    persona = JSON.parse(local.getItem('persona'))
  } else {
    persona = {
      "name": "",
      "age": 0,
      "gender": "",
      "text": "",
      "img": 0
    };
  }
  persona.age = document.getElementById('age').value
  persona.gender = document.getElementById('bio_gender').innerText
  persona.name = document.getElementById('bio_name').innerText
  persona.text = document.getElementById('bio_text').innerText
  persona.img = imgChosen

  // load in localStorage

  local.setItem("persona", JSON.stringify(persona))
}