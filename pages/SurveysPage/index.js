import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {View, FlatList, StyleSheet, Text} from 'react-native'
import {FAB, Searchbar, Portal, Provider, Paragraph, Button, TextInput, Dialog} from 'react-native-paper';
import {createSurveyStart} from '../../redux/reducer/surveyReducer/actions'
import {loadListStart} from '../../redux/reducer/listReducer/actions'
import PreviewSurvey from '../../components/PreviewSurvey'
import Constants from 'expo-constants';
const SurveysPage = ({navigation}) => {
    const [open, setOpen] = useState(false)
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [query, setQuery] = useState('')
    const filter = useSelector(state => state.list.surveys)
    const [items, setItems] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadListStart())
    }, [])
    useEffect(() => {
      setItems(filter)
    }, [filter])
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        const isFocused = navigation.isFocused();
        if (isFocused) dispatch(loadListStart())
      });
      return unsubscribe;
    }, [navigation]);
    const fillQuery = (query) => {
      if (query != '') {
        const newData = filter.filter(item => {      
          const itemData = `${item.title.toUpperCase()} `;
           const textData = query.toUpperCase(); 
           return itemData.indexOf(textData) > -1 && query ;    
        });
        
        setItems(newData) 
      setQuery(query)
      } else {
        setItems(filter)
        setQuery(query)
      }
      
  }
    return(
        <View style={{flex:1, paddingTop:Constants.statusBarHeight}}>
            <Provider style={{backgroundColor: 'rgba(255,255,255,0.8)'}}>
            <Searchbar placeholder="Search" onChangeText={query => fillQuery(query) } value={query}/>
            <FlatList style={{flex:1}}  data={items} renderItem={({item}) => <PreviewSurvey title={item.title} updated={item.updated_at} id={item.id} navigation={navigation}/>} keyExtractor={item =>item.id}/>
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
        value={title}
        onChangeText={text => setTitle(text)}
      />
            </Dialog.Content>
            <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Cancel</Button>
              <Button onPress={() => {
                dispatch(createSurveyStart({title, navigation}))
                setVisible(false)
                }}>Done</Button>
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