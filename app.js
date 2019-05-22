const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:AdminPrisma2018@initnode-z3itm.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  console.log('connected to Db');
}).catch((err) => {
  console.log('ERROR:', err.message);
});

const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log('listening on Port 3000');
});
