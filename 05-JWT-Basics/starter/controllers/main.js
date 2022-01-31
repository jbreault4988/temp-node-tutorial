const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const login = async(req, res) => {
    const {username, password} = req.body;
    
    //mongoose validation
    //Joi
    //check in the controller
    if(!username || !password) {
        throw new CustomAPIError('Please provide email and password', 400);
    }
    
    const id = new Date().getDate(); //ONLY USE THIS FOR PROJECT; YOU NEED A REAL ID FOR A JWT TOKEN PROVIDED BY A DATABASE

    //best practice is to keep the payload small; leads to a better user experience.
    //also, the jwt secret is kept simple for this project; in real production you would use a long, complex and unguessable string value.
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'30d'})//provide a payload, jwt secret, and options (things like how long until JWT will expire, in this case we set it to 30 days.)

    res.status(200).json({msg:'user created', token})

    console.log(username, password);
    res.send('Fake Login/Register/Signup Route');
}
const dashboard = async(req, res) => {
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello, John Doe`, secret:`Here is your authorized data, your lucky number is ${luckyNumber}`});
}

module.exports = {
    login, dashboard
}