const alfy = require('alfy')

// input
const env = process.env
const splitInput = (splitter = ' ', input = alfy.input) => {
  return input.split(splitter)
}

// options
const makeMods = (options = []) => {
  if (!Array.isArray(options)) {
    // default to command for single option
    options = [options]
  }
  const modOrder = ['cmd', 'alt', 'ctrl', 'fn', 'shift']
  const mods = {}
  options.forEach((option, i) => {
    mods[modOrder[i]] = option
  })
  return mods
}

const makeOption = ({ name, arg, subtitle, autocomplete, icon, iconPath, mods }) => ({
  arg: arg || name.toLowerCase(),
  title: name,
  subtitle: subtitle || 'Open Zettelkasten in ' + name,
  autocomplete: autocomplete || name.toLowerCase(),
  icon: icon || getAppIcon(name, iconPath),
  mods: makeMods(mods)
})

// icons
const getAppIcon = (appName = 'Alfred 4', path) => {
	return {
		type: 'fileicon',
		path: path || `/Applications/${appName}.app`
	}
}

const getIcon = (icon = 'AlertCautionIcon') => {
	return {
		path: alfy.icon.get(icon)
	}
}

const getAsset = assetName => {
	return {
		path: `./assets/${assetName}.png`
	}
}


// utility
function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1)
}

function isValidUrl(string) {
	try {
		new URL(string)
	} catch (_) {
		return false
	}

	return true
}

module.exports = {
	getIcon,
	getAppIcon,
	getAsset,
  makeOption,
	capitalize,
	splitInput,
	isValidUrl,
  env
}

/*
IMPORT:
const {splitInput} = require('./helper')

USAGE:
const [command, ...restInput] = splitInput()
const [input, query, ...restInput] = splitInput(':') // Custom splitter
*/
