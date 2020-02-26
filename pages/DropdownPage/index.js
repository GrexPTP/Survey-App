import React, {useState, useEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import {TextInput, Subheading, Button, Text, Switch} from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux'
import {createDropdownQuestionStart} from '../../redux/reducer/surveyReducer/actions'
let answersList = ['']
const GeneratedInput = ({index}) => {
    const [value, setValue] = useState()
    return (
        <TextInput value={value} onChangeText={text => {
            answersList[index] = text
            setValue(text)
        }} style={{backgroundColor: 'white', width:'80%'}} placeholder={'Enter Your Text'}/>
    )
}
const DropdownPage = ({navigation}) => {
    const [title, setTitle] = useState('')
    const [other, setOther] = useState(false)
    const [required, setRequired] = useState(false)
    const [answers, setAnswers] = useState([''])
    const dispatch = useDispatch()
    const survey = useSelector(state => state.survey.current)
    useEffect(() => {
        answersList = [...answers]
    }, [])
    return (
        <View style={{flex:1, padding:10, backgroundColor: 'white'}}>
            <Subheading style={styles.heading}>QUESTION TEXT</Subheading>
            <TextInput value={title} onChangeText={text => setTitle(text)} style={{backgroundColor: 'white'}} placeholder={'Enter Your Text'}/>
            <Subheading style={styles.heading}>ANSWER CHOICES</Subheading>
            {answers.map((item, index) => {
                return (
                    <View key={index} style={{flexDirection:'row', alignItems:'center'}}>
                        <GeneratedInput key={index} answers={answers} setAnswers={setAnswers}/>
                        <TouchableOpacity onPress={() => {
                            answersList.splice(index, 0, '')
                            const newList = [...answersList]
                            setAnswers(newList)
                        }}><AntDesign name="pluscircleo" size={32} color="purple" /></TouchableOpacity>
                        <TouchableOpacity disabled={answers.length < 2} onPress={() => {
                            answersList.splice(index, 1)
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
            <Button onPress={() => dispatch(createDropdownQuestionStart({data:{title, answers: answersList, other, required}, navigation, survey}))}>SAVE</Button>
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
export default DropdownPage