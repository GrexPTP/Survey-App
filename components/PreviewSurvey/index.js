import React from 'react'
import {Text} from 'react-native'
import { List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import {useDispatch} from 'react-redux'
import {selectSurveyStart} from '../../redux/reducer/surveyReducer/actions'
const PreviewSurvey = ({title, updated, id, navigation}) => {
  const dispatch = useDispatch()
    return (
        <List.Item style={{alignItems:'center' , justifyContent:'center', borderBottomColor: 'grey', borderBottomWidth:.5}}
        title={title}
        onPress={() => {
          dispatch(selectSurveyStart({id, navigation}))
        }}
        description={`Date modified: ${updated.split('T')[0]}`}
        left={props => <Ionicons style={{padding:6}} name="ios-list" size={35} color="grey" />}
        right={props => <Ionicons style={{padding:6}} name="ios-arrow-forward" size={35} color="grey" />}
      />
    )
}
export default PreviewSurvey