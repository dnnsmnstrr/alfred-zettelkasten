const {getAppIcon, getIcon, makeOption} = require('./helper');

const {BASE_URL, PROJECT_PATH} = process.env;
const PROJECT_NAME = '/' + PROJECT_PATH.split('/')[1]
const getUrl = (type) => {
  switch (type) {
    case 'cerveau':
      return 'https://www.cerveau.app/-/' + PROJECT_PATH
    case 'dendron':
      return BASE_URL.replace('github', 'gitlab') + PROJECT_NAME
    case 'github':
      return 'https://github.com/' + PROJECT_PATH
    default:
      return BASE_URL + PROJECT_NAME
  }
}
const search = require('./search');
const newNote = require('./newNote');

const options = [
  {
    name: 'Finder',
    iconPath: '/System/Library/CoreServices/Finder.app'
  },
  {
    name: 'Atom',
    mods: {
      arg: 'search/atom',
      subtitle: 'Toggle search in Atom'
    },
    mods: {
      arg: 'search/atom',
      subtitle: 'Toggle search in Atom'
    }
  },
  {
    name: 'Dendron',
    icon: getIcon('ErasingIcon'),
    mods: {
      arg: getUrl('dendron'),
      subtitle: 'Open in Gitlab Pages'
    }
  },
  {
    name: 'Web',
    arg: getUrl(),
    subtitle: 'Go to the deployed Zettelkasten',
    icon: getIcon('GenericNetworkIcon'),
    mods: [
      {
        arg: getUrl('dendron'),
        subtitle: 'Open dendron version'
      },
      {
        arg: getUrl('github'),
        subtitle: 'Open in GitHub',
        icon: getAppIcon('GitHub Desktop')
      },
      {
        arg: getUrl('cerveau'),
        subtitle: 'Edit in Cerveau'
      },
    ]
  }
].map(makeOption)

module.exports = {
  newNote,
  search,
  ...options
};
