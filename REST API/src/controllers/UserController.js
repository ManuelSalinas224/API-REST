const { User } = require('../db.js')
//const User = xd.User
const validMethods = ['id', 'email', 'name']

const uncaughtStatus = 500

const fetchUser = async (req) => {
    try{
        let user
        //const { method } = req
        const method = Object.keys(req)?.[0]

        if(!method) throw {status: 400, message: 'Please include a querying method'}
        if(!validMethods.includes(method)) throw {status: 405, message: `Invalid method. Available methods are: ${validMethods.join(', ')}.`}

        switch(method){
            case 'id':
                user = await User.findByPk(req.id)
            case 'email':
            case 'name':
                user = await User.findOne({
                    where: {
                        [method]: req[method]
                    }
                })
            // default:
            //     throw {status: 500, message: 'xd'}
        }
        //
        if(!user) throw {status: 404, message: 'User not found'}
        else return ({status: 200, message: user})
    } catch(error) {
        //res.status(error.status || uncaughtStatus).send(error.message)
        console.log(error)
        return ({ status: error?.status || uncaughtStatus, message: error?.message})
    }
}

const createUser = async (req) => {
    try {
        const {name, email, password} = req
        if(!name || !email || !password) throw {
            status: 400, 
            message: `Missing fields: ${[email?'':'email', password?'':'password', name?'':'name'].filter(e=>e).join(', ')}.`
        }

        const [user, created] = await User.findOrCreate({
            where: { name, email },
            defaults: {
                name, email, password
            }
        })

        if(!created) throw { status: 409, message: 'This user already exists' }
        else return { status: 201, message: user }
    } catch(error) {
        return ({ status: error.status || uncaughtStatus, message: error.message})
    }
}

// GET localhost:3000/user/
module.exports = {
    fetchUser, createUser
}