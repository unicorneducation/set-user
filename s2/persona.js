var local = localStorage;
var persona = {}

var imgChosen
var genderChosen

let activeGender = null

// Change Pictures
for (let i = 0; i < 13; i++) {
  let container = document.getElementById('persona_bilder').getElementsByTagName('li')[i]
  container.style.background = 'url("../s2/src/p' + (i + 1) + '.jpg")'
  container.style.backgroundSize = 'cover'
  container.setAttribute('data-num', i)
  container.addEventListener("click", function () {
    changePicture(container);
    imgChosen = container.getAttribute('data-num')
  })
}


if (JSON.parse(local.getItem('persona')) != null) {
  persona = JSON.parse(local.getItem('persona'))
  setPicture(persona.img)
  setGender(persona.gender)
  genderChosen = persona.gender;
  imgChosen = persona.img
  document.getElementById('age').value = persona.age
  document.getElementById('name').value = persona.name
  document.getElementById('persona_text').value = persona.text
}

function setPicture(num) {
  var li = $("#persona_bilder").find(`li[data-num='${num}']`)
  document.getElementById('main_picture').style.background = li[0].style.background
  document.getElementById('bio_picture').style.background = li[0].style.background
  document.getElementById('bio_2_picture').style.background = li[0].style.background
}

function setGender(name) {
  console.log(name);

  if (name != "male" && name != "female") {
    var other = document.getElementById('inputOther')
    other.value = name
    other.parentElement.style.fontWeight = 800
    activeGender = other.parentElement
  } else {
    var gender = document.getElementById(name)
    console.log("gender");

    gender.style.fontWeight = 800
    activeGender = gender
  }
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
    if (item.id === "other") {
      // item.addEventListener("change", function () {
      genderChosen = document.getElementById('inputOther').value
      console.log(genderChosen);
      // })
      // genderChosen = document.getElementById('inputOther').value

    } else {
      genderChosen = item.id
    }
    console.log(genderChosen)
  })
}


function changeGender(from) {
  if (activeGender != null) {
    activeGender.style.fontWeight = 300
  }
  from.style.fontWeight = 800
  activeGender = from
}


function checkBio() {
  console.log(imgChosen, genderChosen);
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
      "img": ""
    };
  }
  persona.age = document.getElementById('age').value
  persona.gender = genderChosen
  persona.name = document.getElementById('bio_name').innerText
  persona.text = document.getElementById('bio_text').innerText
  persona.img = imgChosen

  console.log(imgChosen, genderChosen);


  // load in localStorage

  local.setItem("persona", JSON.stringify(persona))
}