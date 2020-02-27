import React, {useState} from 'react'
import {View, StyleSheet, TouchableOpacity, Picker} from 'react-native'
import {TextInput, Subheading, Button, Text, Switch} from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
let rowList = ['']
const GeneratedInput = ({index}) => {
    const [value, setValue] = useState()
    return (
        <TextInput value={value} onChangeText={text => {
            rowList[index] = text
            setValue(text)
        }} style={{backgroundColor: 'white', width:'80%'}} placeholder={'Enter Your Text'}/>
    )
}
const RowPage = ({route,navigation}) => {
    
    const [answers, setAnswers] = useState([""])
    const [multipled, setMultipled] = useState(true)
    const [multiSelected, setMultiSelected] = useState(true)
    const {setRow, setRowNum} = route.params
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
                        <GeneratedInput index={index} key={index} answers={answers} setAnswers={setAnswers}/>
                        <TouchableOpacity onPress={() => {
                            rowList.splice(index, 0, '')
                            const newList = [...rowList]
                            setAnswers(newList)
                        }}><AntDesign name="pluscircleo" size={32} color="purple" /></TouchableOpacity>
                        <TouchableOpacity disabled={answers.length < 2} onPress={() => {
                            rowList.splice(index, 1)
                            const newList = [...rowList]
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
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Button onPress={() => {
                navigation.goBack()
            }}>CANCEL</Button>
            <Button onPress={() => {
                console.log(rowList,'asv')
                setRow(rowList)
                setRowNum(rowList.length)
                navigation.goBack()
            }}>SAVE</Button>
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