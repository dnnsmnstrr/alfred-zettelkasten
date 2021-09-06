const {getAppIcon, getIcon} = require('./icons');
const {BASE_URL, DEPLOYMENT_PATH} = process.env; // environment variables
const PROJECT_PATH = '/' + DEPLOYMENT_PATH.split('/')[1]

const search = require('./search');
const newNote = require('./newNote');

const makeMods = (options = []) => {
  if (!Array.isArray(options)) {
    // default to command for single option
    options = [options]
  }
  const modOrder = ['cmd', 'alt', 'ctrl', 'fn', 'shift']
  const mods = {}
  options.forEach((option, i) => {
    mods[modOrder[i]] = option
  });
  return mods
}

const makeOption = ({ name, subtitle, autocomplete, icon, iconPath, mods }) => ({
  arg: name.toLowerCase(),
  title: name,
  subtitle: subtitle || 'Open Zettelkasten in ' + name,
  autocomplete: autocomplete || name.toLowerCase(),
  icon: icon || getAppIcon(name, iconPath),
  mods: makeMods(mods)
})

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
