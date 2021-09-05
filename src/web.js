const {getIcon, getAppIcon} = require('./icons');
const {BASE_URL, DEPLOYMENT_PATH} = process.env; // environment variables

const PROJECT_PATH = '/' + DEPLOYMENT_PATH.split('/')[1]

const web = {
  arg: BASE_URL + PROJECT_PATH,
  title: 'Web',
  autocomplete: 'web',
  subtitle: 'Go to the deployed Zettelkasten',
  icon: getIcon('GenericNetworkIcon'),
  mods: {
    cmd: {
      arg: BASE_URL.replace('github', 'gitlab') + PROJECT_PATH,
      subtitle: 'Open dendron version'
    },
    ctrl: {
      arg: 'https://www.cerveau.app/-/' + DEPLOYMENT_PATH,
      subtitle: 'Edit in Cerveau'
    },
    alt: {
      arg: 'https://github.com/' + DEPLOYMENT_PATH,
      subtitle: 'Open in GitHub',
      icon: getAppIcon('GitHub Desktop'),
    }
  }
}


module.exports = web;
