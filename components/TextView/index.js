import React from 'react'
import {View} from 'react-native'
import {TextInput, Title} from 'react-native-paper'
const TextView = ({title}) => {
    return (
        <View>
            <Title>{title}</Title>
            <TextInput style={{backgroundColor: 'white'}} mode='outlined' multiline={true} numberOfLines={5}/>
        </View>
    )
}
export default TextView