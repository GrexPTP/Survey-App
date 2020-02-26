import React, {useState} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {TextInput, Subheading, Button, Text, Switch} from 'react-native-paper'

const MatrixRatingPage = ({navigation}) => {
    const [other, setOther] = useState(false)
    const [required, setRequired] = useState(false)
    const [colNum, setColNum] = useState(3)
    const [rowNum, setRowNum] = useState(3)
    return (
        <View style={{flex:1, padding:10, backgroundColor: 'white'}}>
            <Subheading style={styles.heading}>QUESTION TEXT</Subheading>
            <TextInput style={{backgroundColor: 'white'}} placeholder={'Enter Your Text'}/>
            <TouchableOpacity onPress={() => navigation.navigate('Rows', {
                setRow: setRowNum
            })}>
            <View style={{flexDirection:'row', justifyContent:'space-between', padding: 10, borderBottomColor:'black', borderBottomWidth:1}}>
                <Text>Rows</Text>
                <Text>{colNum}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Columns', {
                setCol: setColNum
            })}>
            <View style={{flexDirection:'row', justifyContent:'space-between', padding: 10, borderBottomColor:'black', borderBottomWidth:1}}>
                <Text>Columns</Text>
                <Text>{rowNum}</Text>
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
export default MatrixRatingPage