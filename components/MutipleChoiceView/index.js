import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {TextInput, Title, Checkbox, RadioButton, Text} from 'react-native-paper'
const MultipleChoiceView = () => {
    const [value, setValue] = useState('first')
    return (
        <View>
            <Title>Title</Title>
            <RadioButton.Group value={value} onValueChange={value => setValue(value)} >
            <View style={style.radioContainer}>
            <RadioButton value="first" />
          <Text>First</Text>
          
        </View>
        <View style={style.radioContainer}>
        <RadioButton value="second" />
          <Text>Second</Text>
          
        </View>
            </RadioButton.Group>
        </View>
    )
}
const style = StyleSheet.create({
    radioContainer: {
        flexDirection:'row',
        alignItems:'center'
    }
})
export default MultipleChoiceView