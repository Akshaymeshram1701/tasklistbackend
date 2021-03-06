const dbconfig = require ('../config/db.config')

const mongoose = require('mongoose')

const db = {}

db.mongoose = mongoose
db.url = dbconfig.url
db.users = require('./user.model')(mongoose)

module.exports = db