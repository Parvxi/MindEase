import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  backgroundSettings: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  area: {
    flex: 0.3,
    backgroundColor: COLORS.secondary,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },

  dateFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    marginTop: 90,
  },

  circle: {
    padding: 23,
    margin: 10,
    display: "inline-block",
    backgroundColor: COLORS.blue,
    borderRadius: "79%",
    width: 160,
    height: 160,
    textAlign: "center",
    fontFamily: FONT.xLarge,
    fontFamily: FONT.bold,
    justifyContent: "center",
  },

  container: {
    padding: 20,
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
