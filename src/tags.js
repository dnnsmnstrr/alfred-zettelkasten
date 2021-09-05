'use strict';
const alfy = require('alfy');

const tags = alfy.input && alfy.input.split(',')
const query = process.argv[2]; // query
const {title} = process.env; // environment variables


const tagString = tags.map((tag) => '- ' + tag.trim())
const addTags =
  {
    arg: tagString,
    title: title ? `Add Tags for Zettel "${title}"` : 'Add Tags',
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
