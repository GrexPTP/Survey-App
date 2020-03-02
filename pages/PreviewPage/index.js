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
const PreviewPage = ({navigation}) => {
    const [open, setOpen] = useState(false)
    const [titleVisible, setTitleVisible] = useState(false)
    const [pageTitleVisible, setPageTitleVisible] = useState(false)
    const survey = useSelector(state => state.survey.current)
    const [editTitle, setEditTitle] = useState(survey.title)
    const [editPageTitle, setEditPageTitle] = useState(survey.page_title)
    const dispatch = useDispatch()
    return (
        <View style={{flex:1}}>
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
                    return <ImageView index={index} image={item.image} navigation={navigation} disabled={true}/>
                  } else if (item.type == 'paragraph') {
                    return <ParagraphView title={item.title} index={index} navigation={navigation} disabled={true}/>
                  } else if (item.type == 'text') {
                    return <TextView title={item.title} required={item.required} index={index} navigation={navigation} disabled={true} />
                  } else if (item.type == 'multiple') {
                    return <MultipleChoiceView disabled={true} title={item.title} multipled={item.multiSelected} answers={item.answers} required={item.required} other={item.other} index={index} navigation={navigation} />
                  } else if (item.type == 'dropdown') {
                    return <DropdownView disabled={true} title={item.title} answers={item.answers} required={item.required} other={item.other} index={index} navigation={navigation}/>
                  } else if (item.type == 'matrix') {
                    return <MatrixRatingView disabled={true} title={item.title} col={item.col} row={item.row} required={item.required} other={item.other} multiSelected={item.multiSelected} index={index} navigation={navigation}/>
                  }
                }) : <Paragraph style={{textAlign: 'center'}}>
                    You don't have any questions on this page yet
                </Paragraph> }
            </Card.Content>
        </Card>
        </ScrollView>
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
export default PreviewPage