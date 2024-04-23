const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    firstName: String,
    username: String,
    password: String,
    quizzestaken: Number,
    quizzeshistory: [{
        subject: String,
        quizzescontent: [{
            question: String,
            answers: [String],
            attemptedanswer: String,
            correctanswer: String
        }]
    }]
});

module.exports = mongoose.model("Users", usersSchema);