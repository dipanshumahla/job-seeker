const express = require('express');
const app = express();
const session = require('express-session'); 

require('./handlers/db');

const mainRoute = require('./routes');
const port = process.env.PORT || 3001;

//app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'somekey',// or any other secret key
    resave: true,
    saveUninitialized: true
}));

app.use('/', mainRoute);

app.listen(port,()=>{
    console.clear();
    console.log(`Server started at port: ${port}`);
});