import _ from 'lodash'
import { ThaiJokes } from './../../db'

export async function getJokeById(req, res) {
    try {
        const id = _.get(req, ['params', 'id'], -1)
        if (isNaN(id) || id <= 0) {
            return res.status(404).json({
                type: 'failure',
                value: 'not found id'
            })
        }

        return res.status(200).json({
            type: 'success',
            value: await ThaiJokes.aggregate(
                [
                    {
                        $match: {
                            id: Number(id),
                        }
                    }, {
                        $project: {
                            _id: 0,
                            id: 1,
                            joke: 1,
                            categories: 1
                        }
                    }
                ]
            ).exec()
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            type: 'failure',
            value: []
        })
    }
}