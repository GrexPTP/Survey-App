import { takeLatest, put, all, call } from 'redux-saga/effects';
import ListActionTypes from './types'
import {loadListSuccess, loadListSuccess, addToListSuccess, addToListError} from './actions'

export function* loadList() {

}
export function* addToList({payload}){

}
export function* onLoadListStart(){
    yield takeLatest(ListActionTypes.LOAD_LIST_START, loadList)
}
export function* onAddToListStart(){
    yield takeLatest(ListActionTypes.ADD_TO_LIST_START, addToList)
}
export function* surveySagas(){
    yield all([
        call(onLoadListStart),
        call(onAddToListStart),
    ])
}