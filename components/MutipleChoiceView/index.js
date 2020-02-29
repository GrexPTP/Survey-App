import React, {useState} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {TextInput, Title, Checkbox, RadioButton, Text,Subheading} from 'react-native-paper'
const MultipleChoiceView = ({title, multipled, answers, required, other, index, navigation}) => {
    const [value, setValue] = useState(answers[0])
    const [selects, setSelects] = useState(Array(answers.length).fill(false))
    return (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Multiple', {
                    index,
                    editable: true
                })
            }}>
            <Title>{`${required ?'*':''}${title}`}</Title>
            {multipled ?
                answers.map((item, index) => {
                    return (
                        <View key={index} style={style.radioContainer}>
                            <Checkbox status={selects[index] ? 'checked' : 'unchecked'} onPress={() => {
                                     const newVal = [...selects]
                                     newVal[index] = !selects[index]
                                     setSelects(newVal)
                            }} />
                            <Text>{item}</Text>           
                        </View>
                    )
                })
             :
                <RadioButton.Group value={value} onValueChange={value => setValue(value)} >
                    {answers.map((item, index) => {
                        return (
                            <View  key={index} style={style.radioContainer}>
                                <RadioButton value={item} />
                                <Text>{item}</Text>           
                            </View>
                        )
                    })}
                    
                </RadioButton.Group>
            
            }
                        {other && <View>
                <Subheading style={{fontSize: 10, color:'grey', paddingLeft:3}}>Other (please specify)</Subheading>
                <TextInput style={{backgroundColor: 'white'}} mode='outlined'/>
                </View>}
                </TouchableOpacity>
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