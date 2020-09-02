'use strict';
const alfy = require('alfy');

const [input, ...restInput] = alfy.input.split(' ')
const title = restInput[0]

const getTitle = () => {
  if (input === 'new' && !title) {
    return ''
  }
  const currentTitle = title || input
  return 'titled: ' + currentTitle
}

const newNote = [
  {
    "arg": `new/${title ? title : input}`,
    "title": "New Zettel",
    "subtitle": `Create a new note ${getTitle()}`,
    "icon": {
        "path": alfy.icon.get("ClippingUnknown")
    },
    "mods": {
      "cmd": {
        "valid": true,
        "arg": `new/neuron/${title ? title : input}`,
        "subtitle": `Create a new note ${getTitle()} with neuron`
      }
    }
  }
]
const options = [
  {
    "arg": "search",
    "title": "Search",
    "subtitle": "Search the Zettelkasten",
    "icon": {
        "path": alfy.icon.get("MagnifyingGlassIcon")
    },
    "mods": {
      "cmd": {
        "valid": true,
        "arg": "search/web",
        "subtitle": "Search and open in web"
      },
      "alt": {
        "valid": true,
        "arg": "search/neuron",
        "subtitle": "Search using neuron"
      },
      "control": {
        "valid": true,
        "arg": "search/atom",
        "subtitle": "Search using atom"
      }
    }
  },
  {
    "arg": "home",
    "title": "Home",
    "subtitle": "Go to the deployed Zettelkasten",
    "icon": {
        "path": alfy.icon.get("HomeFolderIcon")
    },
  },
  {
    "arg": "atom",
    "title": "Atom",
    "subtitle": "Open Zettelkasten in Atom",
    "icon": {
      "path": '/Applications/Atom.app/Contents/Resources/atom.icns'
    }
  },
  ...newNote
]

const devOptions =  [
	{
		arg: 'options',
		title: 'Options',
		subtitle: 'Edit the options of this workflow'
	}
];

const items = alfy.matches(input, [...options, ...(process.env.dev ? devOptions : [])], 'title');

if (!items || items.length === 0) {
  alfy.output(newNote);
} else {
  alfy.output(items);
}
