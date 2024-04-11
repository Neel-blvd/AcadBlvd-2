const mongoose = require('mongoose');

const QPapersSchema = mongoose.Schema({
    subject: String,
    year: String,
    type: String,
    link: String
})

module.exports = mongoose.model("QPapers", QPapersSchema);

