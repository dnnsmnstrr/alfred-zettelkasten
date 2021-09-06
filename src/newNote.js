const {getIcon} = require('./helper');

const newNote = (title, tags, input) => {
  return {
    arg: `new/${input}`,
    title: 'New Zettel',
    autocomplete: 'new ',
    subtitle: `Create a new note ${title}`,
    icon: getIcon('ClippingUnknown'),
    mods: {
      ...(!!tags && {cmd: {
        valid: true,
        arg: `new/tags/${input}/${tags}`,
        subtitle: `Create a new note ${title} with tags ${tags}`
      }})
      ,
      alt: {
        valid: true,
        arg: `new/neuron/${input}`,
        subtitle: `Create a new note ${title} using neuron`
      }
    }
  }
}


module.exports = newNote;
