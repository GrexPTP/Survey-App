import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {TextInput, Subheading, Button, Text} from 'react-native-paper'
import {useDispatch, useSelector} from 'react-redux'
import {createParagraphQuestionStart, editParagraphQuestionStart} from '../../redux/reducer/surveyReducer/actions'
const ParagraphPage = ({navigation, route}) => {
    const dispatch = useDispatch()
    const survey = useSelector(state => state.survey.current)
    const currentSelect = route.params ? survey.data[route.params.index] : null
    const [title, setTitle] = useState(currentSelect ? currentSelect.title : '')
    const [saved, setSaved] = useState(false)
    const editable = currentSelect ? true : false
    return(
        <View style={{flex:1, padding:10, backgroundColor: 'white'}}>
            <Subheading style={styles.heading}>QUESTION TEXT</Subheading>
            <TextInput value={title} onChangeText={text => setTitle(text)} style={{backgroundColor: 'white'}} placeholder={'Enter Your Text'}/>
            {
                title.trim() === '' && saved && <Text style={styles.error}>This field cannot be empty!</Text>
            }
            
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Button onPress={() => navigation.goBack()}>CANCEL</Button>
            <Button onPress={() => {
                if (title.trim() !== '') {
                    if (editable) {
                        dispatch(editParagraphQuestionStart({title, navigation, survey, index:route.params.index}))
                    } else {
                        dispatch(createParagraphQuestionStart({title, navigation, survey}))
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
export default ParagraphPage