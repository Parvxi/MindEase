import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONT } from "../../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const Music = ({ navigation }) => {
  return (
    <View style={styles.backgroundSettings}>
      <View style={styles.area}>
        <View style={{ marginBottom: 30 }}></View>
        <View style={styles.row}>
          <Text style={styles.secondaryFont}>Library</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("FavouriteMusic")}
            style={{ marginLeft: 100 }}>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="heart"
                size={15}
                color={COLORS.grey}
                style={{ marginTop: 5 }}
              />
              <View style={{ marginRight: 5 }}></View>

              <Text style={styles.secondaryFont}>my Favorite</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 30 }}></View>
        <View style={styles.area}>
          <View style={styles.insightComp}>
            <ScrollView>
              <View style={{ marginTop: 13, marginLeft: 12 }}>
                <View style={styles.row}>
                  <Text style={styles.secondaryFont}>Free music</Text>
                  <TouchableOpacity style={{ marginLeft: 125 }}>
                    <View style={styles.row}>
                      <Text style={styles.secondaryFont}>See all</Text>
                      <MaterialCommunityIcons
                        name="chevron-right"
                        size={20}
                        color={COLORS.grey}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/* track styling--------------------------------------------------- */}
              <TouchableOpacity onPress={() => navigation.navigate("Player")}>
                <View style={styles.row}>
                  <View style={{ marginTop: 10, marginLeft: 20 }}>
                    <View style={styles.square}></View>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text style={styles.TrackFont}>track name</Text>
                    <Text style={styles.TrackSubFont}>artist name * 0:00 </Text>
                    <Text style={styles.TrackSubFont}>genre</Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* ----------------------------------------------------------------- */}

              <View style={styles.seperatorLine}></View>

              <View style={{ marginTop: 13, marginLeft: 12 }}>
                <View style={styles.row}>
                  <Text style={styles.secondaryFont}>Classical music</Text>
                  <TouchableOpacity style={{ marginLeft: 90 }}>
                    <View style={styles.row}>
                      <Text style={styles.secondaryFont}>See all</Text>
                      <MaterialCommunityIcons
                        name="chevron-right"
                        size={20}
                        color={COLORS.grey}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/* track styling--------------------------------------------------- */}
              <TouchableOpacity onPress={() => navigation.navigate("Player")}>
                <View style={styles.row}>
                  <View style={{ marginTop: 10, marginLeft: 20 }}>
                    <View style={styles.square}></View>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text style={styles.TrackFont}>track name</Text>
                    <Text style={styles.TrackSubFont}>artist name * 0:00 </Text>
                    <Text style={styles.TrackSubFont}>genre</Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* ----------------------------------------------------------------- */}

              <View style={styles.seperatorLine}></View>

              <View style={{ marginTop: 13, marginLeft: 12 }}>
                <View style={styles.row}>
                  <Text style={styles.secondaryFont}>Instrumental Music</Text>
                  <TouchableOpacity style={{ marginLeft: 63 }}>
                    <View style={styles.row}>
                      <Text style={styles.secondaryFont}>See all</Text>
                      <MaterialCommunityIcons
                        name="chevron-right"
                        size={20}
                        color={COLORS.grey}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/* track styling--------------------------------------------------- */}
              <TouchableOpacity onPress={() => navigation.navigate("Player")}>
                <View style={styles.row}>
                  <View style={{ marginTop: 10, marginLeft: 20 }}>
                    <View style={styles.square}></View>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text style={styles.TrackFont}>track name</Text>
                    <Text style={styles.TrackSubFont}>artist name * 0:00 </Text>
                    <Text style={styles.TrackSubFont}>genre</Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* ----------------------------------------------------------------- */}

              <View style={{ marginTop: 15 }}></View>
            </ScrollView>
          </View>

          <View style={styles.area}>
            <View style={{ marginBottom: 30 }}></View>
            <Text style={styles.secondaryFont}>Connected to</Text>
          </View>

          <View style={styles.ratingComp}>
            <View style={styles.row}>
              <View style={{ marginTop: 20, marginLeft: 15 }}>
                <View style={styles.square}>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name="spotify"
                      size={60}
                      color={COLORS.white}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ marginTop: 20, marginLeft: 5 }}>
                <View style={styles.square}>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name="soundcloud"
                      size={60}
                      color={COLORS.white}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ marginTop: 20, marginLeft: 5 }}>
                <View style={styles.square}></View>
              </View>

              <View style={{ marginTop: 20, marginLeft: 5 }}>
                <View style={styles.square}></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Music;

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
    height: 410,
    backgroundColor: "#071936",
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
    width: 60,
    height: 60,
    backgroundColor: COLORS.secondary,
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
