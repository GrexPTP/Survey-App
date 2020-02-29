import React, {useState} from 'react'
import {View, Picker, TouchableOpacity} from 'react-native'
import {Title, Subheading, TextInput} from 'react-native-paper'
const DropdownView = ({title, answers, required, other, index, navigation}) => {
    const [value, setValue] = useState(0)
    return (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Dropdown',{
                    index,
                    editable: true
                })
            }}>
            <Title>{`${required ?'*':''}${title}`}</Title>
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
            {other && <View>
                <Subheading style={{fontSize: 10, color:'grey', paddingLeft:3}}>Other (please specify)</Subheading>
                <TextInput style={{backgroundColor: 'white'}} mode='outlined'/>
                </View>}
                </TouchableOpacity>
        </View>
    )
}

export default DropdownView