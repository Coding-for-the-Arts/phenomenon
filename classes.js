class Phenomenon {
  // for now the phenomenon is just a rectangle
  constructor(posX, posY, size) {
    this.pos = {x: posX, y: posY}
    this.size = size
    this.numAttributes = round(random(5)) // ?
    this.attributes = []
    for (let i = 0; i < this.numAttributes; i += 1) {
      let artefactSize = random(20)
      let x = random(this.size - artefactSize)
      let y = random(this.size - artefactSize)
      this.attributes.push(new Attribute(x, y, artefactSize))
    }
  }
  show() {
    rect(this.pos.x, this.pos.y, this.size)
    // show attributes
    push()
    translate(this.pos.x, this.pos.y)
    for (let attribute of this.attributes) {
      attribute.show()
    }
    pop()
  }
}

class Attribute {
  // for now the attribute is just a circle,
  // positioned within the phenomeon
  constructor(posX, posY, size) {
    this.pos = {x: posX, y: posY}
    this.size = size
    this.numArtefacts = round(random(3)) // ???
    this.artefacts = []
    for (let i = 0; i < this.numArtefacts; i += 1) {
      let startX = random(this.size)
      let startY = random(this.size)
      let endX = random(this.size)
      let endY = random(this.size)
      this.artefacts.push(new Artefact(startX, startY, endX, endY))
    }
  }
  show() {
    ellipseMode(CORNER)
    ellipse(this.pos.x, this.pos.y, this.size)
    // show artefacts
    push()
    translate(this.pos.x, this.pos.y)
    for (let artefact of this.artefacts) {
      artefact.show()
    }
    pop()
  }
}

class Artefact {
  // for now the attribute is just a line,
  // positioned within an attribute.
  constructor(startX, startY, endX, endY) {
    this.start = {x: startX, y: startY}
    this.end = {x: endX, y: endY}
  }
  show() {
    line(this.start.x, this.start.y, this.end.x, this.end.y)
  }
}