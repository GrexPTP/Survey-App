import React, {useState,useEffect} from 'react'
import {View, StyleSheet, TouchableOpacity, Picker} from 'react-native'
import {TextInput, Subheading, Button, Text, Switch} from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
let colList = ['']
const GeneratedInput = ({index, defaultVal}) => {
    const [value, setValue] = useState(defaultVal)
    return (
        <TextInput  value={value} onChangeText={text => {
            colList[index] = text
            setValue(text)
        }} style={{backgroundColor: 'white', width:'80%'}} placeholder={'Enter Your Text'}/>
    )
}
const ColumnPage = ({route, navigation}) => {
    const {setCol, setColNum, col} = route.params
    const [weighted, setWeighted] = useState(false)
    const [forced, setForced] = useState(false)
    const [answers, setAnswers] = useState(col)
    
    useEffect(() => {
        colList = col
    }, [])
    return (
        <View style={{flex:1, padding:10, backgroundColor: 'white'}}>
            <Subheading style={styles.heading}>COLUMNS LABEL</Subheading>
            {answers.map((item, index) => {
                return (
                    <View key={index} style={{flexDirection:'row', alignItems:'center'}}>
                        <GeneratedInput defaultVal={item} 
                         index={index} key={index} answers={answers} setAnswers={setAnswers}/>
                        <TouchableOpacity onPress={() => {
                            colList.push('')
                            const newList = [...colList]
                            setAnswers(newList)
                        }}><AntDesign name="pluscircleo" size={32} color="purple" /></TouchableOpacity>
                        <TouchableOpacity disabled={answers.length < 2} onPress={() => {
                            colList.pop()
                            const newList = [...colList]
                            setAnswers(newList)
                            }}><AntDesign name="minuscircleo" size={32} color="purple" /></TouchableOpacity>
                    </View>
                )
            })}
            <Subheading style={styles.heading}>SETTINGS</Subheading>
            <View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text>Use Column Weights</Text>
                    <Switch value={weighted} onValueChange={() => setWeighted(!weighted)}/>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>Forced Ranking (one response per column)</Text>
                <Switch value={forced} onValueChange={() => setForced(!forced)} />
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Button onPress={() => navigation.navigate('MatrixRating')}>CANCEL</Button>
            <Button onPress={() => {
                setCol(colList)
                setColNum(colList.length)
                navigation.navigate('MatrixRating',{
                    colWeighted: weighted,
                    colForced: forced
                })
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
export default ColumnPage