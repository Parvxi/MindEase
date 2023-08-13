import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableOpacityComponent,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./searchscreen.style";
import { icons, images, SIZES } from "../../../constants";

import Header from "../../screens/Header";

const Search = ({ navigation }) => {
  return (
    <View style={styles.backgroundSettings}>
      
      <View style={styles.area}>
      <Text style={styles.primaryFont}>this is the search screen</Text>
      </View>
    </View>
  );
};

export default Search;
