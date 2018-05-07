let picture
let quote
let slide
let helpArea

setup = function(){
    createCanvas(960, 600)
    noStroke()
    background(0)
    slide = 1
    picture = new Picture(250, 100, 200, 200)
    quote = new Content(160, 20, 'Hier steht ein geiles Zitat!', 400, 200, 40)
    helpArea = new HelpArea()
}

draw = function(){
    background(255)

    switch(slide){
        case 1:
            picture.render()
            helpArea.render()
            break;
        case 2:
            helpArea.render()
            break;
    }
}

class HelpArea{
    constructor() {
        this.position = createVector(700, 0)
        this.size = createVector(260, height)
        this.content = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    }

    render(){
        fill(255,193,9)
        rect(this.position.x, this.position.y, this.size.x, this.size.y)
        fill(20)
        textSize(16)
        text(this.content, this.position.x + 16, this.position.y + 32, 228)
    }
}

class Picture {
    constructor(x,y,w,h){
        this.position = createVector(x, y)
        this.size = createVector(w, h)
    }

    render(){
        var hover = this.onHover()
        
        if(hover){
            fill(20)
        } else {
            fill(60)
        }
        rect(this.position.x, this.position.y, this.size.x, this.size.y)
    }

    onHover(){
        if(mouseX > this.position.x && mouseX < this.position.x + this.size.x && mouseY > this.position.y && mouseY < this.position.y + this.size.y){
            return true
        } else {
            return false
        }
    }
}

class Content {
    constructor(x,y,content,w,h, fS){
        this.position = createVector(x,y)
        this.size = createVector(w,h)
        this.content = content
        this.fS = fS
    }

    render(){
        fill(20)
        textSize(this.fS)
        text(this.content, this.position.x, this.position.y, this.size.x, this.size.y)
    }
}