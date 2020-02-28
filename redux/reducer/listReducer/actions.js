import ListActionTypes from './types'
export const loadListStart = () => ({
    type: ListActionTypes.ADD_TO_LIST_START
})
export const loadListSuccess = surveys => ({
    type: ListActionTypes.LOAD_LIST_SUCCESS,
    payload: surveys
})
export const loadListFailure = error => ({
    type: ListActionTypes.LOAD_LIST_FAILURE,
    payload: error
})
export const addToListStart = survey => ({
    type: ListActionTypes.ADD_TO_LIST_START,
    payload: survey
})
export const addToListSuccess = surveys => ({
    type: ListActionTypes.ADD_TO_LIST_SUCCESS,
    payload: surveys
})
export const addToListError = error => ({
    type: ListActionTypes.ADD_TO_LIST_FAILURE,
    payload: error
})