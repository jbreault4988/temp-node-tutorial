const path = require('path') //path module.
const { consumers } = require('stream')

console.log(path.sep) //returns the path seperator.


//create a var that shows the filePath to a particular file.
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//returns the base file in a path.
const baseName = path.basename(filePath)
console.log(baseName)


//provides the full, absolute path to a file.
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)