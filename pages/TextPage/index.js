import React from 'react'
import {View,StyleSheet} from 'react-native'
import {TextInput, Subheading, Button} from 'react-native-paper'
const TextPage = () => {
    return (
        <View style={{flex:1, padding:10, backgroundColor: 'white'}}>
            <Subheading style={styles.heading}>QUESTION TEXT</Subheading>
            <TextInput style={{backgroundColor: 'white'}} placeholder={'Enter Your Text'}/>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Button>CANCEL</Button>
            <Button>SAVE</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize:12,
        color: 'purple'
    }
})
export default TextPage