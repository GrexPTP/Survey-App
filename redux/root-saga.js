import {all, call} from 'redux-saga/effects'
import {surveySagas} from "./reducer/surveyReducer/sagas";
export default function* rootSaga () {
    yield all([call(surveySagas)]);
}