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
   createMultipleQuestionFailure,
    //Edit sagas
   editImageQuestionStart,
   editImageQuestionSuccess,
   editImageQuestionFailure,
   editParagraphQuestionStart,
   editParagraphQuestionSuccess,
   editParagraphQuestionFailure,
   editMatrixRatingQuestionStart,
   editMatrixRatingQuestionSuccess,
   editMatrixRatingQuestionFailure,
   editDropdownQuestionStart,
   editDropdownQuestionSuccess,
   editDropdownQuestionFailure,
   editTextQuestionStart,
   editTextQuestionSuccess,
   editTextQuestionFailure,
   editMultipleQuestionStart,
   editMultipleQuestionSuccess,
   editMultipleQuestionFailure
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
//Create sagas
export function* createImageQuestion({payload:{data, navigation, survey}}){
    try {
        const {title, image, nickname} = data
        const newSur = {
            title: survey.title,
            data: [...survey.data, {
                type: 'image',
                title,
                image,
                nickname
            }]
        }
        yield put(createImageQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(createImageQuestionFailure(error))
    }
} 
export function* createParagraphQuestion({payload : {title, navigation, survey}}){
    try {
        const newSur = yield {
            title: survey.title,
            data: [...survey.data, {
                type: 'paragraph',
                title,
            }]
        }
        yield put(createParagraphQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(createParagraphQuestionFailure(error))
    }
}
export function* createMatrixRatingQuestion({payload:{data, navigation, survey}}){
    try {
        const {
            title,
            forced,
            weighted,
            multipled,
            multiSelected,
            col,
            row,
            other,
            required
        } = yield data
        const newSur = yield {
            title: survey.title,
            data: [...survey.data, {
            type: 'matrix',
            title,
            forced,
            weighted,
            multipled,
            multiSelected,
            col,
            row,
            other,
            required
            }]
        }
        yield put(createMatrixRatingQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(createMatrixRatingQuestionFailure(error));
    }
}
export function* createDropdownQuestion({payload:{data, navigation, survey}}){
    try {
        const {title,answers,required,other} = data
        const newSur = yield {
            title: survey.title,
            data: [...survey.data, {
                title,answers,required,other,type:'dropdown'
            }]
        }
        yield put(createDropdownQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(createDropdownQuestionFailure(error))
    }
}
export function* createTextQuestion({payload:{data, navigation, survey}}){
    try {
        const {title, required} = data
        const newSur = yield {
            title: survey.title,
            data: [...survey.data, {
                title, type:'text', required
            }]
        }
        yield put(createTextQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(createTextQuestionFailure(error))
    }
}
export function* createMultipleQuestion({payload:{data, navigation, survey}}){
    try {
        const {title,answers,required,other,multiSelected} = data
        const newSur = yield {
            title: survey.title,
            data: [...survey.data, {
                title,answers,required,other,multiSelected, type:'multiple'
            }]
        }
        yield put(createMultipleQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(createMultipleQuestionFailure(error))
    }
}
//Edit sagas
export function* editImageQuestion({payload:{data, navigation, survey, index}}){
    try {
        const {title, image, nickname} = data
        const editSurvey = [...survey.data]
        editSurvey[index] = {
            type: 'image',
            title,
            image,
            nickname
        }
        const newSur = {
            title: survey.title,
            data: editSurvey
        }
        yield put(editImageQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(editImageQuestionFailure(error))
    }
} 
export function* editParagraphQuestion({payload : {title, navigation, survey, index}}){
    try {
        const editSurvey = [...survey.data]
        editSurvey[index] = {
            type: 'paragraph',
            title,
        }
        const newSur = yield {
            title: survey.title,
            data: editSurvey
        }
        yield put(editParagraphQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(editParagraphQuestionFailure(error))
    }
}
export function* editMatrixRatingQuestion({payload:{data, navigation, survey, index}}){
    try {
        const {
            title,
            forced,
            weighted,
            multipled,
            multiSelected,
            col,
            row,
            other,
            required
        } = yield data

        const editSurvey = [...survey.data]
        editSurvey[index] = {
            type: 'matrix',
            title,
            forced,
            weighted,
            multipled,
            multiSelected,
            col,
            row,
            other,
            required
            }
        const newSur = yield {
            title: survey.title,
            data: editSurvey
        }
        yield put(editMatrixRatingQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(editMatrixRatingQuestionFailure(error));
    }
}
export function* editDropdownQuestion({payload:{data, navigation, survey, index}}){
    try {
        const {title,answers,required,other} = data
        const editSurvey = [...survey.data]
        editSurvey[index] = {
            title,answers,required,other,type:'dropdown'
        }
        const newSur = yield {
            title: survey.title,
            data: editSurvey
        }
        yield put(editDropdownQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(editDropdownQuestionFailure(error))
    }
}
export function* editTextQuestion({payload:{data, navigation, survey, index}}){
    try {
        const {title, required} = data
        const editSurvey = [...survey.data]
        editSurvey[index] = {
            title, type:'text', required
        }
        const newSur = yield {
            title: survey.title,
            data: editSurvey
        }
        yield put(editTextQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(editTextQuestionFailure(error))
    }
}
export function* editMultipleQuestion({payload:{data, navigation, survey, index}}){
    try {
        const {title,answers,required,other,multiSelected} = data
        const editSurvey = [...survey.data]
        edit[index] = {
            title,answers,required,other,multiSelected, type:'multiple'
        }
        const newSur = yield {
            title: survey.title,
            data: editSurvey
        }
        yield put(editMultipleQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(editMultipleQuestionFailure(error))
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
export function* onCreateImageQuestionStart() {
    yield takeLatest(SurveyActionTypes.CREATE_IMAGE_QUESTION_START, createImageQuestion)
}
export function* onCreateParagraphQuestionStart(){
    yield takeLatest(SurveyActionTypes.CREATE_PARAGRAPH_QUESTION_START, createParagraphQuestion)
}
export function* onCreateMatrixRatingQuestionStart(){
    yield takeLatest(SurveyActionTypes.CREATE_MATRIXRATING_QUESTION_START,createMatrixRatingQuestion)
}
export function* onCreateDropdownQuestionStart(){
    yield takeLatest(SurveyActionTypes.CREATE_DROPDOWN_QUESTION_START, createDropdownQuestion)
}
export function* onCreateTextQuestionStart(){
    yield takeLatest(SurveyActionTypes.CREATE_TEXT_QUESTION_START, createTextQuestion)
}
export function* onCreateMultipleQuestionStart(){
    yield takeLatest(SurveyActionTypes.CREATE_MULTIPLE_QUESTION_START, createMultipleQuestion)
}
//Edit start sagas
export function* onEditImageQuestionStart() {
    yield takeLatest(SurveyActionTypes.EDIT_IMAGE_QUESTION_START, editImageQuestion)
}
export function* onEditParagraphQuestionStart(){
    yield takeLatest(SurveyActionTypes.EDIT_PARAGRAPH_QUESTION_START, editParagraphQuestion)
}
export function* onEditMatrixRatingQuestionStart(){
    yield takeLatest(SurveyActionTypes.EDIT_MATRIXRATING_QUESTION_START,editMatrixRatingQuestion)
}
export function* onEditDropdownQuestionStart(){
    yield takeLatest(SurveyActionTypes.EDIT_DROPDOWN_QUESTION_START, editDropdownQuestion)
}
export function* onEditTextQuestionStart(){
    yield takeLatest(SurveyActionTypes.EDIT_TEXT_QUESTION_START, editTextQuestion)
}
export function* onEditMultipleQuestionStart(){
    yield takeLatest(SurveyActionTypes.EDIT_MULTIPLE_QUESTION_START, editMultipleQuestion)
}
export function* surveySagas(){
    yield all([
        call(onCreateSurveyStart),
        call(onEditSurveyStart),
        call(onSelectSurveyStart),
        call(onCreateImageQuestionStart),
        call(onCreateParagraphQuestionStart),
        call(onCreateMatrixRatingQuestionStart),
        call(onCreateDropdownQuestionStart),
        call(onCreateTextQuestionStart),
        call(onCreateMultipleQuestionStart),
        call(onEditImageQuestionStart),
        call(onEditParagraphQuestionStart),
        call(onEditMatrixRatingQuestionStart),
        call(onEditDropdownQuestionStart),
        call(onEditTextQuestionStart),
        call(onEditMultipleQuestionStart)
    ])
}