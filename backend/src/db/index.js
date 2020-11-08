import mongoose from 'mongoose';
import { SchemaUsers } from './users';
import { SchemaThaiJokes } from './thaiJokes'

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .catch(err => console.log(err));

export const Users = mongoose.model('users', SchemaUsers, 'users');
export const ThaiJokes = mongoose.model('thaiJokes', SchemaThaiJokes, 'thaiJokes');