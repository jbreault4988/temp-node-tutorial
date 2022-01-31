const {readFileSync, writeFileSync, write} = require('fs')//create read and write file object. requires 'fs' (filesync)
console.log('start'); //log when the file task begins.
const first = readFileSync('./content/first.txt', 'utf-8') //utf-8 decodes text files.
const second = readFileSync('./content/second.txt', 'utf-8')

//console.log(first, second) //outputs the contents of the text files in order.

writeFileSync(
    './content/result-sync.txt', //This code alone will overwrite file with same text each time.
    `Here is the result: ${first}, ${second}`,

    //append the file.
    {flag : 'a'}
)

//along with start, this is example of synchronous task; it goes in order.
console.log('done with this task');
console.log('starting the next task');