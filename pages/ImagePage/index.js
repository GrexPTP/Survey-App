import React, {useState, useEffect} from 'react'
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants'
import {TextInput, Subheading, Button, Dialog, Portal, Paragraph, Provider, Text} from 'react-native-paper'
const ImagePage = () => {
    const [visible, setVisible] = useState(false)
    const [image, setImage] = useState('')
    useEffect(() => {
        getPermissionAsync()

    }, [])
    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          base64: true,
          quality: 1
        });
    
        
        if (!result.cancelled) {
            setImage(result.uri)
            console.log(result.uri)
        //   if(type == 'profile') {
        //     this.setState({ avaPictures: [...this.state.avaPictures,`data:image/jpeg;name=av.jpg;base64,${result.base64}`], displayAva: result.uri });
        //   } else if (type == 'front') {
        //     this.setState({ frontPictures: [...this.state.frontPictures,`data:image/jpeg;name=av.jpg;base64,${result.base64}`], displayFront: result.uri });
        //   } else {
        //     this.setState({ backPictures: [...this.state.backPictures,`data:image/jpeg;name=av.jpg;base64,${result.base64}`], displayBack: result.uri });
        //   }
          
        }
      };
    
      const takeImage = async () => {
          let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true,
            quality: 1
          })
          if (!result.cancelled) {
            setImage(result.uri)
            console.log(result.uri)
            // if(type == 'profile') {
            //   this.setState({ avaPictures: [...this.state.avaPictures,`data:image/jpeg;name=bla.jpg;base64,${result.base64}`], displayAva: result.uri });
            // } else if (type == 'front') {
            //   this.setState({ frontPictures: [...this.state.frontPictures,`data:image/jpeg;name=bla.jpg;base64,${result.base64}`], displayFront: result.uri });
            // } else {
            //   this.setState({ backPictures: [...this.state.backPictures,`data:image/jpeg;name=bla.jpg;base64,${result.base64}`], displayBack: result.uri });
            // }
            
          }
      }
    return (
        <Provider>
        <View style={{flex:1, padding:10, backgroundColor: 'white'}}>
            <Subheading style={styles.heading}>IMAGE LABEL</Subheading>
            <TextInput style={{backgroundColor: 'white'}} placeholder={'Enter image label (optional)'}/>
            <Subheading style={styles.heading}>IMAGE PREVIEW</Subheading>
            <View style={{height:210, alignItems:'center'}}>
            {image ?  <Image style={{width: 150, height: 200}} source={{uri: image}}  />  : <View></View>}
            </View>
            
            <Button mode="contained" onPress={() => setVisible(true)}>ADD IMAGE</Button>
            <Subheading style={styles.heading}>IMAGE NICKNAME (OPTIONAL)</Subheading>
            <TextInput style={{backgroundColor: 'white'}} placeholder={'Enter image nickname (optional)'}/>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Button>CANCEL</Button>
            <Button>SAVE</Button>
            </View>
            <Portal>
          <Dialog
             visible={visible}
             onDismiss={() => setVisible(false)}>
            <Dialog.Content style={{alignItems:'center'}}>
              <TouchableOpacity style={{height:30}} onPress={() => takeImage()}><Text style={{fontSize:18}}>Take a picture</Text></TouchableOpacity>
              <TouchableOpacity style={{height:30}} onPress={() => pickImage()}><Text style={{fontSize:18}}>Select an image from gallery</Text></TouchableOpacity>
            </Dialog.Content>
          </Dialog>
        </Portal>
        </View>
        </Provider>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize:12,
        color: 'purple'
    }
})
export default ImagePage