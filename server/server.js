const express = require('express');
const mongoose = require('mongoose');
const Users = require('./models/Users.models'); //Users is a model/table(in sql)/collection(in mongoDB)
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


//Just to check if my server works
// app.get('/', (req, res) => {
//     res.json([{greeting: "Hello there"}, {greeting: "Whatever"}]);
// });

//To get the password of the username entered, while trying to log in
app.get('/users/:username', async(req, res) => {
    const { username } = req.params;
    const requiredUser = await Users.findOne({username: username});
    if(requiredUser === null || (Array.isArray(requiredUser) && requiredUser.length() == 0))
        res.json(null)
    else
        res.json(requiredUser.password);
});

//To create a new user while trying to sign up
app.post('/users', async(req, res) => {
    //console.log(req.body)
    const newUser = await Users.create({firstName: req.body.firstName, username: req.body.username, password: req.body.password});
    res.json(newUser);
    
})

// app.get('/test', (req, res) => {
   
//     res.json({response: "Good"});
// })



mongoose.connect('mongodb+srv://neelPhadke:w9Pt4CEp3jg3c97F@cluster0.puocqd9.mongodb.net/acadBlvdDB?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("Database Connected");
    app.listen(5000, () => console.log("Back-end Server Started"));
})
.catch(() => console.log("Database Connection Failed"))
