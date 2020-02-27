import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {TextInput, Title, Checkbox, RadioButton, Text} from 'react-native-paper'
const MultipleChoiceView = ({title, multipled, answers}) => {
    const [value, setValue] = useState(answers[0])
    return (
        <View>
            <Title>{title}</Title>
            {multipled ?
                answers.map((item, index) => {
                    return (
                        <View key={index} style={style.radioContainer}>
                            <Checkbox/>
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