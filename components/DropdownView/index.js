import React, {useState} from 'react'
import {View, Picker} from 'react-native'
import {Title} from 'react-native-paper'
const DropdownView = ({title, answers}) => {
    const [value, setValue] = useState(0)
    return (
        <View>
            <Title>{title}</Title>
            <Picker
            
            selectedValue={value}
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue, itemIndex) =>
            setValue(itemValue)
            }>
            {answers.map((item, index) => {
                return <Picker.Item label={item} value={index} key={index} />
            })}
            </Picker>
        </View>
    )
}
export default DropdownView