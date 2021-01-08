import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Alert,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';

import {getPermissionAndroid} from '../helper';

import ViewShot, {captureRef} from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';

const PostCreateScreen = () => {
  const viewRef = useRef();
  const {width, height} = Dimensions.get('screen');
  const [mainText, setMainText] = React.useState('This is the main text');

  //Save image to Device
  const downloadImage = async () => {
    try {
      // react-native-view-shot caputures component
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });

      if (Platform.OS === 'android') {
        const granted = await getPermissionAndroid();
        if (!granted) {
          return;
        }
      }
      // cameraroll saves image
      const image = CameraRoll.save(uri, 'photo');
      if (image) {
        Alert.alert(
          '',
          'Image saved successfully.',
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
      }}>
      <ViewShot
        ref={viewRef}
        style={{width: '100%', height: 200, backgroundColor: 'red'}}>
        <Text style={{fontSize: 50, color: 'white'}}>{mainText}</Text>
        <TouchableOpacity onPress={() => downloadImage()}>
          <Text>Save Imgage</Text>
        </TouchableOpacity>
      </ViewShot>
      <View style={{width: width}}>
        <TextInput
          onChangeText={(text) => setMainText(text)}
          style={{width: '100%', backgroundColor: 'gray'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PostCreateScreen;
