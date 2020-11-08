import { atom } from 'recoil';

export const characterState = atom({
    key: 'characterState',
    default: {
        firstName: '',
        lastName: ''
    }
});

export const jokesState = atom({
    key: 'jokesState',
    default: []
})

export const listOptionState = atom({
    key: 'listOptionState',
    default: {
        limit: 20,
        numberOfPage: 1
    }
})