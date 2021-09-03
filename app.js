const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

//ejs
app.set('view engine', 'ejs'); //for optional frontend later on if necessary

//import routes
const databaseEditRoute = require('./routes/database_edit'); //tag database contributions
const scanQuestionRoute = require('./routes/question'); //submit hash & device location, obtain question
const scanAnswerRoute = require('./routes/answer') //submit hash, device location & answer, obtain next coords

//DB connect
var dbConnect = mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log('connected to database')
);

//default route
app.get('/', (req, res) => {
  res.render('index');
});

//middlewares

app.use(bodyParser.json());
app.use(cors());

//links ./routes/database_edit to the route
app.use('/database_edit', databaseEditRoute);
app.use('/question', scanQuestionRoute);
app.use('/answer', scanAnswerRoute);

//listen
app.listen('3000');
