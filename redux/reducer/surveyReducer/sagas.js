import axios from 'axios'
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
        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/create_survey',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
                title
            }
        })
        const result = yield response.data
        yield put(createSurveySuccess(result.success))
        yield navigation.navigate('SurveyDetail')
    } catch (err) {
        yield put(createSurveyFailure(err))
    }
}
export function* editSurvey({payload:{title, page_title ,survey}}){
    try {
        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/edit_survey',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
                id: survey.id,
                title: title ? title : survey.title,
                page_title: page_title ? page_title : survey.page_title,
                data: JSON.stringify(survey.data)
            }
        })
        const result = yield response.data
        const newSur = yield result.success
        newSur.data = JSON.parse(newSur.data) 
        yield put(editSurveySuccess(newSur))
    } catch (err) {
        yield put(editSurveyFailure(err))
    }
}
export function* selectSurvey({payload: {id, navigation}}) {
    try {
        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/load_survey',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
                id
            }
        })
        const result = yield response.data
        const survey = result.success
        survey.data = JSON.parse(survey.data)
        yield put(selectSurveySuccess(survey))
        yield navigation.navigate('SurveyDetail')
    } catch(err) {
        yield put(selectSurveyFailure(err))
    }
}
//Create sagas
export function* createImageQuestion({payload:{data, navigation, survey}}){
    try {
        const {title, image, nickname} = data

        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/edit_survey',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
                id: survey.id,
                title: survey.title,
                page_title: survey.page_title ? survey.page_title : '',
                data: JSON.stringify([...survey.data, {
                    type: 'image',
                    title,
                    image,
                    nickname
                }])
            }
        })
        const result = yield response.data
        const newSur = yield result.success
        newSur.data = JSON.parse(newSur.data)
        yield put(createImageQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(createImageQuestionFailure(error))
    }
} 
export function* createParagraphQuestion({payload : {title, navigation, survey}}){
    try {

    
        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/edit_survey',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
                id: survey.id,
                title: survey.title,
                page_title: survey.page_title ? survey.page_title : 'Page title',
                data: JSON.stringify([...survey.data, {
                    type: 'paragraph',
                    title,
                }])
            }
        }).catch(err => {
            console.log(err)
        })
        yield console.log(response)
        const result = yield response.data
        const newSur = yield result.success
        newSur.data = JSON.parse(newSur.data) 
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
        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/edit_survey',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
                id: survey.id,
                title: survey.title,
                page_title: survey.page_title ? survey.page_title : 'Page title' ,
                data: JSON.stringify([...survey.data, {
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
                    }])
            }
        })
        const result = yield response.data
        const newSur = yield result.success
        newSur.data = JSON.parse(newSur.data)         
        yield put(createMatrixRatingQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(createMatrixRatingQuestionFailure(error));
    }
}
export function* createDropdownQuestion({payload:{data, navigation, survey}}){
    try {
        const {title,answers,required,other} = data
        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/edit_survey',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
                id: survey.id,
                title: survey.title,
                page_title: survey.page_title ? survey.page_title : 'Page title',
                data: JSON.stringify([...survey.data, {
                    title,answers,required,other,type:'dropdown'
                }])
            }
        })
        const result = yield response.data
        const newSur = yield result.success
        newSur.data = JSON.parse(newSur.data) 
        yield put(createDropdownQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(createDropdownQuestionFailure(error))
    }
}
export function* createTextQuestion({payload:{data, navigation, survey}}){
    try {
        const {title, required} = data
        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/edit_survey',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
                id: survey.id,
                title: survey.title,
                page_title: survey.page_title ? survey.page_title : 'Page title',
                data: JSON.stringify([...survey.data, {
                    title, type:'text', required
                }])
            }
        })
        const result = yield response.data
        const newSur = yield result.success
        newSur.data = JSON.parse(newSur.data) 
        yield put(createTextQuestionSuccess(newSur))
        yield navigation.goBack()
    } catch (error) {
        yield put(createTextQuestionFailure(error))
    }
}
export function* createMultipleQuestion({payload:{data, navigation, survey}}){
    try {
        const {title,answers,required,other,multiSelected} = data
        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/edit_survey',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
                id: survey.id,
                title: survey.title,
                page_title: survey.page_title ? survey.page_title : 'Page title',
                data: JSON.stringify([...survey.data, {
                    title,answers,required,other,multiSelected, type:'multiple'
                }])
            }
        })
        const result = yield response.data
        const newSur = yield result.success
        newSur.data = JSON.parse(newSur.data) 
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
        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/edit_survey',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
                id: survey.id,
                title: survey.title,
                page_title: survey.page_title ? survey.page_title : 'Page title',
                data: JSON.stringify(editSurvey)
            }
        })
        const result = yield response.data
        const newSur = yield result.success
        newSur.data = JSON.parse(newSur.data) 
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
        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/edit_survey',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
                id: survey.id,
                title: survey.title,
                page_title: survey.page_title ? survey.page_title : 'Page title',
                data: JSON.stringify(editSurvey)
            }
        })
        const result = yield response.data
        const newSur = yield result.success
        newSur.data = JSON.parse(newSur.data) 
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
            const response = yield axios({
                method: 'post',
                url: 'http://tkb.miennam24h.vn/api/edit_survey',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                data: {
                    id: survey.id,
                    title: survey.title,
                    page_title: survey.page_title ? survey.page_title : 'Page title',
                    data: JSON.stringify(editSurvey)
                }
            })
            const result = yield response.data
            const newSur = yield result.success
            newSur.data = JSON.parse(newSur.data) 
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
        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/edit_survey',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
                id: survey.id,
                title: survey.title,
                page_title: survey.page_title ? survey.page_title : 'Page title',
                data: JSON.stringify(editSurvey)
            }
        })
        const result = yield response.data
        const newSur = yield result.success
        newSur.data = JSON.parse(newSur.data) 
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
        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/edit_survey',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
                id: survey.id,
                title: survey.title,
                page_title: survey.page_title ? survey.page_title : 'Page title',
                data: JSON.stringify(editSurvey)
            }
        })
        const result = yield response.data
        const newSur = yield result.success
        newSur.data = JSON.parse(newSur.data) 
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
        editSurvey[index] = {
            title,answers,required,other,multiSelected, type:'multiple'
        }
        const response = yield axios({
            method: 'post',
            url: 'http://tkb.miennam24h.vn/api/edit_survey',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: {
                id: survey.id,
                title: survey.title,
                page_title: survey.page_title ? survey.page_title : 'Page title',
                data: JSON.stringify(editSurvey)
            }
        })
        const result = yield response.data
        const newSur = yield result.success
        newSur.data = JSON.parse(newSur.data) 
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