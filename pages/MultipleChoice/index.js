import React, {useState, useEffect} from 'react'
import {View, StyleSheet, TouchableOpacity, Picker} from 'react-native'
import {TextInput, Subheading, Button, Text, Switch} from 'react-native-paper'
import {useSelector, useDispatch} from 'react-redux'
import { AntDesign } from '@expo/vector-icons';
import {createMultipleQuestionStart, editMultipleQuestionStart} from '../../redux/reducer/surveyReducer/actions'
let answersList = ['']
const GeneratedInput = ({index, item}) => {
    const [value, setValue] = useState(item)
    return (
        <TextInput value={value} onChangeText={text =>{ 
            answersList[index] = text
            setValue(text)
        }} style={{backgroundColor: 'white', width:'80%'}} placeholder={'Enter Your Text'}/>
    )
}
const MultipleChoicePage = ({navigation,route}) => {
    const survey = useSelector(state => state.survey.current)
    const currentSelect = route.params ? survey.data[route.params.index] : null
    const [title, setTitle] = useState(currentSelect ? currentSelect.title : '')
    const [other, setOther] = useState(currentSelect ? currentSelect.other : false)
    const [required, setRequired] = useState(currentSelect ? currentSelect.required : false)
    const [answers, setAnswers] = useState(currentSelect ? currentSelect.answers : [''])
    const [multiSelected, setMultiSelected] = useState(currentSelect ? currentSelect.multiSelected :true)
    const [saved, setSaved] = useState(false)
    const dispatch = useDispatch()
    const editable = currentSelect ? true : false
    
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
                        <GeneratedInput index={index} item={item}/>
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
            <Picker
            selectedValue={multiSelected}
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue, itemIndex) =>
            setMultiSelected(itemValue)
            }>
            <Picker.Item label="Multi-select (checkboxes)" value={true} />
            <Picker.Item label="Single-select (radio buttons)" value={false} />
            </Picker>
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
                let tempAns = answersList
                if (other) {
                    tempAns = [...answersList,'Other']
                }
                if (title.trim() !== ''){
                    if (editable) {
                        dispatch(editMultipleQuestionStart({data:{
                            title,answers: tempAns,required,other,multiSelected
                        }, navigation, survey, index:route.params.index }))
                    } else {
                        dispatch(createMultipleQuestionStart({data:{
                        title,answers: tempAns,required,other,multiSelected
                    }, navigation, survey }))
                    }
                    
                } else {
                    setSaved(true)
                }
                
        }
            }>SAVE</Button>
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
export default MultipleChoicePage