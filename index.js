const yargs = require('yargs');
const notes = require('./notes.js');
const fs = require('fs');
const echo = console.log;

const command = yargs.argv._[0];
const title = yargs.argv.title || yargs.argv._[1];
const body = yargs.argv.body;


switch (command) {
     case 'add':
          echo('adding the note...');
          if (body === undefined) {
               throw new Error('Illegal command!');
          }
          notes.add({
               title,
               body
          });
          break;
     case 'read':
          echo('reading the note...');
          notes.read(title);
          break;
     case 'list':
          echo('listing all notes...\n');
          notes.list();
          break;
     case 'remove':
          echo('removing the note...');
          notes.remove(title);
          break;
     default:
          echo('wrong command')
          break;
}