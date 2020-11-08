import _ from 'lodash'
import { async } from 'regenerator-runtime'
import { ThaiJokes, Users } from './db'
import axios from 'axios'

export async function init() {
    try {
        // init thai joke
        const jokes = await ThaiJokes.find().exec()
        if (jokes.length == 0) {
            // Send a POST request
            const response = await axios.get('http://api.icndb.com/jokes')
            if (_.get(response, ['data', 'type'], '') == 'success') {
                const jokes = _.get(response, ['data', 'value'], [])
                await ThaiJokes.insertMany(jokes)
            }
        }

        // init user
        const users = await Users.find().exec()
        if (users.length == 0) {
            const user = new Users
            user.username = 'username'
            user.password = 'password'
            user.email = 'test@mail.com'
            user.firstName = 'test'
            user.lastName = 'test'
            user.save()
        }
    } catch (e) {
        console.log(e)
        return
    }
}