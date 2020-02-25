import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {View, ScrollView, StyleSheet} from 'react-native'
import {Card, Title, Paragraph, FAB, Portal, Provider} from 'react-native-paper'
const SurveyDetailPage = ({navigation}) => {
    const [open, setOpen] = useState(false)
    const {title} = useSelector(state => state.survey.current)
    return (
        <View style={{flex:1}}>
        <Provider>
        <FAB
    style={styles.fab}
    small={false}
    icon="plus"
    onPress={() => console.log('Pressed')}
  /> 
         <Portal>
           <FAB.Group
             open={open}
             icon={ open ? 'close' : 'plus'}
             actions={[
               { icon: 'image', label:'Image' ,onPress: () => {
                   navigation.navigate('Image')
                setOpen(false)
               } },
               { icon: 'format-paragraph', label:'Paragraph' ,onPress: () => {
                navigation.navigate('Paragraph')
                setOpen(false)
               } },
               { icon: 'grid', label:'Matrix/ Rating' ,onPress: () => {
                navigation.navigate('MatrixRating')
                setOpen(false)
               } },
               { icon: 'unfold-more-horizontal', label:'Dropdown' ,onPress: () => {
                navigation.navigate('Dropdown')
                setOpen(false)
               } },
               { icon: 'text', label:'Text' ,onPress: () => {
                navigation.navigate('Text')
                setOpen(false)
               } },
               { icon: 'format-list-bulleted', label:'Multiple Choice' ,onPress: () => {
                navigation.navigate('Multiple')
                setOpen(false)
               } },
               { icon: 'magnify', label:'Question Bank' ,onPress: () => {
                navigation.navigate('Questions')
                setOpen(false)
               } },
             ]}
             onStateChange={({ open }) => setOpen(open)}
             onPress={() => {
               if (open) {
                 // do something if the speed dial is open
               }
             }}
           />
         </Portal>
        <ScrollView style={{flex:1, padding:10}}>
        <Card>
            <Card.Content>
                <Title>{title}</Title>
                <Paragraph>Page Title</Paragraph>
                <Paragraph style={{textAlign: 'center'}}>
                    You don't have any questions on this page yet
                </Paragraph>
            </Card.Content>
        </Card>
        </ScrollView>
        </Provider>
    </View>
    )
    
}
const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor:'green'
    },
  })
export default SurveyDetailPage