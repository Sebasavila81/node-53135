const fs = require("fs");
const crypto = require("crypto");
const { throws } = require("assert");

class NotesManager {
  constructor() {
    this.path = "./fs/files/notes.json";
    this.init();
  }
  init() {
    const exists = fs.existsSync(this.path);
    if (!exists) {
      const stringData = JSON.stringify([], null, 2);
      fs.writeFileSync(this.path, stringData);
      console.log("archivo creado");
    } else {
      console.log("archivo ya existe!");
    }
  }
  async create(data) {
    try {
        if(!data.text) {
           const error = new error("ingrese un texto")
           throw error 
        }
        else {
            const note = {
                id: crypto.randomBytes(12).toString("hex"),
                text: data.text,
                date: data.date || new Date()
            }
            
        }
        
    } catch (error) {
        throw error
    }
  }
}

const notes = new NotesManager();
