import { takeLatest, put, all, call } from 'redux-saga/effects';
import ListActionTypes from './types'
import {loadListSuccess,  addToListSuccess, addToListError, loadListFailure} from './actions'
import axios from 'axios'
export function* loadList() {
    try {
        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/load_surveys',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
        const result = yield response.data
        const surveys = yield result.success
        yield put(loadListSuccess(surveys))
    } catch(error) {
        yield put(loadListFailure(error))
    }
}

export function* onLoadListStart(){
    yield takeLatest(ListActionTypes.LOAD_LIST_START, loadList)
}

export function* listSagas(){
    yield all([
        call(onLoadListStart),
    ])
}