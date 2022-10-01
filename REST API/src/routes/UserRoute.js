const { Router } = require('express');
const { fetchUser, createUser } = require ('../controllers/UserController.js' )

const router = Router()

router.get('/', async (req, res) => {

/* #swagger.parameters['method'] = {
    in: 'body',
    description: 'Tipo de busqueda',
    '@schema': {
        "required": ["name", "email", "id"],
        "properties": {
            "name": {
                "type": "string",
                "example": "nacho" 
            },
            "email": {
                "type": "string",
                "example": "xd@xd.com" 
            },
            "id": {
                "type": "UUID",
                "example": "123e4567-e89b-12d3-a456-426614174000" 
            },
        }
    }
} */

/* #swagger.responses[200] = {
        description: 'Returns user data',
        schema: {
            $ref: '#/definitions/User'
        }
} */
/* #swagger.responses[404] = {
        description: 'User doesnt exist',
        schema: {
            $message: 'User not found'
        }
} */
    const {status, message} = await fetchUser(req.body)
    return res.status(status).send(message)
})

router.post('/', async (req, res) => {
    const {status, message} = await createUser(req.body)
    return res.status(status).send(message)
})

module.exports = router