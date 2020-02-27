import React from 'react'
import {View, Dimensions} from 'react-native'
import {TextInput, Title, Text, RadioButton} from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
const MatrixRatingView = ({title, col, row}) => {
    return (
        <View style={{width:'100%'}}>
            <Title>{title}</Title>
            <ScrollView style={{width: Dimensions.get('window').width}} horizontal={true}>
                <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{paddingLeft:15, paddingRight:15}}></Text>
                    {col.map((item, index) => {
                        return (<Text style={{paddingRight: 50}} key={index}>{item}</Text>)
                    })}
                </View>
                {row.map((item, index) => {
                     return (
                     <View key={index} style={{flexDirection: 'row'}}>
                            {[item,...col].map((item1, index1) => {
                                if (index1 == 0) return <Text>{item}</Text>
                                return (<View style={{flexDirection:'row'}}><RadioButton key={index1 + 200}/><Text style={{paddingRight: 35}}></Text></View>) 
                             })}
                    </View>)
                })}
                </View>
                
            </ScrollView>
        </View>
    )
}
export default MatrixRatingView