const express = require('express');
const mongoose = require('mongoose');
const Users = require('./models/Users.models'); //Users is a model/table(in sql)/collection(in mongoDB)
const QPapers = require('./models/QPapers.models'); //QPapers is a model/table(in sql)/collection(in mongoDB)
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


// 1
//To get the password of the username entered, while trying to log in
app.get('/users/:username', async(req, res) => {
    const { username } = req.params;
    console.log(username);
    const requiredUser = await Users.findOne({username: username});
    
    if(requiredUser === null || (Array.isArray(requiredUser) && requiredUser.length() == 0))
        res.json(null)
    else
        res.json(requiredUser.password);
});

// 2
//To create a new user while trying to sign up
app.post('/users', async(req, res) => {
    //console.log(req.body)
    const newUser = await Users.create({firstName: req.body.firstName, username: req.body.username, password: req.body.password});
    
    res.json(newUser);
    
})

// 3
//To change the password
app.put('/users', async(req, res) => {
    //req contains the 1)username, whose password should be updated and the 2)updated password
    const user = await Users.findOne({username: req.body.username})
    user.password = req.body.password;
    await user.save();

    res.json(user);
})

// 4
//To delete a user
app.delete('/users', async(req, res) => {
    //req contains the username, who we wanna delete
    const deletedUser = await Users.findOneAndDelete({username: req.body.username})
    
    res.json(deletedUser);
})


// 1
//To upload a question paper(although not required in the front-end, just to store it in the collection)
app.post('/qpapers', async(req, res) => {
    const newQPaper = await QPapers.create({subject: 'em1', type: 'makeup', year: '2017', 
        link: "https://drive.google.com/file/d/1zZ9akjzC6rFDGgdyy2M9Z68jU544Phu9/preview"});

    res.json(newQPaper);
})


//my get method
app.put('/qpapers', async(req, res) => {
    let questionPapers;
    if(req.body.year == "" && req.body.type == "")
        questionPapers = await QPapers.find({subject: req.body.subject});
    else if(req.body.year != "" && req.body.type == "")
        questionPapers = await QPapers.find({subject: req.body.subject, year: req.body.year});
    else if(req.body.year == "" && req.body.type != "")
        questionPapers = await QPapers.find({subject: req.body.subject, type: req.body.type});
    else
        questionPapers = await QPapers.find({subject: req.body.subject, year: req.body.year, 
                                                                        type: req.body.type});



    const entities = [];
    questionPapers.forEach((questionPaper) => entities.push({
        year: questionPaper.year,
        type: questionPaper.type,
        link: questionPaper.link
    }))
   
    res.json(entities);
})



mongoose.connect('mongodb+srv://neelPhadke:w9Pt4CEp3jg3c97F@cluster0.puocqd9.mongodb.net/acadBlvdDB?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("Database Connected");
    app.listen(5000, () => console.log("Back-end Server Started"));
})
.catch(() => console.log("Database Connection Failed"))
