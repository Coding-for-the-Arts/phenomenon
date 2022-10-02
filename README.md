# Das Phänomen

Eine Aufgabe zum Üben von JS-Klassen.

- Schreibe ein Programm, das Phänomene zeichnet.
- Jedes Phänomen hat Attribute.
- Jedes Attribut hat Artefakte.
- Jedes Phänomen gleicht dem anderen, aber keines ist gleich.

Du kannst den Code in diesem Repo als Ausganspunkt nutzen, musst aber nicht.

## Vorgehen

- Bevor du zu coden beginnst, mache ein paar Handskizzen und bespreche sie mit Vera oder Josef.
- Benutze Linien, Kreise und Rechtecke
- Wenn du dich schon sicherer fühlst, kannst du auch mit Pfaden oder Text experimentieren.

## Tipp

Im Draw-Loop sollte möglichst wenig Code stehen:

```
draw() {
  background(200) // optional
  for (let phenomenon of phenomena) {
    phenomenon.show()
    phenomenon.move()
  }
}

Der Rest wird in den Klassen abgewickelt, z.B.:

class Phenomenon {
  constructor() {
    // bla
	}
  show() {
    for (let attribute of this.attributes) {
      attribute.show()
    }
  }
}
```