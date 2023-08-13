import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./SettingsScreen.style";
import { SIZES, COLORS, FONT } from "../../../constants";

const Subscribe = ({ navigation }) => {
  return (
    <View style={styles.backgroundSettings}>
      <ScrollView>
        <View style={styles.area}>
          <Text style={styles.titleText}>Mindease Bundle</Text>

          <View style={styles.insightComp}>
            <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
              <Text style={styles.tertiaryFont}>All music Playlists</Text>

              <Text style={styles.tertiaryFont}>All nap sets</Text>

              <Text style={styles.tertiaryFont}>All exercises categories</Text>

              <Text style={styles.tertiaryFont}>Cash coupon</Text>

              <Text
                style={{
                  fontFamily: FONT.regular,
                  fontSize: SIZES.medium,
                  color: COLORS.tertiary,
                  marginTop: 40,
                  marginLeft: 200,
                  marginBottom: 20,
                }}>
                29.99 SAR
              </Text>
            </View>
          </View>
          {/* the end of the comp */}
        </View>
        <View style={{ marginLeft: 35, marginTop: 30, marginBottom: 20 }}>
          <View style={{ marginTop: 10 }}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.subFont}>Subscribe</Text>
              </TouchableOpacity>
              <View style={{ marginTop: 10 }}></View>
            </View>
          </View>
          <View
            style={{ marginLeft: 35, marginTop: 30, marginBottom: 20 }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Subscribe;
