//local var
const secret = 'SUPER SECRET'

//these we will share with rest of application.
const john = 'John'
const peter = 'Peter'

console.log(module) //global: shows 'exports' object; we decide what we will export in this to other files.

//this syntax for more than one property/variable/function.
module.exports = {john, peter} //these will be our exports for other files.