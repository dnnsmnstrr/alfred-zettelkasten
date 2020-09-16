const {getIcon} = require('./icons');

const search = (title) => {
  return {
    arg: 'search/' + (title ? title : ''),
    title: 'Search',
    autocomplete: 'search ',
    subtitle: 'Search the Zettelkasten' + (title ? ` for "${title}"` : ''),
    icon: getIcon('MagnifyingGlassIcon'),
    mods: {
      cmd: {
        valid: true,
        arg: 'search/web/' + title,
        subtitle: 'Search and open in web'
      },
      alt: {
        valid: true,
        arg: 'search/neuron',
        subtitle: 'Search using neuron'
      },
      control: {
        valid: true,
        arg: 'search/atom',
        subtitle: 'Search using atom'
      }
    }
  }
}

module.exports = search;
