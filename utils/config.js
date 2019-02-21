if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'test') {
    PORT = process.env.PORT
    MONGODB_URI = process.env.MONGODB_URI
}

module.exports = {
    MONGODB_URI,
    PORT
}