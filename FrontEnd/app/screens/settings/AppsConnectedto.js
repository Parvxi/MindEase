import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableOpacityComponent,
  Switch,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./SettingsScreen.style";
import { icons, images, SIZES, COLORS, FONT } from "../../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../Header";

const Help = ({ navigation }) => {
  const [SnapisEnabled, setSnapIsEnabled] = useState(false);

  const toggleSwitchforSnap = () => {
    setSnapIsEnabled((previousState) => !previousState);
  };


  const [XisEnabled, setXIsEnabled] = useState(false);

  const toggleSwitchforX = () => {
    setXIsEnabled((previousState) => !previousState);
  };

  
  const [FacebookisEnabled, setFacebookIsEnabled] = useState(false);

  const toggleSwitchforFacebook = () => {
    setFacebookIsEnabled((previousState) => !previousState);
  };


  const [InstaisEnabled, setInstaIsEnabled] = useState(false);

  const toggleSwitchforInsta = () => {
    setInstaIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={styles.backgroundSettings}>
      <ScrollView>
        <View style={styles.area}>
          <View style={styles.insightComp}>
            <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
             


              <View style={styles.row}>
                <Image
                  source={icons.snapchat}
                  style={{
                    width: 65,
                    height: 65,
                    borderRadius: 12,
                    padding: 10,
                    marginLeft: 5,
                    marginTop: 10,
                    marginRight: 10,
                    marginBottom: 15,
                  }}
                />

                <Text
                  style={{
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium,
                    color: COLORS.white,
                    marginTop: 30,
                  }}>
                  snapchat
                </Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={SnapisEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitchforSnap}
                  value={SnapisEnabled}
                  style={{
                    marginTop: 25,
                    marginLeft: 70,
                    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                  }}
                />
              </View>



              <View style={styles.row}>
                <Image
                  source={icons.x}
                  style={{
                    width: 65,
                    height: 65,
                    borderRadius: 12,
                    padding: 10,
                    marginLeft: 5,
                    marginTop: 10,
                    marginRight: 10,
                    marginBottom: 15,
                  }}
                />

                <Text
                  style={{
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium,
                    color: COLORS.white,
                    marginTop: 30,
                  }}>
                  snapchat
                </Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={XisEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitchforX}
                  value={XisEnabled}
                  style={{
                    marginTop: 25,
                    marginLeft: 70,
                    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                  }}
                />
              </View>



              <View style={styles.row}>
                <Image
                  source={icons.facebook}
                  style={{
                    width: 65,
                    height: 65,
                    borderRadius: 12,
                    padding: 10,
                    marginLeft: 5,
                    marginTop: 10,
                    marginRight: 10,
                    marginBottom: 15,
                  }}
                />

                <Text
                  style={{
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium,
                    color: COLORS.white,
                    marginTop: 30,
                  }}>
                  snapchat
                </Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={FacebookisEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitchforFacebook}
                  value={FacebookisEnabled}
                  style={{
                    marginTop: 25,
                    marginLeft: 70,
                    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                  }}
                />
              </View>



              <View style={styles.row}>
                <Image
                  source={icons.instagram}
                  style={{
                    width: 65,
                    height: 65,
                    borderRadius: 12,
                    padding: 10,
                    marginLeft: 5,
                    marginTop: 10,
                    marginRight: 10,
                    marginBottom: 15,
                  }}
                />

                <Text
                  style={{
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium,
                    color: COLORS.white,
                    marginTop: 30,
                  }}>
                  snapchat
                </Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={InstaisEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitchforInsta}
                  value={InstaisEnabled}
                  style={{
                    marginTop: 25,
                    marginLeft: 70,
                    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                  }}
                />
              </View>

            </View>
          </View>
        </View>
        {/* the end of the comp */}
      </ScrollView>
    </View>
  );
};

export default Help;
