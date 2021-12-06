'use strict'
const alfy = require('alfy')

const tags = alfy.input.split(',')
const { title } = process.env // environment variables

const tagString = `
tags:
` + tags.map((tag) => '- ' + tag.trim()).join('\n')

const hasEnteredTag = tags && tags.length && tags[0] !== ''

const addTags = {
  arg: hasEnteredTag ? tagString : '',
  title: title ? `Add Tags for Zettel "${title}"` : 'Add Tags',
  subtitle: hasEnteredTag ? 'Add the listed tags' : 'Enter comma separated tags',
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
})])
