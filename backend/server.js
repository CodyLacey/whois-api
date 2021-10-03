const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const graphql = require('graphql')
const PORT = process.env.PORT || 8080

const indexRouter = require('./routes/index');


require('dotenv').config({path: './config/.env'})

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', indexRouter);




app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})

module.exports = app;
