import React, {useState} from 'react'
import {View,StyleSheet} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {TextInput, Subheading, Button} from 'react-native-paper'
import {createTextQuestionStart} from '../../redux/reducer/surveyReducer/actions'
const TextPage = ({navigation}) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const survey = useSelector(state => state.survey.current)
    return (
        <View style={{flex:1, padding:10, backgroundColor: 'white'}}>
            <Subheading style={styles.heading}>QUESTION TEXT</Subheading>
            <TextInput value={title} onChangeText={text => setTitle(text)} style={{backgroundColor: 'white'}} placeholder={'Enter Your Text'}/>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Button onPress={() => navigation.goBack()}>CANCEL</Button>
            <Button onPress={() => dispatch(createTextQuestionStart({title, navigation, survey}))}>SAVE</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize:12,
        color: 'purple'
    }
})
export default TextPage