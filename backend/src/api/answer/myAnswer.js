import _ from 'lodash'

export function myAnswer(req, res) {
    try {
        const no = _.get(req, ['params', 'no'], -1)
        if (isNaN(no) || (no <= 0 || no > 6)) {
            return res.status(200).json({
                type: 'failure',
                value: 'question not found'
            })
        }

        return res.status(200).json({
            type: 'success',
            no,
            answer: ""
        })
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            type: 'failure'
        })
    }
}