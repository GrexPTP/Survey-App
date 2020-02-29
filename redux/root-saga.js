import {all, call} from 'redux-saga/effects'
import {surveySagas} from "./reducer/surveyReducer/sagas";
import {listSagas} from './reducer/listReducer/sagas'
export default function* rootSaga () {
    yield all([call(surveySagas), call(listSagas)]);
}