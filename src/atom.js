const {getAppIcon, getIcon, capitalize} = require('./helper');

const OPTION_NAME = 'atom'

module.exports = {
  arg: OPTION_NAME,
  title: capitalize(OPTION_NAME),
  autocomplete: OPTION_NAME,
  subtitle: 'Open Zettelkasten in ' + capitalize(OPTION_NAME),
  mods: {
    cmd: {
      arg: 'search/atom',
      subtitle: 'Toggle search in Atom',
      icon: getIcon('MagnifyingGlassIcon'),
    }
  },
  icon: getAppIcon(capitalize(OPTION_NAME))
};
