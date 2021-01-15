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
  Button,
  Pressable,
} from 'react-native';
import {getPermissionAndroid} from '../helper';
import ViewShot, {captureRef} from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import NumericInput from 'react-native-numeric-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-share';

//Style
import {title, bgGray, mainBlue, shadow, activeGreen} from '../Assets/colors';

//Icons
import Ar_Down from '../Assets/Icons/ar_down.js';
import Comment from '../Assets/Icons/comment';
import Retweet from '../Assets/Icons/retweet';
import Like from '../Assets/Icons/like';
import ShareIcon from '../Assets/Icons/share';

//Components
import ProfileImg from '../Ui/profileImg';
import ProfileName from '../Ui/profileName';
import MainText from '../Ui/mainTxt';
import DataTime from '../Ui/dataAndTime';
import Client from '../Ui/client';
import Stats from '../Ui/stats';
import PostImage from '../Ui/image';

const {width, height} = Dimensions.get('screen');

const PostCreateScreen = () => {
  const viewRef = useRef();
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [name, setName] = React.useState('Random name');
  const [mainText, setMainText] = React.useState('This is the main text');
  const [time, setTime] = React.useState('06:15');
  const [date, setDate] = React.useState('6/6/20');
  const [client, setClient] = React.useState();
  const [retweet, setRetweet] = React.useState(0);
  const [like, setLike] = React.useState(0);
  const [textAlign, setTextAlign] = React.useState('justify');

  //handle Time and Datepicker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    const time = date.toLocaleTimeString();
    setTime(time.substring(0, 5));
    hideTimePicker();
  };
  const handleConfirmDate = (date) => {
    setDate(date.toLocaleDateString());
    hideTimePicker();
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

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

  const shareImage = async () => {
    try {
      // capture component
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });

      // share
      const shareResponse = await Share.open({url: uri});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
            <MainText contentTxt={mainText} align={textAlign} />
          </View>
          <PostImage />
          <View style={styles.details}>
            <DataTime time={time} date={date} />
            <Client client={client} />
          </View>
          <Stats retweet={retweet} like={like} />
          <View style={styles.actionIcons}>
            <Comment />
            <Retweet />
            <Like />
            <ShareIcon />
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
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Main text align</Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Pressable onPress={() => setTextAlign('left')}>
                <View style={styles.btnTimeDate}>
                  <Icon name="align-left" size={22} color={mainBlue} />
                </View>
              </Pressable>
              <Pressable onPress={() => setTextAlign('center')}>
                <View style={styles.btnTimeDate}>
                  <Icon name="align-center" size={22} color={mainBlue} />
                </View>
              </Pressable>
              <Pressable onPress={() => setTextAlign('justify')}>
                <View style={styles.btnTimeDate}>
                  <Icon name="align-justify" size={22} color={mainBlue} />
                </View>
              </Pressable>
              <Pressable onPress={() => setTextAlign('right')}>
                <View style={styles.btnTimeDate}>
                  <Icon name="align-right" size={22} color={mainBlue} />
                </View>
              </Pressable>
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Time and Date</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}>
                <TouchableOpacity
                  style={styles.btnTimeDate}
                  onPress={showTimePicker}>
                  <Text
                    style={{fontSize: 18, color: mainBlue, fontWeight: 'bold'}}>
                    Set Time
                  </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isTimePickerVisible}
                  mode="time"
                  onConfirm={handleConfirm}
                  onCancel={hideTimePicker}
                />
              </View>
              <View style={{marginRight: 10}}>
                <TouchableOpacity
                  style={styles.btnTimeDate}
                  onPress={showDatePicker}>
                  <Text
                    style={{fontSize: 18, color: mainBlue, fontWeight: 'bold'}}>
                    Set Date
                  </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirmDate}
                  onCancel={hideTimePicker}
                  locale="en_GB"
                />
              </View>
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Choose a Client</Text>
            <RNPickerSelect
              style={{
                ...pickerSelectStyles,
                viewContainer: {
                  width: '70%',
                  backgroundColor: bgGray,
                  borderRadius: 10,
                  ...shadow,
                },
              }}
              onValueChange={(value) => setClient(value)}
              placeholder={{
                label: 'Select a client...',
                value: null,
              }}
              items={[
                {label: 'Twitter Web App', value: 'Twitter Web App'},
                {label: 'Twitter for iPhone', value: 'Twitter for iPhone'},
                {label: 'Twitter for Android', value: 'Twitter for Android'},
              ]}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Retweets</Text>
            <NumericInput
              onChange={(value) => setRetweet(value)}
              totalWidth={160}
              totalHeight={50}
              iconSize={25}
              valueType="real"
              rounded
              textColor={mainBlue}
              iconStyle={{color: 'white'}}
              rightButtonBackgroundColor={mainBlue}
              leftButtonBackgroundColor={mainBlue}
              containerStyle={{
                backgroundColor: bgGray,
              }}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Likes</Text>
            <NumericInput
              onChange={(value) => setLike(value)}
              totalWidth={160}
              totalHeight={50}
              iconSize={25}
              valueType="real"
              rounded
              textColor={mainBlue}
              iconStyle={{color: 'white'}}
              rightButtonBackgroundColor={mainBlue}
              leftButtonBackgroundColor={mainBlue}
              containerStyle={{
                backgroundColor: bgGray,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => downloadImage()}
            style={styles.btnSave}>
            <Text
              style={{color: activeGreen, fontSize: 18, fontWeight: 'bold'}}>
              Save
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => shareImage()} style={styles.btnSave}>
            <Text
              style={{color: activeGreen, fontSize: 18, fontWeight: 'bold'}}>
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btnSave: {
    backgroundColor: '#FDFDFD',
    width: 100,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    ...shadow,
    margin: 30,
    borderWidth: 0.3,
    borderColor: activeGreen,
  },
  btnTimeDate: {
    backgroundColor: '#FDFDFD',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 5,
    ...shadow,
  },
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
    flex: 1,
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
    minHeight: height / 2,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

export default PostCreateScreen;
