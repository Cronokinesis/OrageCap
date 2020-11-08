import _ from 'lodash'
import { ThaiJokes } from './../../db'

export async function like(req, res) {
    try {
        const id = _.get(req, ['params', 'id'], -1)
        if (isNaN(id) || id <= 0) {
            return res.status(404).json({
                type: 'failure',
                value: 'not found id'
            })
        }
        const joke = await ThaiJokes.findOne({ id }).exec()
        joke.likes++
        joke.updatedAt = Date.now
        joke.save()

        return res.status(200).json({
            type: 'success'
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            type: 'failure',
        })
    }
}