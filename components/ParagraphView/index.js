import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import {Paragraph} from 'react-native-paper'
const ParagraphView = ({title}) => {
    return(
        <View style={{width: '100%'}}>
            <TouchableOpacity>
            <Paragraph>
                {title}
            </Paragraph>
            </TouchableOpacity>
        </View>
    )
}
export default ParagraphView