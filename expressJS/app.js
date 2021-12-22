const exp = require('constants');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');



const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));

// using our custom middleware that logs request url and request method
app.use((req,res,next) => { 
    console.log("Custom Middleware MSG URL : ", req.url);
    console.log("Custom Middleware MSG METHOD : ", req.method);
    next();
})


app.get("/", (req, res) => {
    // res.send("Hello World from Express JS !!");
    res.sendFile(path.join(__dirname,'static','index.html'))
});

// reading form post data 
app.post('/', (req, res) => { 
    console.log("Submitted for data is ", req.body);
    // validating user data with Joi 
    const schema = Joi.object().keys({
        Uname: Joi.string().trim().email().required(),
        Pass: Joi.string().trim().min(5).max(7).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) { 
        res.json(error);
        console.log("Error in validation ", error);
    }
    else
        res.json(req.body);
})

app.get("/example/:name/:age", (req, res) => {
    res.send(`Hello World from Express JS to ${req.params.name} having age ${req.params.age}`);
    res.send(` Query String ${req.query}`);
});

app.get("/query", (req, res) => {
    res.send(` Query String ${JSON.stringify(req.query)}`);
});

app.listen(3000);