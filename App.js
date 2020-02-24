import React from 'react';
import Constants from 'expo-constants';
import {View} from 'react-native'
import SurveysPage from './pages/SurveysPage'

const App = () => {
  return (
    <View style={{paddingTop: Constants.statusBarHeight, flex:1}}>
      <SurveysPage/>
    </View>
  )
}
export default App