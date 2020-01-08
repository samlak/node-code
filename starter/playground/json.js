// var obj = {
//     name: "samlak"
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var person = '{"name": "samlak", "age": 20}';
// var personString = JSON.parse(person);
// console.log(typeof personString);
// console.log(personString);
 
var fs = require('fs');
var originalNote = {
    title: "The bitch",
    body: "The is the beautiful story of motherfucking bitch"
}
var originalNoteString = JSON.stringify(originalNote);
// fs.writeFileSync('note.json', originalNoteString);

// var addNote = (title, body) => {
//     var noteAdded = {
//         title: title,
//         body: body
//     }
//     var noteAddedString = JSON.stringify(noteAdded);
//     fs.appendFileSync('note.json', noteAddedString);
// }
// addNote("Billionaire", "This is the future billionaire");

var note = fs.readFileSync('note.json');
var noteObj = JSON.parse(note);
console.log(typeof noteObj);
console.log(noteObj.title);