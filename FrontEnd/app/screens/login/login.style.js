import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  seperatorLine: {
    height: 1,
    width: "75%",
    backgroundColor: COLORS.white,
    marginBottom: "5%",
    marginTop: "5%",
  },

  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 65,
    borderColor: "#fff",
    borderWidth: 0,
    borderRadius: 90,
    padding: 10,
    backgroundColor: "#fff",
  },
  backgroundSettings: {
    flex: 1,
    backgroundColor: COLORS.background,
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
    width: 380,
    height: 65,
    borderRadius: 30,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    // alignItems: "center",
    // alignContent: "center",
    backgroundColor: COLORS.tertiary,
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
    marginTop: 22,
  },
  area: {
    flex: 0.3,
    backgroundColor: COLORS.secondary,
    marginTop: 10,
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
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginTop:10,
    
    alignSelf:"center"
  },
  secondaryFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.tertiary,
    marginTop:10,
    
    alignSelf:"center"
  },


  
  iConsFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.white,
    textAlign: "center",
    marginTop:12
  },
  mind: {
    textAlign: "center",
    fontFamily: FONT.medium,
    fontSize: SIZES.xxLarge,
    color: COLORS.white,
  },
  ease: {
    textAlign: "center",
    fontFamily: FONT.medium,
    fontSize: SIZES.xxLarge,
    color: COLORS.tertiary,
  },
  welcome: {
    marginTop: 90,
    textAlign: "center",
    fontFamily: FONT.medium,
    fontSize: SIZES.xxLarge,
    color: COLORS.white,
  },

  dateFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    marginTop: 90,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems:"center",
    alignSelf:"center"
  },
});

export default styles;
