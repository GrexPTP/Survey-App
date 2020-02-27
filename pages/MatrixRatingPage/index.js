import React, {useState} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {TextInput, Subheading, Button, Text, Switch} from 'react-native-paper'
import {useSelector, useDispatch} from 'react-redux'
import {createMatrixRatingQuestionStart} from '../../redux/reducer/surveyReducer/actions'

const MatrixRatingPage = ({route, navigation}) => {
    const [other, setOther] = useState(false)
    const [required, setRequired] = useState(false)
    const [colNum, setColNum] = useState(1)
    const [rowNum, setRowNum] = useState(1)
    const [col, setCol] = useState([""])
    const [row, setRow] = useState([""])
    const [title, setTitle] = useState('')
    const survey = useSelector(state => state.survey.current)
    const dispatch = useDispatch()
    let {colForced, colWeighted, rowMultipled, rowMultiSelected} = {colForced:false, colWeighted:false, rowMultipled:false, rowMultiSelected:false}
    if (route.params) {
        if (route.params.colForced) {
            colForced = route.params.colForced 
        } 
        if (route.params.colWeighted) {
            colWeighted = route.params.colWeighted 
        }
        if (route.name.rowMultipled) {
            rowMultipled = route.params.rowMultipled 
        }
        if (route.name.rowMultiSelected) {
            rowMultiSelected = route.params.rowMultiSelected
        }
    }
    
    let forced = colForced ? colForced : false
    let weighted = colWeighted ? colWeighted : false
    let multipled = rowMultipled ? rowMultipled : false
    let multiSelected = rowMultiSelected ? rowMultiSelected : false
    return (
        <View style={{flex:1, padding:10, backgroundColor: 'white'}}>
            <Subheading style={styles.heading}>QUESTION TEXT</Subheading>
            <TextInput value={title} onChangeText={text => setTitle(text)} style={{backgroundColor: 'white'}} placeholder={'Enter Your Text'}/>
            <TouchableOpacity onPress={() => navigation.navigate('Rows', {
                setRowNum,
                setRow,
                row
            })}>
            <View style={{flexDirection:'row', justifyContent:'space-between', padding: 10, borderBottomColor:'black', borderBottomWidth:1}}>
                <Text>Rows</Text>
                <Text>{rowNum}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Columns', {
                setColNum,
                setCol,
                col
            })}>
            <View style={{flexDirection:'row', justifyContent:'space-between', padding: 10, borderBottomColor:'black', borderBottomWidth:1}}>
                <Text>Columns</Text>
                <Text>{colNum}</Text>
            </View>
            </TouchableOpacity>
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
                const data = {
                    title,
                    forced,
                    weighted,
                    multipled,
                    multiSelected,
                    col,
                    row,
                    other,
                    required
                }
                dispatch(createMatrixRatingQuestionStart({data, navigation, survey}))
                
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
export default MatrixRatingPage