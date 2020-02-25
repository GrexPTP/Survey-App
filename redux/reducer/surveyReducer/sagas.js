import { takeLatest, put, all, call } from 'redux-saga/effects';
import SurveyActionTypes from './types';
import {
   createSurveyStart,
   createSurveySuccess,
   createSurveyFailure,
   editSurveyStart,
   editSurveySuccess,
   editSurveyFailure,
   selectSurveyStart,
   selectSurveySuccess,
   selectSurveyFailure,
   createImageQuestionStart,
   createImageQuestionSuccess,
   createImageQuestionFailure,
   createParagraphQuestionStart,
   createParagraphQuestionSuccess,
   createParagraphQuestionFailure,
   createMatrixRatingQuestionStart,
   createMatrixRatingQuestionSuccess,
   createMatrixRatingQuestionFailure,
   createDropdownQuestionStart,
   createDropdownQuestionSuccess,
   createDropdownQuestionFailure,
   createTextQuestionStart,
   createTextQuestionSuccess,
   createTextQuestionFailure,
   createMultipleQuestionStart,
   createMultipleQuestionSuccess,
   createMultipleQuestionFailure
} from './actions';
export function* createSurvey({payload: {title, navigation}}){
    try {
        // const response = yield fetch(`http://tkb.miennam24h.vn/api/login`,{
        //     method: 'post',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     body:JSON.stringify({
        //         email: data.email,
        //         password: data.password
        //     })
        //   })
          //const result = yield response.json()
          const result = yield {
            title,
            data: []
          }
          
          yield console.log(result)
          yield put(createSurveySuccess(result))
          yield navigation.navigate('SurveyDetail')
    } catch (err) {
        yield put(createSurveyFailure(err))
    }
}
export function* editSurvey({payload}){
    try {
        yield put(editSurveySuccess({}))
    } catch (err) {
        yield put(editSurveyFailure(err))
    }
}
export function* selectSurvey({payload }) {
    try {
        const {name} = payload
        // const response = yield fetch(`http://tkb.miennam24h.vn/api/signup`,{
        //   method: 'post',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body:JSON.stringify({
        //       name,
        //       email,
        //       password,
        //       c_password: password,
        //       phone,
        //       id_number: IDNumber,
        //       role_id
        //   })
        // })
        // const result =  yield response.json()
        const result = yield {name}
        yield put(selectSurveySuccess(result))
    } catch(err) {
        yield put(selectSurveyFailure(err))
    }
}
export function* createImageQuestion(){
    try {
        yield put(createImageQuestionSuccess())
    } catch (error) {
        yield put(createImageQuestionFailure())
    }
} 
export function* createParagraphQuestion(){
    try {
        yield put(createParagraphQuestionStart())
    } catch (error) {
        yield put(createParagraphQuestionFailure())
    }
}
export function* createMatrixRatingQuestion(){
    try {
        yield put(createMatrixRatingQuestionSuccess())
    } catch (error) {
        yield put(createMatrixRatingQuestionFailure(error));
    }
}
export function* createDropdownQuestion(){
    try {
        yield put(createDropdownQuestionSuccess())
    } catch (error) {
        yield put(createDropdownQuestionFailure(error))
    }
}
export function* createTextQuestion(){
    try {
        yield put(createTextQuestionSuccess())
    } catch (error) {
        yield put(createTextQuestionFailure(error))
    }
}
export function* createMultipleQuestion(){
    try {
        yield put(createMultipleQuestionSuccess())
    } catch (error) {
        yield put(createMultipleQuestionFailure(error))
    }
}
export function* onCreateSurveyStart(){
    yield takeLatest(SurveyActionTypes.CREATE_SURVEY_START, createSurvey)
}
export function*  onEditSurveyStart(){
    yield takeLatest(SurveyActionTypes.EDIT_SURVEY_START, editSurvey)
}
export function* onSelectSurveyStart(){
    yield takeLatest(SurveyActionTypes.SELECT_SURVEY_START, selectSurvey)
}
export function* surveySagas(){
    yield all([
        call(onCreateSurveyStart),
        call(onEditSurveyStart),
        call(onSelectSurveyStart)
    ])
}