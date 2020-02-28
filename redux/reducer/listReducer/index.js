import ListActionTypes from './types'
const INITIAL_STATE = {
    surveys: [],
    error: ''
}
const listReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ListActionTypes.LOAD_LIST_SUCCESS:
        case ListActionTypes.ADD_TO_LIST_SUCCESS:
            return {...state, surveys: action.payload}
        case ListActionTypes.LOAD_LIST_FAILURE:
        case ListActionTypes.ADD_TO_LIST_FAILURE:
            return {...state, error: action.payload}
        default:
            return state
    }
}
export default listReducer