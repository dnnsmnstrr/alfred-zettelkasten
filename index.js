'use strict';
const alfy = require('alfy');
const atom = require('./src/atom');
const search = require('./src/search');
const web = require('./src/web');
const newNote = require('./src/newNote');

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

const options = [
  search(title),
  web,
  newNote(getTitle(), tags, title ? title : input),
  atom
]

const items = alfy.matches(input, options, 'title');

if (!items || items.length === 0) {
  alfy.output(newNote);
} else {
  alfy.output(items);
}
