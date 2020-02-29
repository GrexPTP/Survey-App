import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import {TextInput, Title} from 'react-native-paper'
const TextView = ({title, required, index, navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Text',{
                    index,
                    editable: true
                })
            }}>
            <Title>{`${required ?'*':''}${title}`}</Title>
            <TextInput style={{backgroundColor: 'white'}} mode='outlined' multiline={true} numberOfLines={5}/>
            </TouchableOpacity>
        </View>
    )
}
export default TextView