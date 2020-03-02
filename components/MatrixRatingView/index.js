import React, {useState} from 'react'
import {View, Dimensions, TouchableOpacity} from 'react-native'
import {TextInput, Title, Text, RadioButton, Checkbox, Subheading} from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
const MatrixRatingView = ({title, col, row,required, multiSelected, other, index, navigation, disabled}) => {
    const [buttonState, setButtonState] = useState(Array(col.length+1).fill(false).map(x => Array(row.length+1).fill(false)))
    return (
        <View style={{width:'100%'}}>
            <TouchableOpacity disabled={disabled} onPress={() => {
                navigation.navigate('MatrixRating',{
                    index,
                    editable: true
                })
            }}>
            <Title>{`${required ?'*':''}${title}`}</Title>
            <ScrollView style={{width: Dimensions.get('window').width}} horizontal={true}>
                <View style={{width:  Dimensions.get('window').width * .9}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{paddingLeft:15, paddingRight:15}}></Text>
                    {col.map((item, index) => {
                        return (<Text style={{paddingRight: 50}} key={index}>{item}</Text>)
                    })}
                </View>
                {row.map((item, index) => {
                     return (
                     <View key={index} style={{flexDirection: 'row'}}>
                         {
                             multiSelected ?
                             <View style={{flexDirection: 'row'}}>
                                {
                                    [item,...col].map((item1, index1) => {
                                        if (index1 == 0) return <Text>{item}</Text>
                                        return (<View style={{flexDirection:'row'}}><Checkbox onPress={() => {
                                            const newArr = buttonState.slice()
                                            newArr[index][index1] = true
                                            setButtonState(newArr)
                                        }} value={index1} status={buttonState[index][index1] ? 'checked' : 'unchecked'} key={index1 + 200}/><Text style={{paddingRight: 35}}></Text></View>) 
                                    })
                                }
                             </View>
                             :
                            
                             <RadioButton.Group>
                                 {
                                     [item,...col].map((item1, index1) => {
                                        if (index1 == 0) return <Text>{item}</Text>
                                        return (<View style={{flexDirection:'row'}}><RadioButton value={index1} status={buttonState[index][index1] ? 'checked' : 'unchecked'} onPress={() => {
                                            const newArr = buttonState.slice()
                                            for(let i = 0; i <= col.length; i++){
                                                newArr[index][i] = false
                                            }
                                            newArr[index][index1] = true

                                            setButtonState(newArr)
                                        }} key={index1 + 200}/><Text style={{paddingRight: 35}}></Text></View>) 
                                     })
                                 }
                             </RadioButton.Group>
                             
                         }  
                    </View>)
                })}
                {other && <View>
                <Subheading style={{fontSize: 10, color:'grey', paddingLeft:3}}>Other (please specify)</Subheading>
                <TextInput style={{backgroundColor: 'white'}} mode='outlined'/>
                </View>}
                </View>
                
            </ScrollView>
            </TouchableOpacity>
        </View>
    )
}
export default MatrixRatingView