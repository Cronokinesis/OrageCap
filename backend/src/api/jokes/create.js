import _ from 'lodash'
import { ThaiJokes } from '../../db'

export async function createJoke(req, res) {
    try {
        const {
            joke,
            categories
        } = _.get(req, 'body', {})

        if (_.isEmpty(joke)) {
            return res.status(404).json({
                type: 'failure',
                value: 'joke is empty'
            })
        }

        const lastId = _.get(await ThaiJokes.findOne().sort({ id: -1 }).exec(), 'id', 0)

        const newJoke = new ThaiJokes;
        newJoke.id = lastId + 1
        newJoke.joke = joke
        newJoke.categories = _.isEmpty(categories) ? [] : categories
        await newJoke.save()


        return res.status(201).json({
            type: 'success'
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            type: 'failure',
            value: 'server internal error'
        })
    }
}