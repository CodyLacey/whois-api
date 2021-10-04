const { ApolloServer } = require('apollo-server-express')
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 8080
const homeRoutes = require('./routes/home')
const indexRouter = require('./routes/index');
const { typeDefs } = require('./schema/TypeDefs')
const { resolvers } = require('./schema/Resolvers')

const server = new ApolloServer({ typeDefs, resolvers})

server.applyMiddleware({ app })



require('dotenv').config({path: './config/.env'})

// Middlewares
app.set('view engine', 'ejs')
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', homeRoutes)
app.use('/api', indexRouter);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})

module.exports = app;
