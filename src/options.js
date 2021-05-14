const {getAppIcon, getIcon} = require('./icons');
const { BASE_URL } = process.env

const search = require('./search');
const newNote = require('./newNote');

const makeOption = ({ name, subtitle, autocomplete, icon, iconPath, mods }) => {
  return {
    arg: name.toLowerCase(),
    title: name,
    subtitle: subtitle || 'Open Zettelkasten in ' + name,
    autocomplete: autocomplete || name.toLowerCase(),
    icon: icon || getAppIcon(name, iconPath),
    mods
  }
}

const options = [
  {
    name: 'Finder',
    iconPath: '/System/Library/CoreServices/Finder.app'
  },
  {
    name: 'Atom',
    mods: {
      cmd: {
        arg: 'search/atom',
        subtitle: 'Toggle search in Atom'
      }
    }
  },
  {
    name: 'Web',
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
        icon: getAppIcon('GitHub Desktop')
      }
    }
  }
].map(makeOption)

module.exports = {
  newNote,
  search,
  ...options
};
