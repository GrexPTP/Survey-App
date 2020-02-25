import SurveyActionTypes from './types'
export const createSurveyStart = ({title, navigation}) => ({
    type: SurveyActionTypes.CREATE_SURVEY_START,
    payload: {title, navigation}
})
export const createSurveySuccess = survey => ({
    type: SurveyActionTypes.CREATE_SURVEY_SUCCESS,
    payload: survey
})
export const createSurveyFailure = error => ({
    type: SurveyActionTypes.CREATE_SURVEY_FAILURE,
    payload: error
})
export const selectSurveyStart = id => ({
    type: SurveyActionTypes.SELECT_SURVEY_START,
    payload: id
})
export const selectSurveySuccess = survey => ({
    type: SurveyActionTypes.SELECT_SURVEY_SUCCESS,
    payload: survey
})
export const selectSurveyFailure = error => ({
    type:SurveyActionTypes.SELECT_SURVEY_FAILURE,
    payload: error
})
export const editSurveyStart = data => ({
    type: SurveyActionTypes.EDIT_SURVEY_START,
    payload: data
})
export const editSurveySuccess = survey => ({
    type: SurveyActionTypes.EDIT_SURVEY_SUCCESS,
    payload: survey
})
export const editSurveyFailure = error => ({
    type: SurveyActionTypes.EDIT_SURVEY_FAILURE,
    payload: error
})
export const createParagraphQuestionStart = ({text, navigation}) => ({
    type: SurveyActionTypes.CREATE_PARAGRAPH_QUESTION_START,
    payload: {text, navigation}
})
export const createParagraphQuestionSuccess = survey => ({
    type: SurveyActionTypes.CREATE_PARAGRAPH_QUESTION_SUCCESS,
    payload: survey
})
export const createParagraphQuestionFailure = error => ({
    type: SurveyActionTypes.CREATE_PARAGRAPH_QUESTION_FAILURE,
    payload: error
})
export const createImageQuestionStart = ({data, navigation}) => ({
    type: SurveyActionTypes.CREATE_IMAGE_QUESTION_START,
    payload: {data, navigation}
})
export const createImageQuestionSuccess = survey => ({
    type: SurveyActionTypes.CREATE_IMAGE_QUESTION_SUCCESS,
    payload: survey
})
export const createImageQuestionFailure = error => ({
    type: SurveyActionTypes.CREATE_IMAGE_QUESTION_FAILURE,
    payload: error
})
export const createMatrixRatingQuestionStart = ({data, navigation}) => ({
    type: SurveyActionTypes.CREATE_MATRIXRATING_QUESTION_START,
    payload: {data, navigation}
})
export const createMatrixRatingQuestionSuccess = survey => ({
    type: SurveyActionTypes.CREATE_MATRIXRATING_QUESTION_SUCCESS,
    payload: survey
})
export const createMatrixRatingQuestionFailure = error => ({
    type: SurveyActionTypes.CREATE_MATRIXRATING_QUESTION_FAILURE,
    payload: error
})
export const createDropdownQuestionStart = ({data, navigation}) => ({
    type: SurveyActionTypes.CREATE_DROPDOWN_QUESTION_START,
    payload: {data,navigation}
})
export const createDropdownQuestionSuccess = survey => ({
    type: SurveyActionTypes.CREATE_DROPDOWN_QUESTION_SUCCESS,
    payload: survey
})
export const createDropdownQuestionFailure = error => ({
    type: SurveyActionTypes.CREATE_DROPDOWN_QUESTION_FAILURE,
    payload: error
})
export const createTextQuestionStart = ({text, navigation}) => ({
    type: SurveyActionTypes.CREATE_TEXT_QUESTION_START,
    payload: {text, navigation}
})
export const createTextQuestionSuccess = survey => ({
    type: SurveyActionTypes.CREATE_TEXT_QUESTION_SUCCESS,
    payload: survey
})
export const createTextQuestionFailure = error => ({
    type: SurveyActionTypes.CREATE_TEXT_QUESTION_FAILURE,
    payload: error
})
export const createMultipleQuestionStart = ({data, navigation}) => ({
    type: SurveyActionTypes.CREATE_MULTIPLE_QUESTION_START,
    payload: {data, navigation}
})
export const createMultipleQuestionSuccess = survey => ({
    type:SurveyActionTypes.CREATE_MULTIPLE_QUESTION_SUCCESS,
    payload: survey
})
export const createMultipleQuestionFailure = error => ({
    type: SurveyActionTypes.CREATE_MULTIPLE_QUESTION_FAILURE,
    payload: error
})