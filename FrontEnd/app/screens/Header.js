//this component is not used anymore in the code but its left for future use 

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, FONT } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
  },
  customeheader: {
    height: "20%",
    width: "100%",
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: "200%",
    borderBottomLeftRadius: "200%",
  },
});

const Header = ({ name, navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={(style = { marginTop: "12%", marginLeft: "5%" })}>
          <TouchableOpacity style={{}} onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons
              name="menu"
              size={28}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            marginTop: "12%",
            marginLeft: "5%",
            fontWeight: "bold",
            fontSize: 22,
            fontFamily: FONT.bold,
            color: COLORS.white,
          }}>
          {name}
        </Text>

        <View style={(style = { marginTop: "12%", marginLeft: "43%" })}>
          <TouchableOpacity
            style={{}}
            
          >
            <MaterialCommunityIcons
              name="magnify"
              size={28}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
