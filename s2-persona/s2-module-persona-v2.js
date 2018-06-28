let screens = [
    'one', 'two', 'three', 'final'
]

let pictures = [
    'https://images.unsplash.com/photo-1515736123553-9c5276c4ef34?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a59b6b47ddd9a15ba1f7f2039e1bce10&auto=format&fit=crop&w=2134&q=80',
    'https://images.unsplash.com/photo-1502457678009-64e473687045?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f8f34541d60260a87a2f415228cf66a&auto=format&fit=crop&w=1778&q=80',
    'https://images.unsplash.com/photo-1503074789491-baec123afdf8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1405d2e073d03d41d30d96957d2869f0&auto=format&fit=crop&w=1424&q=80',
    'https://images.unsplash.com/photo-1509707539570-74090d8672c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=99aa1a6277439734b9a923963dcb3cf0&auto=format&fit=crop&w=1225&q=80',
    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a723711f2c79ac1dc3c8718d82850f30&auto=format&fit=crop&w=1331&q=80'
]

let currentScreen = 0
let currentPicture = 0

nextScreen = function(){
    if(screens[currentScreen+1] != null){
        currentScreen++
        document.getElementById(screens[currentScreen-1]).style.display = 'none'
        document.getElementById(screens[currentScreen]).style.display = 'grid'
        nameToFacts()
    }
    if(currentScreen == screens.length -1){
        setUpFinal()        
    }
}

prevScreen = function(){
    if(screens[currentScreen-1] != null){
        currentScreen--
        document.getElementById(screens[currentScreen+1]).style.display = 'none'
        document.getElementById(screens[currentScreen]).style.display = 'grid'
    }
    document.getElementById('nav_next').style.color = 'rgba(0, 0, 0, 1)'
    document.getElementById('nav_next').style.cursor = 'pointer'
}

switchPicture = function(p){
    if(pictures[currentPicture+p] == null){
        if(p == 1){
            currentPicture = 0
        } else {
            currentPicture = pictures.length - 1
        }        
    } else {
        currentPicture += p
    }
    document.getElementById('one').style.background = 'center url(' + pictures[currentPicture] + ')'
    document.getElementById('one').style.backgroundSize = 'cover'
}

setUpFinal = function(){
    document.getElementById('pic').style.background = document.getElementById('one').style.background
    document.getElementById('pic').style.backgroundSize = 'cover'
    document.getElementById('name').innerHTML = document.getElementById('input_name').value
    document.getElementById('bio').innerHTML = document.getElementById('input_activities').value
    document.getElementById('nav_next').style.color = 'rgba(0, 0, 0, 0.3)'
    document.getElementById('nav_next').style.cursor = 'default'
    document.getElementById('finish').style.color = 'rgba(0,0,0,1)'
    document.getElementById('finish').style.border = '1px solid rgba(0,0,0,1)'
}

nameToFacts = function(){
    document.getElementById('facts_name').innerHTML = document.getElementById('input_name').value
}

customPicture = function(){
    document.getElementById('one').style.background = 'center url(' + document.getElementById('customPicture').value + ')'
}