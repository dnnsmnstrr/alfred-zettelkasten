const {getIcon, getAppIcon} = require('./icons');

const web = {
  arg: 'web',
  title: 'Web',
  autocomplete: 'web',
  subtitle: 'Go to the deployed Zettelkasten',
  icon: getIcon('GenericNetworkIcon'),
  mods: {
    cmd: {
      arg: 'https://www.cerveau.app/-/dnnsmnstrr/zettelkasten',
      subtitle: 'Edit in Cerveau'
    },
    alt: {
      arg: 'https://github.com/dnnsmnstrr/zettelkasten',
      subtitle: 'Open in GitHub',
      icon: getAppIcon('GitHub Desktop'),
    }
  }
}


module.exports = web;
