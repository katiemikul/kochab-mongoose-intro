const express = require( 'express' );
const mongoose = require('mongoose');
const Book = require('./models/book.schema');
const app = express();
// const bodyParser = require( 'body-parser' );
const PORT = process.env.PORT || 5000;

// app.use(bodyParser.urlencoded({ extended: true}));


//CONNECTING TO MONGO BEGINNING
const databaseUrl = 'mongodb://localhost:27017/library';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
  console.log(`mongoose connected to ${databaseUrl}`);
})

mongoose.connection.on('error', (error) => {
  console.log('mongoose connection error', error);
})
//CONNECTING TO MONGO END

//GET Route for /book
app.get('/book', (req, res) => {
  //database read/find
  Book.find({})
    .then((dataFromDatabase) => {
      //success good things happened
      res.send(dataFromDatabase);
      console.log('data from database', dataFromDatabase);
    })
    .catch((error) => {
      //error, bad things happened
      console.log('error with book.find', error);
      res.sendStatus(500);
    });
});

  app.listen(PORT, function(){
      console.log('server running on: ', PORT);
  });