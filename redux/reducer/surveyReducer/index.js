import SurveyActionTypes from './types'
const INITIAL_STATE = {
    current: {},
    error: ''
}
const surveyReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SurveyActionTypes.CREATE_SURVEY_SUCCESS:
        case SurveyActionTypes.EDIT_SURVEY_SUCCESS:
        case SurveyActionTypes.SELECT_SURVEY_SUCCESS:
        case SurveyActionTypes.CREATE_IMAGE_QUESTION_SUCCESS:
        case SurveyActionTypes.CREATE_PARAGRAPH_QUESTION_SUCCESS:
        case SurveyActionTypes.CREATE_MATRIXRATING_QUESTION_SUCCESS:
        case SurveyActionTypes.CREATE_DROPDOWN_QUESTION_SUCCESS:
        case SurveyActionTypes.CREATE_TEXT_QUESTION_SUCCESS:
        case SurveyActionTypes.CREATE_MULTIPLE_QUESTION_SUCCESS:
            //Edit success reducer
        case SurveyActionTypes.EDIT_IMAGE_QUESTION_SUCCESS:
        case SurveyActionTypes.EDIT_PARAGRAPH_QUESTION_SUCCESS:
        case SurveyActionTypes.EDIT_MATRIXRATING_QUESTION_SUCCESS:
        case SurveyActionTypes.EDIT_DROPDOWN_QUESTION_SUCCESS:
        case SurveyActionTypes.EDIT_TEXT_QUESTION_SUCCESS:
        case SurveyActionTypes.EDIT_MULTIPLE_QUESTION_SUCCESS:
            return {...state, current: action.payload}
        case SurveyActionTypes.CREATE_SURVEY_FAILURE:
        case SurveyActionTypes.EDIT_SURVEY_FAILURE:
        case SurveyActionTypes.SELECT_SURVEY_FAILURE:
        case SurveyActionTypes.CREATE_IMAGE_QUESTION_FAILURE:
        case SurveyActionTypes.CREATE_PARAGRAPH_QUESTION_FAILURE:
        case SurveyActionTypes.CREATE_MATRIXRATING_QUESTION_FAILURE:
        case SurveyActionTypes.CREATE_DROPDOWN_QUESTION_FAILURE:
        case SurveyActionTypes.CREATE_TEXT_QUESTION_FAILURE:
        case SurveyActionTypes.CREATE_MULTIPLE_QUESTION_FAILURE:
            //Edit failure reducer
        case SurveyActionTypes.EDIT_IMAGE_QUESTION_FAILURE:
        case SurveyActionTypes.EDIT_PARAGRAPH_QUESTION_FAILURE:
        case SurveyActionTypes.EDIT_MATRIXRATING_QUESTION_FAILURE:
        case SurveyActionTypes.EDIT_DROPDOWN_QUESTION_FAILURE:
        case SurveyActionTypes.EDIT_TEXT_QUESTION_FAILURE:
        case SurveyActionTypes.EDIT_MULTIPLE_QUESTION_FAILURE:
            return {...state, error: action.payload}
        default:
            return state
    }
}
export default surveyReducer