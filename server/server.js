const express = require('express');
const mongoose = require('mongoose');
const Users = require('./models/Users.models'); //Users is a model/table(in sql)/collection(in mongoDB)
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json([{greeting: "Hello there"}, {greeting: "Whatever"}]);
});
app.post('/', async(req, res) => {
    const newUser = await Users.create({username: "neel", password: "neel"});
    res.json(newUser);
})
app.get('/all', async(req, res) => {
    const allUsers = await Users.find();
    res.json(allUsers);
});





mongoose.connect('mongodb+srv://neelPhadke:w9Pt4CEp3jg3c97F@cluster0.puocqd9.mongodb.net/acadBlvdDB?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("Database Connected");
    app.listen(5000, () => console.log("Back-end Server Started"));
})
.catch(() => console.log("Database Connection Failed"))
