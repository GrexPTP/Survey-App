import React from 'react'
import {Text} from 'react-native'
import { List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
const PreviewSurvey = ({title}) => {
    
    return (
        <List.Item
        title={title}
        description="Date modified"
        left={props => <Ionicons name="ios-list" size={32} color="black" />}
        right={props => <Ionicons name="ios-arrow-forward" size={32} color="black" />}
      />
    )
}
export default PreviewSurvey