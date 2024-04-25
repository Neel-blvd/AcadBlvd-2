const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    firstName: String,
    username: String,
    password: String,
    quizzestaken: {
        type: Number,
        default: 0
    },
    quizzeshistory: [{
        subject: String,
        takenOn: {
            type: Date,
            default: () => Date.now()
        },
        quizzescontent: [{
            question: String,
            answers: [String],
            correctanswer: String,
            attemptedanswer: String
        }]
    }]
});

module.exports = mongoose.model("Users", usersSchema);