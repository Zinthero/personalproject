const bcrypt = require ('bcryptjs')

module.exports = {
    login: async (req, res) => {
        try{
            const db = req.app.get('db')
            const {email, password} = req.body
        
            let userResponse = await db.getUserByEmail(email)
            let user = userResponse[0]

            console.log(user)
            if (!user) {
                return res.status(403).send('incorrect password')
            }

            delete user.password
            req.session.user = user
            res.send(req.session.user)
        
        }
        catch(error) {
            console.log('error logging in:', error)
            res.status(500).send(error)
        }
    },
    register: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {email, password} = req.body
            let userResponse = await db.getUserByEmail(email)
            console.log(userResponse)

            if (userResponse[0]){
                return res.status(409).send('email already taken')
            }

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            let response = await db.createUser({email, hash})
            let newUser = response[0]
            console.log(newUser)

            delete newUser.password
            req.session.user = newUser
            res.send(newUser)
        } catch(error){
            console.log('error registering user:', error)
            res.status(500).send(error)
        }
    },
    logout:(req, res) =>{
        req.session.destroy()
        res.sendStatus(200)
    },

    checkLogin: (req, res) => {
        if(req.session.loggedIn) {
            res.send(true)
        }
        else {
            res.send(false)
        }
    },

    getCurrentUser:(req, res)=>{
        res.send(req.session.user)
    }
}