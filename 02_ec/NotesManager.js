class NotesManager {
    static #notes = [];
    create(data) {
      try {
        const note = {
          id:
          NotesManager.#notes.length === 0
              ? 1
              : NotesManager.#notes[NotesManager.#notes.length - 1].id + 1,
          type: data.type || "to do",
          text: data.text,
          date: data.date || new Date(),
        };
        if (!data.text) {
          throw new Error("INGRESE TEXTO EN LA NOTA");
        } else {
          NotesManager.#notes.push(note);
          console.log("nota creada");
        }
      } catch (error) {
        console.log(error);
      }
    }
    read() {
      try{
          if (NotesManager.#notes.length===0){
              throw new Error("No hay notas");
          }
          else{    
              return NotesManager.#notes;
          }
      }
          catch(error)
          {
              console.log(error)
          }
    }
    readOne(id) {
      try{
          const notaEncontrada = NotesManager.#notes.find(nota => nota.id == id)
          if(!notaEncontrada){
              throw new Error("La nota no existe.")
          } else {
          console.log("Nota encontrada:")
          return notaEncontrada
          }
      }
    
    catch(error){
      console.log(error)
    }
  }
  destroy(id) {
      try {
          const notaEncontrada = this.readOne(id)
          if (!notaEncontrada){
              throw new Error("No se pudo eliminar la nota.")
          } else {
              const notasNuevas = NotesManager.#notes.filter(nota => nota.id != id)
              NotesManager.#notes = notasNuevas
              console.log(`Nota ${id} eliminada`)
              console.log(notasNuevas);
          }
      } 
      catch(error) {
      console.log(error);
      }
  }
  }
  
  
  notes = new NotesManager();
  
  
  notes.create({ type: "done" });
  notes.create({ text: "texto de nota 1" });
  notes.create({ text: "texto de nota 2" });
  notes.create({ text: "texto de nota 3" });
  notes.create({ text: "texto de nota 4" });
  notes.create({ text: "texto de nota 5" });
  notes.create({ text: "texto de nota 6" });
  console.log(notes.readOne(10));
  console.log(notes.readOne(2));
  notes.destroy(3)
  notes.destroy(20)
  // fin de código