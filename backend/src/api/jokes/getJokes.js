import _ from 'lodash'
import { ThaiJokes } from './../../db'

export async function getJokes(req, res) {
    try {
        return res.status(200).json({
            type: 'success',
            value: await ThaiJokes.aggregate(
                [
                    {
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
        return res.status(200).json({
            type: 'failure',
            value: []
        })
    }
}