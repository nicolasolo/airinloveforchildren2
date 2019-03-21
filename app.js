const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const items = require('./routes/items');
const app = express();

app.use(bodyParser.json());




app.use('/items', items);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });

}

mongoose
    .connect('mongodb+srv://nicola:samsung330@cluster0-8t26p.mongodb.net/prova?retryWrites=true')
    .then(() => console.log('mongodb connected sucker'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

