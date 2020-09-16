const alfy = require('alfy');

const getAppIcon = (appName = 'Alfred') => {
  return {
      type: 'fileicon',
      path: `/Applications/${appName}.app`
  }
}

const getIcon = (icon = 'AlertCautionIcon') => {
  return {
      path: alfy.icon.get(icon)
  }
}

const atom = getAppIcon('Atom')

module.exports = {
  getIcon,
  getAppIcon,
  atom
};
