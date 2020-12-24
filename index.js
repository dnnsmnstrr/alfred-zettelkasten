'use strict';
const alfy = require('alfy');

const {atom, newNote, search, web} = require('./src/options');

const [input, ...restInput] = alfy.input.split(' ')
const newCommand = ['new', 'n', 'ne', '', ' '].includes(input)

const title = restInput[0]
const tags = restInput.slice(newCommand ? 1 : 0)

const getTitle = () => {
  if (newCommand && !title) {
    return ''
  }
  const currentTitle = newCommand && title ? title : input
  return 'titled: "' + currentTitle + '"'
}

const newNoteInput = newNote(getTitle(), tags, title ? title : input)
const options = [
  search(title),
  web,
  newNoteInput,
  atom
]

const items = alfy.matches(input, options, 'title');

if (!items || items.length === 0) {
  alfy.output([newNoteInput]);
} else {
  alfy.output(items);
}
