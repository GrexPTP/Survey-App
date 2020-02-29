import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import {Paragraph} from 'react-native-paper'
const ParagraphView = ({title, index, navigation}) => {
    return(
        <View style={{width: '100%'}}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Paragraph',{
                    index,
                    editable: true
                })
            }}>
            <Paragraph>
                {title}
            </Paragraph>
            </TouchableOpacity>
        </View>
    )
}
export default ParagraphView