import ListActionTypes from './types'
export const loadListStart = () => ({
    type: ListActionTypes.LOAD_LIST_START
})
export const loadListSuccess = surveys => ({
    type: ListActionTypes.LOAD_LIST_SUCCESS,
    payload: surveys
})
export const loadListFailure = error => ({
    type: ListActionTypes.LOAD_LIST_FAILURE,
    payload: error
})