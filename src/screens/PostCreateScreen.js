import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
  Alert,
} from "react-native";
import { captureRef } from "react-native-view-shot";
/* import CamerRoll from "@react-native-community/cameraroll"; */
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo";
import Expo, { Constants, Camera } from "expo";

const PostCreateScreen = () => {
  //Create a ref for the commponent
  const viewRef = useRef();
  const [rollGranted, setRollGranted] = useState(false);

  /* const reqPremission = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      console.log("You have a permission");
    } else {
      console.log("Something went wrong");
    }
  };

  const saveImage = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: "png",
        quality: 0.8,
      });
      const per = await reqPremission();
      const image = CamerRoll.save(uri, "photo");
      if (image) {
        Alert.alert(
          "",
          "Image saved successfully.",
          [{ text: "OK", onPress: () => {} }],
          { cancelable: false }
        );
      }
    } catch (err) {
      console.log("Error", err);
    }
  }; */

  const reqPremission = async () => {
    const { Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
      setRollGranted(true);
    } else {
      setRollGranted(false);
      console.log("Uh oh! The user has not granted us permission.");
    }
  };

  const saveImage = async () => {
    await reqPremission();
    const uri = await captureRef(viewRef, {
      format: "png",
      quality: 0.8,
    });
    const asset = await MediaLibrary.createAssetAsync(uri);
    MediaLibrary.createAlbumAsync("Expo", asset)
      .then(() => {
        Alert.alert("Album created");
      })
      .catch((err) => {
        Alert.alert("An Error Occurred");
      });
  };

  return (
    <View style={{ marginTop: 200 }}>
      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "orange",
          borderRadius: 40,
          padding: 50,
        }}
        ref={viewRef}
      >
        <Text>This is going to be saved in gallery of device</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => reqPremission()}>
          <Text>Save image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PostCreateScreen;
