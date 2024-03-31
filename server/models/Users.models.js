const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.model("Users", usersSchema);