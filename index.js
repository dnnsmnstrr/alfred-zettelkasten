'use strict';
const alfy = require('alfy');

const {newNote, search, ...restOptions} = require('./src/options');

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

const createNote = newNote(getTitle(), tags, title || input)

const options = [
  search(title),
  createNote,
  ...Object.values(restOptions)
]

const items = alfy.matches(input, options, 'title');
if (!items || !items.length) {
  alfy.output([createNote]);
} else {
  alfy.output(items);
}
