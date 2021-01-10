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
  ScrollView,
  Image,
} from 'react-native';
import {getPermissionAndroid} from '../helper';
import ViewShot, {captureRef} from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import LinearGradient from 'react-native-linear-gradient';

import {title, bgGray} from '../Assets/colors';

//Icons
import Ar_Down from '../Assets/Icons/ar_down.js';
import Comment from '../Assets/Icons/comment';
import Retweet from '../Assets/Icons/retweet';
import Like from '../Assets/Icons/like';
import Share from '../Assets/Icons/share';

//Components
import ProfileImg from '../Ui/profileImg';
import ProfileName from '../Ui/profileName';
import MainText from '../Ui/mainTxt';
import DataTime from '../Ui/dataAndTime';
import Client from '../Ui/client';
import Stats from '../Ui/stats';

const {width, height} = Dimensions.get('screen');

const PostCreateScreen = () => {
  const viewRef = useRef();
  const [name, setName] = React.useState('Random name');
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
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={['#292B4D', '#545671']}
          style={styles.headerWrapper}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}>
          <Text style={styles.headerText}>Post Maker</Text>
          <View></View>
        </LinearGradient>
      </View>
      <View style={styles.mainWrapper}>
        <ViewShot style={styles.postWrapper} ref={viewRef}>
          <View style={styles.postHeader}>
            <ProfileImg />
            <ProfileName name={name} />
            <View style={{marginLeft: 'auto'}}>
              <Ar_Down />
            </View>
          </View>
          <View style={styles.mainPostWrapper}>
            <MainText contentTxt={mainText} />
          </View>
          <View style={styles.details}>
            <DataTime />
            <Client />
          </View>
          <Stats />
          <View style={styles.actionIcons}>
            <Comment />
            <Retweet />
            <Like />
            <Share />
          </View>
        </ViewShot>
        <View style={styles.optionsWrapper}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Name:</Text>
            <View style={styles.input}>
              <TextInput
                placeholder="Type name here..."
                onChangeText={(name) => setName(name)}
                maxLength={20}
              />
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Main content:</Text>
            <View style={styles.input}>
              <TextInput
                placeholder="Type main content here..."
                onChangeText={(text) => setMainText(text)}
                multiline={true}
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => downloadImage()}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: title,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    backgroundColor: bgGray,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  optionsWrapper: {
    padding: 20,
  },
  actionIcons: {
    flexDirection: 'row',
    marginTop: 13,
    justifyContent: 'space-around',
  },

  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  mainPostWrapper: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 37,
  },

  postHeader: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 23,
  },
  postWrapper: {
    width: '100%',
    marginTop: 40,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    width: width,
    height: height,
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    height: height / 4,
    backgroundColor: 'red',
  },
  headerWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  headerText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 40,
  },
  mainWrapper: {
    width: width,
    transform: [
      {
        translateY: -40,
      },
    ],
    minHeight: height,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});

export default PostCreateScreen;
