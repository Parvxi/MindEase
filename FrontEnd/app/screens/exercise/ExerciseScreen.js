import * as React from "react";
import {
  View,
  Text,
} from "react-native";

import { SIZES, COLORS, FONT } from "../../../constants";

import { StyleSheet } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

const Exercise = ({ navigation }) => {
  return (
    <View style={styles.backgroundSettings}>
      <View style={styles.area}>
        <ScrollView>
          <View style={styles.insightComp}>
            <View style={styles.row}>
              <View style={{ margin: 10, marginTop: 30 }}>
                <View style={styles.square}></View>
              </View>

              <View style={{ marginTop: 9 }}>
                <Text style={styles.primaryFont}>Yoga</Text>

                <View style={{ width: 200, flexGrow: 1, flex: 1 }}>
                  <Text style={styles.secondaryFont}>
                    Yoga combines physical postures, breathing exercises, and
                    meditation to promote relaxation and reduce stress.
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* //---------------------------------------------------------------------------------------------- */}

          <View style={styles.insightComp}>
            <View style={styles.row}>
              <View style={{ margin: 10, marginTop: 30 }}>
                <View style={styles.square}></View>
              </View>

              <View style={{ marginTop: 9 }}>
                <Text style={styles.primaryFont}>Pilates</Text>

                <View style={{ width: 200, flexGrow: 1, flex: 1 }}>
                  <Text style={styles.secondaryFont}>
                    Pilates is a low-impact exercise that focuses on building
                    core strength, flexibility, and balance to help reduce
                    stress.
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* //---------------------------------------------------------------------------------------------- */}

          <View style={styles.insightComp}>
            <View style={styles.row}>
              <View style={{ margin: 10, marginTop: 30 }}>
                <View style={styles.square}></View>
              </View>

              <View style={{ marginTop: 9 }}>
                <Text style={styles.primaryFont}>Strength Training</Text>

                <View style={{ width: 200, flexGrow: 1, flex: 1 }}>
                  <Text style={styles.secondaryFont}>
                    Strength training can help reduce stress by improving
                    overall physical health and boosting self-confidence.
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* //---------------------------------------------------------------------------------------------- */}

          <View style={styles.insightComp}>
            <View style={styles.row}>
              <View style={{ margin: 10, marginTop: 30 }}>
                <View style={styles.square}></View>
              </View>

              <View style={{ marginTop: 9 }}>
                <Text style={styles.primaryFont}>Deep Breathing</Text>

                <View style={{ width: 200, flexGrow: 1, flex: 1 }}>
                  <Text style={styles.secondaryFont}>
                    Deep breathing triggers the body's relaxation response and
                    promotes a sense of calm and mindfulness, helping to relieve
                    mental and emotional stress.{" "}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* //---------------------------------------------------------------------------------------------- */}
        </ScrollView>
      </View>
    </View>
  );
};

export default Exercise;

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
    // marginHorizontal: 10,

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
    marginBottom: "5%",
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
    borderRadius: 10,
    width: 300,
    height: 140,
    marginBottom: 15,
    backgroundColor: "#071936",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  ratingComp: {
    borderRadius: 20,
    width: 300,
    height: 100,
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
    //padding: 23,
    //marginTop: 5,
    //display: "inline-block",
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
    // marginHorizontal: 10,
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  playnPauseButton: {
    backgroundColor: COLORS.tertiary,
    width: 35,
    height: 35,
    borderRadius: 30,
    // marginHorizontal: 10,
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
    //padding: 23,
    //margin: 10,
    //display: "inline-block",
    backgroundColor: COLORS.tertiary,
    borderRadius: 70,
    width: 90,
    height: 90,
  },

  Profile: {
    //padding: 23,
    marginTop: 5,
    //display: "inline-block",
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
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  componentAwards: {
    //flex: 0.,
    backgroundColor: COLORS.secondary,
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 18,
  },
  secondaryFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  congratsFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.tertiary,
    textAlign: "center",
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
  TrackFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.grey,
    marginLeft: 11,
    textAlign: "center",
  },
  TrackSubFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xSmall,
    color: COLORS.grey,
    marginLeft: 11,
    textAlign: "center",
  },
  //-----------------------------------------------------------------------------------
  dateFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    marginTop: 90,
  },

  spacer: {
    flex: 1,
    //backgroundColor: COLORS.paleturquoise,
    marginBottom: 90,
  },
  settingset: {
    flexDirection: "row",
    columnGap: "5%",
    paddingTop: "5%",
  },

  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  rowIcons: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10,
  },

  pollutantContainer: {
    padding: 10,
    margin: 10,
    display: "inline-block",
    backgroundColor: COLORS.blue,
    borderRadius: "50%",
    width: 120,
    height: 35,
    textAlign: "center",
    fontFamily: FONT.xLarge,
    fontFamily: FONT.bold,
    //marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  polFont: {
    fontFamily: FONT.xLarge,
    fontFamily: FONT.bold,
    color: "yellow",
  },
  optionsContainer: {
    fontFamily: FONT.medium,
    borderWidth: 1,
    borderRadius: 90,
    borderColor: COLORS.gray2,
    padding: 9,
    backgroundColor: COLORS.white,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    height: 40,
    margin: 12,
  },
  main: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    //marginBottom: 20,
    paddingLeft: "2%",
  },
  notice: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
    marginBottom: 0,
    paddingLeft: "2%",
  },
  aqiDisplayFont: {
    textAlign: "center",

    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
    marginTop: 4,
    paddingLeft: "2%",
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  settingbtn: {
    width: 32,
    height: 32,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.blue,
    justifyContent: "center",
    alignItems: "center",
  },
  makeupshadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.58,
    shadowRadius: 10.0,
    //elevation: 2,
    width: 32,
    height: 32,
    borderRadius: SIZES.medium,
  },
  backbtn: {
    width: 40,
    height: 30,
    backgroundColor: COLORS.blue,
    borderRadius: SIZES.medium,
    justifyContent: "contain",
    alignItems: "center",
  },
  addbtn: {
    marginLeft: 150,
    width: 40,
    height: 30,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "contain",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 40,
  },
  removebtn: {
    width: 40,
    height: 30,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 40,
  },

  bigContainer: {
    flex: 3,
    //backgroundColor: "yellow",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.gray2,
  },

  predictionContainer: {
    fontFamily: FONT.medium,
    borderWidth: 3,
    borderRadius: 4,
    borderColor: COLORS.gray2,
    paddingHorizontal: 10,
    width: 110,
    height: 110,
    backgroundColor: COLORS.white,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  square: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
});
