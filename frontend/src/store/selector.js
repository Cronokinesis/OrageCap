import _ from 'lodash'
import { selector } from 'recoil'
import { characterState, jokesState, listOptionState, selectAnswer } from './atom'
import { answer } from './const'

export const getLastName = selector({
    key: 'getFirstName',
    get: ({ get }) => {
        const fullName = get(characterState)
        const lastName = _.get(fullName, 'lastName', '')
        return _.isEmpty(lastName) ? 'Norris' : lastName
    }
})

export const getFirstName = selector({
    key: 'getLastName',
    get: ({ get }) => {
        const fullName = get(characterState)
        const firstName = _.get(fullName, 'firstName', '')
        return _.isEmpty(firstName) ? 'Chuck' : firstName
    }
})

export const getJokes = selector({
    key: 'getJokes',
    get: ({ get }) => {
        const jokes = get(jokesState);
        const listOption = get(listOptionState);
        const countJokes = jokes.length
        const limit = _.get(listOption, 'limit', 0)
        const numberOfPage = _.get(listOption, 'numberOfPage', 1)
        const start = (numberOfPage - 1) * limit
        const end = numberOfPage * limit
        const splitJokes = limit <= 0 ? jokes : _.slice(jokes, start, end)
        const maxPages = limit <= 0 ? 1 : Math.floor(countJokes / limit) + ((countJokes % limit) === 0 ? 0 : 1)

        return {
            jokes: splitJokes,
            pages: maxPages,
            limit,
            numberOfPage,
            totalJokes: countJokes,
        }
    }
});

export const getPagination = selector({
    key: 'getPagination',
    get: ({ get }) => {
        const jokes = get(jokesState);
        const listOption = get(listOptionState);
        const countJokes = jokes.length
        const limit = _.get(listOption, 'limit', 0)
        const numberOfPage = _.get(listOption, 'numberOfPage', 1)
        const maxPages = limit <= 0 ? 1 : Math.floor(countJokes / limit) + ((countJokes % limit) === 0 ? 0 : 1)

        const difStart = numberOfPage - 1
        const difEnd = maxPages - numberOfPage

        let pagination = [{
            no: 0,
            active: false,
            enable: difStart !== 0,
            symbol: '<'
        }, {
            no: maxPages + 1,
            active: false,
            enable: difEnd !== 0,
            symbol: '>'
        }]

        if (difStart < 3) {
            for (let i = 1; i <= (maxPages > 5 ? 5 : maxPages); i++) {
                pagination.push({
                    no: i,
                    active: i === numberOfPage ? true : false,
                    enable: true,
                    symbol: i
                })
            }
        } else if (difEnd < 2) {
            for (let i = maxPages; i > maxPages - 5; i--) {
                pagination.push({
                    no: i,
                    active: i === numberOfPage ? true : false,
                    enable: true,
                    symbol: i
                })
            }
        } else {
            for (let i = numberOfPage - 2; i <= numberOfPage + 2; i++) {
                pagination.push({
                    no: i,
                    active: i === numberOfPage ? true : false,
                    enable: true,
                    symbol: i
                })
            }
        }

        pagination.sort((a, b) => a.no - b.no)

        return pagination
    }
})

export const getLimits = selector({
    key: 'getLimits',
    get: ({ get }) => {
        return [5, 10, 20, 50, 100]
    }
})

export const getAnswer = selector({
    key: 'getAnswer',
    get: ({ get }) => {
        const select = get(selectAnswer)
        const split = answer[select - 1].split('-')
        
        return {
            list: [1, 2, 3, 4, 5, 6],
            answer: _.compact(split)
        }
    }
})