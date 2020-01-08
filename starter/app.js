const fs = require('fs');  
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOption = {
    describe: "Title of the note",
    demand: true,
    alias: 't'
}

const bodyOption = {
    describe: "Body of the note",
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Adding a new note', {
        title: titleOption,
        body: bodyOption
    })
    .command('list', 'Fetching all notes')
    .command('read', 'Fetching note', {
        title: titleOption
    })
    .command('remove', 'Removing note', {
        title: titleOption
    })
    .help()
    .argv;
var command = argv._[0];



if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log(`Adding note`);
         notes.logNote(note);
    }else{
        console.log("Note with the same title already exist");
    }
} else if(command === 'read'){
    var note = notes.getNote(argv.title);
    
    if(note){
        console.log(`Fetching note`);
        notes.logNote(note);
    }else{
        console.log("No note with that title");
    }
} else if(command === 'remove'){
    var note = notes.removeNote(argv.title);

    if(note){
        console.log(`Note with title: ${argv.title} removed successfully`);
    }else{
        console.log("No note with that title");
    }
} else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Fetching ${allNotes.length} note(s)`);
    allNotes.forEach((note) => {
        notes.logNote(note);
    });
} else{
    console.log('Command not recognised');
}