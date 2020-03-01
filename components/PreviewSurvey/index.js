import React from 'react'
import {Text} from 'react-native'
import { List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import {useDispatch} from 'react-redux'
import {selectSurveyStart} from '../../redux/reducer/surveyReducer/actions'
const PreviewSurvey = ({title, updated, id, navigation}) => {
  const dispatch = useDispatch()
    return (
        <List.Item style={{alignItems:'center' , justifyContent:'center'}}
        title={title}
        onPress={() => {
          dispatch(selectSurveyStart({id, navigation}))
        }}
        description={`Date modified: ${updated}`}
        left={props => <Ionicons name="ios-list" size={32} color="black" />}
        right={props => <Ionicons name="ios-arrow-forward" size={32} color="black" />}
      />
    )
}
export default PreviewSurvey