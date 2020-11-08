import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { middleware } from './authentication'
import _ from 'lodash'
import "core-js/stable";
import "regenerator-runtime/runtime";

import { login, createAccount, getProfile } from './api/accounts'
import { createJoke, deleteJoke, getJokes, getJokeById, like, dislike } from './api/jokes'
import { myAnswer } from './api/answer'
import { init } from './init'

const corsList = process.env.CORS_LIST.split(';')
const corsOptions = {
    origin: (origin, callback) => {
        if (corsList.indexOf(origin) !== -1 || corsList.indexOf('*') !== -1) {
            callback(null, true)
        } else {
            console.log('not cors')
            callback(new Error('Not allowed by CORS'))
        }
    },
    methods: "GET,POST", //GET,HEAD,PUT,PATCH,POST,DELETE
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express()
const port = process.env.PORT || 5000

init()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(require('request-param')())
app.use(cors(corsOptions))

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

// Authentication
app.post('/login', login)

app.post('/accounts', createAccount)

// User Management
app.get('/me', middleware, getProfile)

// Joke Management
app.post('/', middleware, createJoke)
app.delete('/:id', middleware, deleteJoke)
app.get('/', middleware, getJokes)
app.get('/:id', middleware, getJokeById)
app.post('/:id/like', middleware, like)
app.post('/:id/dislike', middleware, dislike)

app.get('/answer/:no', myAnswer)