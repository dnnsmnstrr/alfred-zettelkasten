'use strict';
const alfy = require('alfy');

const tags = alfy.input.split(',')

const tagString = tags.map((tag) => '- ' + tag.trim())
const addTags =
  {
    arg: tagString,
    title: 'Add Tags',
    subtitle: (!tags || tags.length === 0) ? 'Enter comma separated tags' : 'Add the listed tags',
    icon: {
        path: alfy.icon.get('AlertNoteIcon')
    }
  }

alfy.output([addTags, ...tags.map((tag) => {
  return {
    title: tag.trim(),
    arg: tagString,
    valid: false
  }
})]);
