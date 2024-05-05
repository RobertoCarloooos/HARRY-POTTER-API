const jwt = require("jsonwebtoken")

const generateToken = (data) => {
    return jwt.sign(data, process.env.SECRET_KEY, { expiresIn: '3h' })
}
const verifyToken = (token) => {
    console.log(token)
    return jwt.verify(token, "Robe1994")

}

module.exports = { generateToken, verifyToken }