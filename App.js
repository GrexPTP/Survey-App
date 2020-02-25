import React from 'react';
import Constants from 'expo-constants';
import {View} from 'react-native'
import SurveysPage from './pages/SurveysPage'
import { createStackNavigator } from '@react-navigation/stack';
import SurveyDetailPage from './pages/SurveyDetailPage';
import { NavigationContainer } from '@react-navigation/native';
import ImagePage from './pages/ImagePage';
import ParagraphPage from './pages/ParagraphPage';
import MatrixRatingPage from './pages/MatrixRatingPage';
import DropdownPage from './pages/DropdownPage';
import TextPage from './pages/TextPage';
import MultipleChoicePage from './pages/MultipleChoice';
import QuestionBankPage from './pages/QuestionBankPage';
import ColumnPage from './pages/ColumnPage';
import RowPage from './pages/RowPage';
import {Provider} from 'react-redux'
import store from './redux/store'
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName={'Surveys'}>
        <Stack.Screen options={{headerShown: false}} name='Surveys' component={SurveysPage}/>
        <Stack.Screen name='SurveyDetail' component={SurveyDetailPage} options={
          {
            title:'Edit'
          }
        }/>
        <Stack.Screen name='Image' component={ImagePage} />
        <Stack.Screen name='Paragraph' component={ParagraphPage} />
        <Stack.Screen name='MatrixRating' component={MatrixRatingPage} options={
          {
            title:'Matrix/Rating'
          }
        } />
        <Stack.Screen name='Dropdown' component={DropdownPage} />
        <Stack.Screen name='Text' component={TextPage} />
        <Stack.Screen name='Multiple' component={MultipleChoicePage} options={
          {
            title:'Multiple Choices'
          }
        }  />
        <Stack.Screen name='Columns' component={ColumnPage} />
        <Stack.Screen name='Rows' component={RowPage} />
        <Stack.Screen name='Questions' component={QuestionBankPage} />
      </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  )
}
export default App