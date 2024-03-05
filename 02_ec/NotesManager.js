class NotesManager {
    static quantity = 0
    static #notes = []
    create(data) {
        const note = {
            id: NotesManager.quantity === 0 ? 1 : NotesManager.#notes[NotesManager.quantity - 1].id + 1,
            type: data.type || "to do",
            text: data.text,
            date: data.date || new Date()
        }
        !data.text ? console.log("ingrese texto") : NotesManager.#notes.push(note) && NotesManager.quantity++;
    }
    read() {
        return NotesManager.#notes
    }
}

notes = new NotesManager()

notes.create({
    text: "Esto es una nota."
})

notes.create({
    text: "Esto es una segunda nota."
})

notes.create({
})

console.log(notes.read())