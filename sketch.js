let phenomena = []

function setup() {
  createCanvas(400, 400)
  noFill()

  // Phänomene generieren, in Raster positioniert.
  for (let i = 0; i < 400; i += 100) {
    for (let j = 0; j < 400; j += 100) {
      phenomena.push(new Phenomenon(i, j, 100))
    }
  }
  // Sollen die Phänomene in einem Raster stehen?
  // Bewegen sich die Phänomene?
}

function draw() {
  background(220)
  for (let phenomenon of phenomena) {
    phenomenon.show()
  }
}