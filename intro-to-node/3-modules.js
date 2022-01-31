//Modules: Encapsulated Code (only share the minimum)
//CommonJS, every file is a module (by default)


const names = require('./4-names') //use 'dot + forward slash' whenever referencing one of your own defined modules; use require global as well.
const sayHi = require('./5-utils')
const data = require('./6-alternative-module-syntax')
require('./7-mind-grenade') //don't need to assign this to a variable even though nothing was explicitly exported in mindGrenade file.


sayHi('Susan')
sayHi(names.john) //use the reference variable when calling other variables from module files.
sayHi(names.peter)