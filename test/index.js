const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const port = 3000;
const config = 'mongodb+srv://karan:karan1621@cluster0.lx59p.mongodb.net/test?retryWrites=true&w=majority'
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);


mongoose.connect(config, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        app.listen(port, () => {
            console.log("Server is Running");
        })
    }
).catch(error => {
    console.log(error);
});
