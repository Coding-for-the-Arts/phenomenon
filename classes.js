class Phenomenon {
  // Im Moment ist ein Phänomen ein Rechteck
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
    // Attribute zeichnen
    push()
    translate(this.pos.x, this.pos.y)
    for (let attribute of this.attributes) {
      attribute.show()
    }
    pop()
  }
}

class Attribute {
  // Im Moment ist ein Attribut ein Kreis,
  // positioniert innerhalb des Phänomens.
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
    // Artefakte zeichnen
    push()
    translate(this.pos.x, this.pos.y)
    for (let artefact of this.artefacts) {
      artefact.show()
    }
    pop()
  }
}

class Artefact {
  // Im Moment ist ein Artefakt eine Linie
  // positioniert in einem Artefakt.
  constructor(startX, startY, endX, endY) {
    this.start = {x: startX, y: startY}
    this.end = {x: endX, y: endY}
  }
  show() {
    line(this.start.x, this.start.y, this.end.x, this.end.y)
  }
}