const {atom: atomIcon} = require('./icons');

module.exports = {
  arg: 'atom',
  title: 'Atom',
  autocomplete: 'atom',
  subtitle: 'Open Zettelkasten in Atom',
  icon: atomIcon,
  mods: {
    cmd: {
      valid: true,
      arg: 'search/atom',
      subtitle: 'Toggle search in Atom'
    }
  }
};
