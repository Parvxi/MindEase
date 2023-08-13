import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  backgroundSettings: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  seperatorLine: {
    flex: 1,
    height: 1,
    width: "75%",
    backgroundColor: COLORS.grey,
    marginLeft: "10%",
    marginBottom: "5%",
    marginTop: "5%",
  },
  insightComp: {
    borderRadius: 20,
    width: 330,
    backgroundColor: "#071936",
    justifyContent: "center",
    alignContent: "center",
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
  component: {},
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
  },
  button: {
    backgroundColor: COLORS.tertiary,
    width: 200,
    height: 50,
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 60,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
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
    backgroundColor: COLORS.white,
    borderRadius: 70,
    width: 90,
    height: 90,
    alignItems: "center",
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
    marginTop: 33,
  },
  area: {
    flex: 0.3,
    backgroundColor: COLORS.secondary,
    marginTop: 20,
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
    fontFamily: FONT.regular,
    fontSize: 20,
    color: COLORS.grey,
    marginTop: 20,
    marginBottom: 20,
  },
  primaryFont: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginBottom: 10,
  },
  secondaryFont: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.grey,
  },

  tertiaryFont: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },

  subFont: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.white,

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
});

export default styles;
