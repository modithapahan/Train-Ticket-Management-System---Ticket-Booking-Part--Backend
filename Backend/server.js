const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

//routes import
const userRouter = require('./routes/users');
const locationRouter = require('./routes/locations');
const calculationRouter = require('./routes/calculations');

const app = express();
app.use(cors());
app.use(bodyParser.json());

//set the route path
app.use('/user',userRouter);
app.use('/location',locationRouter);
app.use('/userCalculation',calculationRouter);

const PORT = process.env.PORT || 8080;
const URL = process.env.MONGODB_URL;

mongoose.connect(URL).then(()=>{
    console.log('Database Connected!');
}).catch((error)=>{
    console.log(error);
})

app.listen(PORT, ()=> {
    console.log(`App is running on port ${PORT}`);
})