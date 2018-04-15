let notes = [];
const _ = require('lodash');
const fs = require('fs');

const readNotes = () => {
     try {
          notes = JSON.parse(fs.readFileSync('./notes.json', {
               encoding: 'utf-8'
          }));
     } catch (error) {
          return;
     }
     notes = JSON.parse(fs.readFileSync('./notes.json', {
          encoding: 'utf-8'
     }));
}

const writeNotes = () => {
     fs.writeFileSync('./notes.json', JSON.stringify(notes, undefined, 4), {
          encoding: 'utf-8'
     });
}

module.exports = {
     add(note) {
          readNotes();
          if (_.find(notes, { title: note.title })) {
               //throw new Error => yeh thooda darauna lagta hai/I mean that error thrown in the terminal scares me
               console.log('ERROR: A note wih same title already exists');
               return;
          }
          notes.push(note);
          writeNotes();
     },
     read(note) {
          readNotes();
          let requiredNote = _.find(notes, {
               title: note
          });
          console.log(`Title: "${requiredNote.title}"\nBody: "${requiredNote.body}"`);
     },
     list() {
          readNotes();
          notes.forEach((note, index) => {
               console.log(`NOTE ${index + 1}\n`);
               console.log(`Title: "${note.title}"\nBody: ${note.body}\n\n`)
          });
     },
     remove(note) {
          readNotes();
          if (_.find(notes, { title : note })) {   
               notes.splice(_.findIndex(notes, { title: note }), 1);
               console.log(notes)
          } else {
               console.log('ERROR!: no such note exists');
          }
          writeNotes();
     }
}