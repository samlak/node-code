const fs = require('fs');

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('note-data.json');
        return JSON.parse(noteString);

    } catch (e) {
        return [];
    }
}

var saveNote = (notes) => {
    fs.writeFileSync('note-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    
    var duplicateNote = notes.filter((note) => note.title === title);
    if(duplicateNote.length === 0){
        notes.push(note);
        saveNote(notes);
        return note;
    }
    
}

var getAll = () => {
    var notes = fetchNotes();
    return notes;
}
var getNote = (title) => {
    var notes = fetchNotes();
    let note = notes.filter((note) => note.title === title);
    return note[0];
    
}
var removeNote = (title) => {
    var notes = fetchNotes();
    let filteredNote = notes.filter((note) => note.title !== title);
    saveNote(filteredNote);
    return filteredNote.length !== notes.length;
}

var logNote = (note) => {
    console.log(`---`);
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote, 
    getAll, 
    getNote, 
    removeNote,
    logNote
}