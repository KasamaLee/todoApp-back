require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const todoRoute = require('./routes/todoRoute')

// #### APP ####
const app = express();
app.use(cors());
app.use(morgan());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// #### ROUTE ####
app.use('/todo', todoRoute)

// #### SERVER ####
const PORT = process.env.PORT || 7777
app.listen(PORT, () => console.log(`RUNNING ON PORT : ${PORT}`))