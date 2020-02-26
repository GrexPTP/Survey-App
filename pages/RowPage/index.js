import React, {useState} from 'react'
import {View, StyleSheet, TouchableOpacity, Picker} from 'react-native'
import {TextInput, Subheading, Button, Text, Switch} from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
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
const RowPage = () => {
    
    const [answers, setAnswers] = useState([""])
    const [multipled, setMultipled] = useState(true)
    const [multiSelected, setMultiSelected] = useState(true)
    return (
        <View style={{flex:1, padding:10, backgroundColor: 'white'}}>
            <Subheading style={styles.heading}>Number of Rows</Subheading>
            <Picker
            selectedValue={multipled}
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue, itemIndex) =>
            setMultipled(itemValue)
            }>
            <Picker.Item label="Multiple rows (rows labels)" value={true} />
            <Picker.Item label="Single row (no row labels)" value={false} />
            </Picker>
            <Subheading style={styles.heading}>ROW LABELS</Subheading>
            {answers.map((item, index) => {
                return (
                    <View key={index} style={{flexDirection:'row', alignItems:'center'}}>
                        <GeneratedInput key={index} answers={answers} setAnswers={setAnswers}/>
                        <TouchableOpacity onPress={() => {
                            const newArr = [...answers]
                            newArr.splice(index, 0, '')
                            setAnswers(newArr)
                        }}><AntDesign name="pluscircleo" size={32} color="purple" /></TouchableOpacity>
                        <TouchableOpacity disabled={answers.length < 2} onPress={() => {
                            const newArr = [...answers]
                            newArr.splice(index, 1)
                            setAnswers(newArr)
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
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Button>CANCEL</Button>
            <Button>SAVE</Button>
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
export default RowPage