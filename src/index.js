const express = require('express');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://gpweek:adelaide10@ds133241.mlab.com:33241/goweek-ewerton', {
    useNewUrlParser: true
})

app.use(express.json());
app.use(require('./routes'))

app.listen(3000, () => {
    console.log(':) executando na porta 3000')
})