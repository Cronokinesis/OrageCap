import _ from 'lodash'
import { answer } from './answer'

export function myAnswer(req, res) {
    try {
        const no = _.get(req, ['params', 'no'], -1)
        if (isNaN(no) || (no <= 0 || no > 6)) {
            return res.status(404).json({
                type: 'failure',
                value: 'question not found'
            })
        }

        return res.status(200).json({
            type: 'success',
            no,
            answer: answer[no - 1]
        })
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            type: 'failure'
        })
    }
}