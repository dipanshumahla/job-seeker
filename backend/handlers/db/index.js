const mongoose = require('mongoose');
const config = require('config');

const mongoUrl = config.get('database.url');

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false});