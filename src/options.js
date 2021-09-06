const {getAppIcon, getIcon, makeOption} = require('./helper');

const {BASE_URL, DEPLOYMENT_PATH} = process.env;
const PROJECT_PATH = '/' + DEPLOYMENT_PATH.split('/')[1]

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
    }
  },
  {
    name: 'Web',
    subtitle: 'Go to the deployed Zettelkasten',
    icon: getIcon('GenericNetworkIcon'),
    mods: [
      {
        arg: BASE_URL.replace('github', 'gitlab') + PROJECT_PATH,
        subtitle: 'Open dendron version'
      },
      {
        arg: 'https://github.com/' + DEPLOYMENT_PATH,
        subtitle: 'Open in GitHub',
        icon: getAppIcon('GitHub Desktop')
      },
      {
        arg: 'https://www.cerveau.app/-/' + DEPLOYMENT_PATH,
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
