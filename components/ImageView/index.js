import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
const ImageView = ({index, image, navigation}) => {
    return(
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Image',{
                    index,
                    editable:true
                })
            }}>
            <Image style={{width: 200, height:300}} source={{uri : image}}/>
            </TouchableOpacity>
        </View>
    )
}
export default ImageView