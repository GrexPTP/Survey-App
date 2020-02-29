import { takeLatest, put, all, call } from 'redux-saga/effects';
import ListActionTypes from './types'
import {loadListSuccess,  addToListSuccess, addToListError, loadListFailure} from './actions'

export function* loadList() {
    try {
        const surveys = yield []
        yield put(loadListSuccess(surveys))
    } catch(error) {
        yield put(loadListFailure(error))
    }
}
export function* addToList({payload}){
    try {
        yield put(addToListSuccess(payload))
    } catch(error) {
        yield put(addToListError(error))
    }
}
export function* onLoadListStart(){
    yield takeLatest(ListActionTypes.LOAD_LIST_START, loadList)
}
export function* onAddToListStart(){
    yield takeLatest(ListActionTypes.ADD_TO_LIST_START, addToList)
}
export function* listSagas(){
    yield all([
        call(onLoadListStart),
        call(onAddToListStart),
    ])
}