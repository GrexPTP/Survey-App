import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {View, ScrollView, StyleSheet, Image} from 'react-native'
import {Card, Title, Paragraph, FAB, Portal, Provider, Dialog, TextInput, Button} from 'react-native-paper'
import ParagraphView from '../../components/ParagraphView'
import ImageView from '../../components/ImageView'
import TextView from '../../components/TextView'
import MultipleChoiceView from '../../components/MutipleChoiceView'
import DropdownView from '../../components/DropdownView'
import MatrixRatingView from '../../components/MatrixRatingView'
import {editSurveyStart} from '../../redux/reducer/surveyReducer/actions'
const SurveyDetailPage = ({navigation}) => {
    const [open, setOpen] = useState(false)
    const [titleVisible, setTitleVisible] = useState(false)
    const [pageTitleVisible, setPageTitleVisible] = useState(false)
    const survey = useSelector(state => state.survey.current)
    const [editTitle, setEditTitle] = useState(survey.title)
    const [editPageTitle, setEditPageTitle] = useState(survey.page_title)
    const dispatch = useDispatch()
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
               { icon: 'magnify', label:'Preview' ,onPress: () => {
                navigation.navigate('Preview')
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
         <Portal>
         <Dialog
             visible={titleVisible}
             onDismiss={() => setTitleVisible(false)}>
            <Dialog.Title style={{textAlign:'center'}}>Edit Title</Dialog.Title>
            <Dialog.Content>
              <Paragraph style={{textAlign:'center'}}>Enter new title</Paragraph>
              <TextInput style={{backgroundColor:'white'}}
        value={editTitle}
        onChangeText={text => setEditTitle(text)}
      />
            </Dialog.Content>
            <Dialog.Actions>
            <Button onPress={() => setTitleVisible(false)}>Cancel</Button>
              <Button onPress={() => {
                dispatch(editSurveyStart({title: editTitle, page_title: editPageTitle ,survey}))
                setTitleVisible(false)
                }}>Done</Button>
            </Dialog.Actions>
          </Dialog>
          </Portal>


          <Portal>
         <Dialog
             visible={pageTitleVisible}
             onDismiss={() => setPageTitleVisible(false)}>
            <Dialog.Title style={{textAlign:'center'}}>Edit Page Title</Dialog.Title>
            <Dialog.Content>
              <Paragraph style={{textAlign:'center'}}>Enter new page title</Paragraph>
              <TextInput style={{backgroundColor:'white'}}
        value={editPageTitle}
        onChangeText={text => setEditPageTitle(text)}
      />
            </Dialog.Content>
            <Dialog.Actions>
            <Button onPress={() => setPageTitleVisible(false)}>Cancel</Button>
              <Button onPress={() => {
                dispatch(editSurveyStart({title: editTitle, page_title: editPageTitle,survey}))
                setPageTitleVisible(false)
                }}>Done</Button>
            </Dialog.Actions>
          </Dialog>
          </Portal>
        <ScrollView style={{flex:1, padding:10}}>
        <Card>
            <Card.Content>
                <Title onPress={() => {
                  setTitleVisible(true)
                }}>{survey.title}</Title>
                <Paragraph onPress={() => {
                  setPageTitleVisible(true)
                }}>{survey.page_title}</Paragraph>
                {survey.data ? survey.data.map((item, index) => {
                  if (item.type == 'image') {
                    return <ImageView index={index} image={item.image} navigation={navigation}/>
                  } else if (item.type == 'paragraph') {
                    return <ParagraphView title={item.title} index={index} navigation={navigation}/>
                  } else if (item.type == 'text') {
                    return <TextView title={item.title} required={item.required} index={index} navigation={navigation} />
                  } else if (item.type == 'multiple') {
                    return <MultipleChoiceView title={item.title} multipled={item.multiSelected} answers={item.answers} required={item.required} other={item.other} index={index} navigation={navigation} />
                  } else if (item.type == 'dropdown') {
                    return <DropdownView title={item.title} answers={item.answers} required={item.required} other={item.other} index={index} navigation={navigation}/>
                  } else if (item.type == 'matrix') {
                    return <MatrixRatingView title={item.title} col={item.col} row={item.row} required={item.required} other={item.other} multiSelected={item.multiSelected} index={index} navigation={navigation}/>
                  }
                }) : <Paragraph style={{textAlign: 'center'}}>
                    You don't have any questions on this page yet
                </Paragraph> }
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