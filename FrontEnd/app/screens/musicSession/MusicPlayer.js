import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
// import styles from "./musicSession.style";
import { SIZES, COLORS, FONT } from "../../../constants";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Player = ({ navigation }) => {
  const [isFav, setisFav] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const handleFav = () => {
    setisFav(!isFav);
  };

  const handlePlayPause = () => {
    setIsPaused(!isPaused); // Toggle the isPaused state
  };

  return (
    <View style={styles.backgroundSettings}>
      <View style={{ marginTop: 90 }}></View>
      <View style={styles.Tracksquare}></View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="heart"
            size={30}
            color={isFav ? COLORS.white : COLORS.grey}
            style={{ marginTop: 40, marginRight: 50 }}
            onPress={handleFav}
          />

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={{ marginTop: 20 }}></View>
            <Text style={styles.primaryFont}>Track name</Text>
            <View style={{ marginTop: 5 }}></View>
            <Text style={styles.secondaryFont}>artist name</Text>
          </View>

<TouchableOpacity style={{ marginTop: 40, marginLeft: 50 }}>
          <MaterialCommunityIcons
            name="export-variant"
            size={30}
            color={COLORS.white}
            
          /></TouchableOpacity>
        </View>

        <View style={styles.ratingComp}>
          <View style={{marginTop:5}}> 
          <View style={{ marginLeft: 22 }}>
            <View style={styles.row}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="shuffle-variant"
                  size={20}
                  color={COLORS.white}
                  style={{ marginTop: 7, marginLeft: 15 }}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="step-backward"
                  size={20}
                  color={COLORS.white}
                  style={{ marginTop: 7, marginLeft: 15 }}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={handlePlayPause}>
                {isPaused ? (
                  <View style={styles.buttonStart}>
                    <MaterialCommunityIcons
                      name="play"
                      size={35}
                      style={{ marginTop: 0 }}
                      color={COLORS.white}
                    />
                  </View>
                ) : (
                  <View style={styles.buttonStart}>
                    <MaterialCommunityIcons
                      name="pause"
                      size={35}
                      style={{ marginTop: 0 }}
                      color={COLORS.white}
                    />
                  </View>
                )}
              </TouchableOpacity>

              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="step-forward"
                  size={20}
                  color={COLORS.white}
                  style={{ marginTop: 7, marginLeft: 22 }}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="repeat"
                  size={20}
                  color={COLORS.white}
                  style={{ marginTop: 7, marginLeft: 15 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MusicAwards")}>
          <Text style={styles.buttonText}>End Session</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Player;

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
    transform: [{ translateX: 13 }],
    backgroundColor: COLORS.tertiary,
    width: 35,
    height: 35,
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
    height: 410,
    backgroundColor: "#071936",
  },
  ratingComp: {
    borderRadius: 50,
    width: 250,
    height: 50,
    backgroundColor: "#071936",
    
    alignContent: "center",
    alignSelf: "center",
    marginTop: 100,
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
  
  componentAwards: {
    backgroundColor: COLORS.secondary,
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.secondary,
  },

  Tracksquare: {
    width: 300,
    height: 300,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    alignSelf: "center",
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
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    textAlign: "center",
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
