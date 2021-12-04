const { getIcon } = require('./helper')

const newNote = (title, tags, input) => {
  const arg = `new/tags/${input}/${tags}`
  return {
    arg,
    title: 'New Zettel',
    autocomplete: 'new ',
    subtitle: `Create a new note ${title}${tags && tags.length ? ' with tags ' + tags : ''}`,
    icon: getIcon('ClippingUnknown'),
    mods: {
      cmd: {
        arg,
        valid: true,
        subtitle: `Create a new note ${title} with tags ${tags}`
      },
      alt: {
        valid: true,
        arg: `new/neuron/${input}`,
        subtitle: `Create a new note ${title} using neuron`
      }
    }
  }
}

module.exports = newNote
