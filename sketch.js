let phenomena = []

function setup() {
  createCanvas(400, 400)
  noFill()

  // generate phenomena, positioned in a grid
  for (let i = 0; i < 400; i += 100) {
    for (let j = 0; j < 400; j += 100) {
      phenomena.push(new Phenomenon(i, j, 100))
    }
  }
  // but should they be in a grid?
  // can they move?
}

function draw() {
  background(220)
  for (let phenomenon of phenomena) {
    phenomenon.show()
  }
}