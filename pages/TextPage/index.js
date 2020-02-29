import React, {useState} from 'react'
import {View,StyleSheet} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {TextInput, Subheading, Button, Switch,Text} from 'react-native-paper'
import {createTextQuestionStart,editTextQuestionStart} from '../../redux/reducer/surveyReducer/actions'
const TextPage = ({navigation, route}) => {
    const dispatch = useDispatch()
    const survey = useSelector(state => state.survey.current)
    const currentSelect = route.params ? survey.data[route.params.index] : null
    const [title, setTitle] = useState(currentSelect ? currentSelect.title : '')
    const [required, setRequired] = useState(currentSelect ? currentSelect.required: false)
    const [saved, setSaved] = useState(false)
    const editable = currentSelect ? true : false
    return (
        <View style={{flex:1, padding:10, backgroundColor: 'white'}}>
            <Subheading style={styles.heading}>QUESTION TEXT</Subheading>
            <TextInput value={title} onChangeText={text => setTitle(text)} style={{backgroundColor: 'white'}} placeholder={'Enter Your Text'}/>
            {
                title.trim() === '' && saved && <Text style={styles.error}>This field cannot be empty!</Text>
            }
            <View style={{padding:5}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>This question requires an answer</Text>
                <Switch value={required} onValueChange={() => setRequired(!required)} />
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Button onPress={() => navigation.goBack()}>CANCEL</Button>
            <Button onPress={() => {
                if (title.trim() !== '') {
                    if (editable) {
                        dispatch(editTextQuestionStart({data:{title, required}, navigation, survey, index:route.params.index}))
                    } else {
                        dispatch(createTextQuestionStart({data:{title, required}, navigation, survey}))
                    }
                    
                }
                else setSaved(true)
                }}>SAVE</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize:12,
        color: 'purple'
    },
    error:{
        color: 'red',
        padding:5
    }
})
export default TextPage