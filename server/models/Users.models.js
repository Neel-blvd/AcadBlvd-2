const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    firstName: String,
    username: String,
    password: String
});

module.exports = mongoose.model("Users", usersSchema);