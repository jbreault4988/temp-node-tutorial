const os = require('os') //built in module; no "./" needed

//info about current user
const user = os.userInfo()
console.log(user)



//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

//method returns info about os using various functions.
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)