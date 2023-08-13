import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";


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
    borderRadius: 20,
    width: 300,
    height: 190,
    backgroundColor: "#071936",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 10,
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
    flex: 0.3,
    backgroundColor: COLORS.secondary,
    marginTop: "50%",
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
    textAlign: "center",
  },
  secondaryFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.white,
    textAlign: "center",
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
  dateFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    marginTop: 90,
  },

  spacer: {
    flex: 1,
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

  bigContainer: {
    flex: 3,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.gray2,
  },

  square: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.primary,
  },
});

export default styles;
