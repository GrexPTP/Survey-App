import React, {useState} from 'react'
import {View, Picker} from 'react-native'
import {Title} from 'react-native-paper'
const DropdownView = () => {
    const [value, setValue] = useState(0)
    return (
        <View>
            <Title>Title</Title>
            <Picker
            
            selectedValue={value}
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue, itemIndex) =>
            setValue(itemValue)
            }>
            <Picker.Item label="Sample 0" value={0} />
            <Picker.Item label="Sample 1" value={1} />
            </Picker>
        </View>
    )
}
export default DropdownView