import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "../napping/nappingSession.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../../../constants";

const TimerAwardsScreen = ({ navigation }) => {
  return (
    <View style={styles.backgroundSettings}>
      <View style={styles.componentAwards}>
        <Text style={styles.congratsFont}>Congratulations !</Text>

        <View style={{ marginBottom: 10 }}></View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.primaryFont}>You earned num </Text>

          <MaterialCommunityIcons
            name="star-four-points"
            size={20}
            color={COLORS.white}
          />
        </View>

        <Text style={styles.primaryFont}>for completing your nap session</Text>
      </View>
      <View style={styles.componentAwards}>
        <Text style={styles.primaryFont}>insight </Text>
        <View style={styles.insightComp}>
          <View style={{ marginBottom: 10 }}></View>
          <Text style={styles.primaryFont}>Total Time </Text>
          <Text style={styles.primaryFont}>00:00:00 </Text>

          <MaterialCommunityIcons
            name="lightbulb-on-outline"
            size={30}
            color={COLORS.white}
            style={{ alignSelf: "center", marginTop: 10, marginBottom: 10 }}
          />

          <View style={{ margin: 10 }}>
            <Text style={styles.secondaryFont}>
              Remember, your body needs rest and relaxation in order to function
              at its best, so don't hesitate to grab some shuteye when you need
              it.
            </Text>
          </View>
        </View>
        {/* insight ends here */}
      </View>

      <View style={{ marginBottom: 10 }}></View>
      <View style={styles.componentAwards}>
        <Text style={styles.primaryFont}>share your feedback </Text>
        <Text style={styles.primaryFont}>How do you feel right now? </Text>

        <View style={styles.ratingComp}>
          <View style={styles.row}>
            <TouchableOpacity
              style={{ marginLeft: 30, marginTop: 20 }}
              onPress={() => {}}>
              <MaterialCommunityIcons
                name="emoticon-excited-outline"
                size={50}
                color={COLORS.tertiary}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginLeft: 40, marginTop: 20 }}
              onPress={() => {}}>
              <MaterialCommunityIcons
                name="emoticon-neutral-outline"
                size={50}
                color={COLORS.tertiary}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginLeft: 40, marginTop: 20 }}
              onPress={() => {}}>
              <MaterialCommunityIcons
                name="emoticon-sad-outline"
                size={50}
                color={COLORS.tertiary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TimerAwardsScreen;
