const mongoose = require('mongoose');

const quizzesSchema = mongoose.Schema({
    subject: String,
    contents: [{
        question: String,
        answers: [String],
        correctAnswer: String
    }] 
})

module.exports = mongoose.model('Quizzes', quizzesSchema);