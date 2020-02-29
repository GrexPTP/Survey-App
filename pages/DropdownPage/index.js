import React, {useState, useEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import {TextInput, Subheading, Button, Text, Switch} from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux'
import {createDropdownQuestionStart, editDropdownQuestionStart} from '../../redux/reducer/surveyReducer/actions'
let answersList = ['']
const GeneratedInput = ({index,item}) => {
    const [value, setValue] = useState(item)
    return (
        <TextInput value={value} onChangeText={text => {
            answersList[index] = text
            setValue(text)
        }} style={{backgroundColor: 'white', width:'80%'}} placeholder={'Enter Your Text'}/>
    )
}
const DropdownPage = ({navigation, route}) => {
    const survey = useSelector(state => state.survey.current)
    const currentSelect = route.params ? survey.data[route.params.index] : null
    const [saved, setSaved] = useState(false)
    const [title, setTitle] = useState(currentSelect ? currentSelect.title : '')
    const [other, setOther] = useState(currentSelect ? currentSelect.required: false)
    const [required, setRequired] = useState(currentSelect ? currentSelect.required : false)
    const [answers, setAnswers] = useState(currentSelect ? currentSelect.answers : [''])
    const editable = currentSelect ? true : false
    const dispatch = useDispatch()
    
    useEffect(() => {
        answersList = [...answers]
    }, [])
    return (
        <View style={{flex:1, padding:10, backgroundColor: 'white'}}>
            <Subheading style={styles.heading}>QUESTION TEXT</Subheading>
            <TextInput value={title} onChangeText={text => setTitle(text)} style={{backgroundColor: 'white'}} placeholder={'Enter Your Text'}/>
            {
                title.trim() === '' && saved && <Text style={styles.error}>This field cannot be empty!</Text>
            }
            <Subheading style={styles.heading}>ANSWER CHOICES</Subheading>
            {answers.map((item, index) => {
                return (
                    <View key={index} style={{flexDirection:'row', alignItems:'center'}}>
                        <GeneratedInput item={item} index={index} key={index} answers={answers} setAnswers={setAnswers}/>
                        <TouchableOpacity onPress={() => {
                            answersList.push('')
                            const newList = [...answersList]
                            setAnswers(newList)
                        }}><AntDesign name="pluscircleo" size={32} color="purple" /></TouchableOpacity>
                        <TouchableOpacity disabled={answers.length < 2} onPress={() => {
                            answersList.pop()
                            const newList = [...answersList]
                            setAnswers(newList)
                            }}><AntDesign name="minuscircleo" size={32} color="purple" /></TouchableOpacity>
                    </View>
                )
            })}
            <Subheading style={styles.heading}>SETTINGS</Subheading>
            <View style={{padding:5}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text>Add "Other" as an answer choice</Text>
                    <Switch value={other} onValueChange={() => setOther(!other)}/>
                </View>
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
                        dispatch(editDropdownQuestionStart({data:{title, answers: answersList, other, required}, navigation, survey, index:route.params.index}))
                    } else {
                        dispatch(createDropdownQuestionStart({data:{title, answers: answersList, other, required}, navigation, survey}))
                    }
                    
                } else {
                    setSaved(true)
                }
                
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
export default DropdownPage