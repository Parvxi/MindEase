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
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { icons, images, SIZES, COLORS, FONT } from "../../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import SwitchSelector from "react-native-switch-selector";

const Napping = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.backgroundSettings}>
      <View style={styles.area}>
        <View style={{ marginBottom: 30 }}></View>

        <View style={{ marginRight: 170 }}>
          <Text style={styles.secondaryFont}>Alarm Settings</Text>
        </View>

        <View style={{ marginBottom: 10 }}></View>

        <View style={styles.area}>
          <View style={styles.insightComp}>
            <View style={{ marginBottom: 10 }}></View>

            <View style={styles.row}>
              <Text style={styles.primaryFont}>Set reminder</Text>

              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ marginLeft: 120 , transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }]}}
              />
            </View>

            
            <View style={styles.row}>
            <TouchableOpacity>
              <View style={styles.row}>
                <Text style={styles.primaryFont}>Set time</Text>

                <View style={{ marginLeft: 100 }}></View>
                <Text style={styles.primaryFontGrey}>00:00 PM</Text>

                <MaterialCommunityIcons
                  style={{ marginLeft: 0 }}
                  name="chevron-right"
                  size={20}
                  color={COLORS.white}
                />
              </View>
            </TouchableOpacity>
            </View>


            <View style={styles.row}>
            <TouchableOpacity>
              <View style={styles.row}>
                <Text style={styles.primaryFont}>Repeat</Text>

                <View style={{ marginLeft: 90 }}></View>
                <Text style={styles.primaryFontGrey}>SU,MON,SAT </Text>
                <MaterialCommunityIcons
                  style={{ marginLeft: 0 }}
                  name="chevron-right"
                  size={20}
                  color={COLORS.white}
                />
              </View>
            </TouchableOpacity>
            </View>

            
            <View style={styles.row}>
            <TouchableOpacity>
              <View style={styles.row}>
                <Text style={styles.primaryFont}>Duration</Text>

                <View style={{ marginLeft: 122 }}></View>
                <Text style={styles.primaryFontGrey}>30 min</Text>

                <MaterialCommunityIcons
                  style={{ marginLeft: 0 }}
                  name="chevron-right"
                  size={20}
                  color={COLORS.white}
                />
              </View>
            </TouchableOpacity>
          </View>
          </View>

          <View style={styles.area}>
            <View style={{ marginBottom: 30 }}></View>

            <View style={{ marginRight: 170 }}>
              <Text style={styles.secondaryFont}>Nap sets</Text>
            </View>
          </View>

          <View style={styles.ratingComp}>
            <ScrollView>
              <View
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  marginLeft: 30,
                  marginTop: 20,
                }}>
                <View style={styles.row}>
                  <View style={styles.square}></View>
                  <View>
                    <Text style={styles.primaryFont}>Sound name</Text>
                    <Text style={styles.primaryFont}>description</Text>
                    <Text style={styles.primaryFont}>duration</Text>
                  </View>
                </View>
              </View>

              <View style={styles.seperatorLine}></View>

              <View
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  marginLeft: 30,
                  marginTop: 20,
                }}>
                <View style={styles.row}>
                  <View style={styles.square}></View>
                  <View>
                    <Text style={styles.primaryFont}>Sound name</Text>
                    <Text style={styles.primaryFont}>description</Text>
                    <Text style={styles.primaryFont}>duration</Text>
                  </View>
                </View>
              </View>

              <View style={styles.seperatorLine}></View>

              <View
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  marginLeft: 30,
                  marginTop: 20,
                }}>
                <View style={styles.row}>
                  <View style={styles.square}></View>
                  <View>
                    <Text style={styles.primaryFont}>Sound name</Text>
                    <Text style={styles.primaryFont}>description</Text>
                    <Text style={styles.primaryFont}>duration</Text>
                  </View>
                </View>
              </View>

              <View style={styles.seperatorLine}></View>
            </ScrollView>
          </View>

          <View style={{ transform: [{ translateY: -30 }] }}>
            <TouchableOpacity
              style={styles.buttonStart}
              onPress={() => navigation.navigate("NappingTimer")}>
              <Text style={styles.buttonText}>Start Session</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Napping;

const styles = StyleSheet.create({
  picker: {
    flex: 1,
    maxWidth: 100,
    ...Platform.select({
      android: {
        color: "#fff",
        backgroundColor: "rgba(92, 92, 92, 0.206)",
      },
    }),
  },
  pickerItem: {
    color: "#fff",
    fontSize: 20,
    ...Platform.select({
      android: {
        marginLeft: 10,
        marginRight: 10,
      },
    }),
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  buttonStart: {
    transform: [{ translateY: 65 }],
    backgroundColor: COLORS.tertiary,
    width: 200,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignContent: "center",
  },

  backgroundSettings: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  seperatorLine: {
    height: 1,
    width: "75%",
    backgroundColor: COLORS.grey,
    marginLeft: "10%",
    marginTop: "5%",
  },

  timerCircle: {
    borderRadius: 180,
    width: 250,
    height: 250,
    backgroundColor: COLORS.white,
    marginBottom: 0,
    marginTop: 120,
    marginBottom: 60,
  },

  insightComp: {
    borderRadius: 20,
    width: 300,
    height: 120,
    backgroundColor: "#071936"
  },
  ratingComp: {
    borderRadius: 20,
    width: 300,
    height: 300,
    backgroundColor: "#071936",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 10,
  },

  component: {
    borderRadius: 20,
    marginTop: 30,
    width: 300,
    height: 140,
    backgroundColor: "#071936",
    justifyContent: "center",
    alignContent: "center",
  },
  smallCirclesForicons: {
    borderRadius: 90,
    width: 30,
    height: 30,
    backgroundColor: COLORS.white,
  },

  centrizeLINE: {
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    width: "100%",
    height: 110,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    backgroundColor: COLORS.tertiary,
    width: 200,
    height: 50,
    borderRadius: 30,
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  playnPauseButton: {
    backgroundColor: COLORS.tertiary,
    width: 35,
    height: 35,
    borderRadius: 30,
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
    transform: [{ translateX: 100 }],
  },

  customeheader: {
    height: "23%",
    width: "100%",
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: "200%",
    borderBottomLeftRadius: "200%",
    alignItems: "center",
  },
  circle: {
    backgroundColor: COLORS.tertiary,
    borderRadius: 70,
    width: 90,
    height: 90,
  },

  Profile: {
    marginTop: 5,
    borderRadius: 70,
    width: 80,
    height: 80,
  },

  buttonClose: {
    backgroundColor: COLORS.tertiary,
  },

  modalToggle: {
    margin: 20,
    backgroundColor: COLORS.modalColor,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    color: COLORS.grey,
    flexDirection: "column",
  },
  area: {
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  componentAwards: {
    backgroundColor: COLORS.secondary,
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: 70,
    height: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
  },

  firstcomponant: {
    flex: 0.3,
    backgroundColor: COLORS.secondary,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    marginTop: 10,
    marginLeft: 30,
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.white,
  },
  primaryFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginBottom: 5,
    marginLeft: 20,
  },
  primaryFontGrey: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.grey,
    marginBottom: 5,
    marginLeft: 10,
  },
  secondaryFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,

    color: COLORS.grey,
  },
  TrackFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.grey,
    marginLeft: 11,
  },
  TrackSubFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.grey,
    marginLeft: 11,
  },

  iConsFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.white,
    marginLeft: 38,
    marginTop: 10,
  },

  timerFont: {
    fontFamily: FONT.bold,
    fontSize: 60,
    color: COLORS.background,
  },

  buttonText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.white,
    textAlign: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
