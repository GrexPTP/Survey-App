import React, {useState} from 'react'
import {View, FlatList, StyleSheet, Text} from 'react-native'
import {FAB, Searchbar, Portal, Provider, Paragraph, Button, TextInput, Dialog} from 'react-native-paper';
import PreviewSurvey from '../../components/PreviewSurvey'
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
const SurveysPage = () => {
    const [open, setOpen] = useState(false)
    const [visible, setVisible] = useState(false)
    return(
        <View style={{flex:1}}>
            <Provider style={{backgroundColor: 'rgba(255,255,255,0.8)'}}>
            <Searchbar placeholder="Search"/>
            <FlatList style={{flex:1}}  data={DATA} renderItem={({item}) => <PreviewSurvey title={item.title}/>} keyExtractor={item =>item.id}/>
            <FAB
    style={styles.fab}
    small={false}
    icon="plus"
    onPress={() => console.log('Pressed')}
  /> 
         <Portal>
           <FAB.Group
             open={open}
             icon={'plus'}
             actions={[
               { icon: 'plus', label:'New survey' ,onPress: () => {
                setOpen(false)
                setVisible(true)
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
         <Portal>
         <Dialog
             visible={visible}
             onDismiss={() => setVisible(false)}>
            <Dialog.Title style={{textAlign:'center'}}>New Survey</Dialog.Title>
            <Dialog.Content>
              <Paragraph style={{textAlign:'center'}}>Give your survey a title</Paragraph>
              <TextInput style={{backgroundColor:'white'}}
        value={'Untitled'}
        onChangeText={() => console.log('later')}
      />
            </Dialog.Content>
            <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Cancel</Button>
              <Button onPress={() => setVisible(false)}>Done</Button>
            </Dialog.Actions>
          </Dialog>
          </Portal>
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
export default SurveysPage