//IMPORTANT INFO: The two sync files deal with the basics of how sync and asynchronous tasks are handled; refer back to these if confused why sometimes code is executed 'out of order'
console.log('start'); //after readFile starts, this task is offloaded since it takes a while, allowing us to continue with the code (in this case, it skips to the bottom and logs the 'done with task')
readFile('./content/first.txt', 'utf8', (err, result) => { //make sure to include utf9; otherwise will print buffer instead of string value from file.
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first} ${second}`,
            {flag: 'a'}
        ,(err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('done with this task'); //this executes after the log below; the reading and writing takes a while so it is offloaded, meaning node jumps to the next executable line of code until this is done executing.
            //This is extremely important in servers; tasks need to be offloaded so that the server doesn't handle tasks one by one and can continue to respond to other users while still completing previous tasks.
        })
    })
})
console.log('starting next task'); //this executes after start.