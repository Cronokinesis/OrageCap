import _ from 'lodash'
import { ThaiJokes } from './../../db'

export async function deleteJoke(req, res) {
    try {
        const id = _.get(req, ['params', 'id'], -1)
        if (isNaN(id) || id <= 0) {
            return res.status(404).json({
                type: 'failure',
                value: 'not found id'
            })
        }

        await ThaiJokes.deleteOne({ id: Number(id) }).exec()

        return res.status(200).json({
            type: 'success'
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            type: 'failure',
            value: "delete error"
        })
    }
}