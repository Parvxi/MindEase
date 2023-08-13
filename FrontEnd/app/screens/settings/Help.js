import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./SettingsScreen.style";
import { SIZES, COLORS, FONT } from "../../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Help = ({ navigation }) => {
  return (
    <View style={styles.backgroundSettings}>
      <ScrollView>
        <View style={styles.area}>
          <Text style={styles.titleText}>About Mindease</Text>

          <View style={styles.insightComp}>
            <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
              <Text style={styles.primaryFont}>
                In a world where stress and anxiety are increasingly common,
                Mindease serves as a beacon of hope for those looking to take
                control of their mental health and achieve a greater sense of
                balance and well-being.
              </Text>

              <Text style={styles.primaryFont}>
                Mindease combines the words "mind" and "ease" to create a
                powerful and meaningful name that reflects its purpose. It
                refers to the sense of calmness and tranquility that can help
                put one's mind at ease It focus on helping individuals assess
                and manage their stress levels in a healthy and effective way.
                As well as achieve a sense of balance and inner peace in their
                daily lives.
              </Text>

              <Text style={styles.primaryFont}>
                For more details, please visit out website below
              </Text>

              <TouchableOpacity>
                <View style={styles.row}>
                  <MaterialCommunityIcons
                    style={{ marginRight: 10 }}
                    name="web"
                    size={20}
                    color={COLORS.white}
                  />
                  <Text
                    style={{
                      fontFamily: FONT.regular,
                      fontSize: SIZES.medium,
                      color: COLORS.tertiary,
                      marginBottom: 10,
                    }}>
                    mindease.com
                  </Text>
                </View>
              </TouchableOpacity>

              <Text style={styles.primaryFont}>or contact us through</Text>

              <TouchableOpacity>
                <View style={styles.row}>
                  <MaterialCommunityIcons
                    style={{ marginRight: 10 }}
                    name="email"
                    size={20}
                    color={COLORS.white}
                  />
                  <Text
                    style={{
                      fontFamily: FONT.regular,
                      fontSize: SIZES.medium,
                      color: COLORS.tertiary,
                      marginBottom: 10,
                    }}>
                    info@mindease.com
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* the end of the comp */}
        </View>
        <View style={{ marginLeft: 35, marginTop: 30, marginBottom: 20 }}>
          <Text style={styles.primaryFont}> Stay in the loop!</Text>
          <Text style={styles.primaryFont}>
            {" "}
            follow us for exclusive news and updates.
          </Text>

          <View style={{ marginTop: 10 }}>
            <View style={styles.row}>
              <TouchableOpacity>
                <View style={styles.row}>
                  <MaterialCommunityIcons
                    style={{ marginRight: 10 }}
                    name="instagram"
                    size={45}
                    color={COLORS.white}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.row}>
                  <MaterialCommunityIcons
                    style={{ marginRight: 10 }}
                    name="twitter"
                    size={45}
                    color={COLORS.white}
                  />
                </View>
              </TouchableOpacity>

              <View style={{ marginTop: 10 }}>
                <Text style={styles.primaryFont}> @mindease</Text>
              </View>
            </View>
          </View>

          <View
            style={{ marginLeft: 35, marginTop: 30, marginBottom: 20 }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Help;
