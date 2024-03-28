const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes');
const userInfoRoutes = require('./routes/userInfoRoutes');
const postRoutes = require('./routes/postRoutes');

const cors = require('cors')
require('dotenv').config()

const url = process.env.DB_URL
const port = process.env.PORT

mongoose
  .connect(url)
  .then(() => console.log('Mongo connected'))
  .catch(err => console.log('Failed connect: ' + err))

const app = express()

app.use(express.json())
app.use(cors())
app.use('/auth', authRoutes);
app.use('/auth/user', userInfoRoutes);
app.use('/auth/posts', postRoutes);



app.listen(port, err => {
  if (!err) {
    console.log('Server started in host ' + port)
  } else console.log('Server error')
})
