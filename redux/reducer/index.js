import {combineReducers} from "redux";
import surveyReducer from './surveyReducer'
import listReducer from './listReducer'
const rootReducer = () => combineReducers({
    survey: surveyReducer,
    list: listReducer
});
export default rootReducer