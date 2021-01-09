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

//Icons
import Ar_Down from '../Assets/Icons/ar_down.js';
import Comment from '../Assets/Icons/comment';
import Retweet from '../Assets/Icons/retweet';
import Like from '../Assets/Icons/like';
import Share from '../Assets/Icons/share';

const {width, height} = Dimensions.get('screen');

const PostCreateScreen = () => {
  const viewRef = useRef();
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
            <View style={styles.profileImg} />
            <View style={styles.nameWrapper}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
                karennne
              </Text>
              <Text style={{fontWeight: '200', color: '#687684'}}>
                @karennne
              </Text>
            </View>
            <View style={{marginLeft: 'auto'}}>
              <Ar_Down />
            </View>
          </View>
          <View style={styles.mainPostWrapper}>
            <Text style={styles.mainPostText}>
              I only ask for two things: {'\n'}
              Don't make me look stupid {'\n'}
              Don't treat me like I'm stupid
            </Text>
          </View>
          <View style={styles.details}>
            <Text style={{fontSize: 17, color: '#687684'}}>
              09:28 · 21/2/20 ·{' '}
            </Text>
            <Text style={{fontSize: 17, color: '#4c9eeb'}}>
              Twitter Web App
            </Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.statsText}>
              6{' '}
              <Text style={{fontWeight: '200', color: '#687684'}}>
                Retweets
              </Text>
            </Text>
            <Text style={styles.statsText}>
              15{' '}
              <Text style={{fontWeight: '200', color: '#687684'}}>Likes</Text>
            </Text>
          </View>
          <View style={styles.actionIcons}>
            <Comment />
            <Retweet />
            <Like />
            <Share />
          </View>
        </ViewShot>
        <TouchableOpacity onPress={() => downloadImage()}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  actionIcons: {
    flexDirection: 'row',
    marginTop: 13,
    justifyContent: 'space-around',
  },
  statsText: {
    marginRight: 13,
    fontSize: 16,
    fontWeight: 'bold',
  },
  stats: {
    flexDirection: 'row',
    paddingVertical: 13,
    alignItems: 'center',
    borderTopWidth: 0.33,
    borderBottomWidth: 0.33,
    borderColor: '#bdc5cd',
    paddingLeft: 7,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  mainPostText: {
    fontSize: 22,
    color: 'black',
  },
  mainPostWrapper: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 37,
  },
  profileImg: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: 'gray',
    marginRight: 8,
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
