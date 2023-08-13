import React from "react";
import { View, Text } from "react-native";
import * as Progress from "react-native-progress";
import { COLORS, FONT, SIZES } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ProgressFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.tertiary,
  },
  TextFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.grey,
  },
});

class ProgressBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    this.updateProgress();
  }

  updateProgress = () => {
    let progress = 15 / 720;
    if (progress > 1) {
      progress = 0;
    }
    this.setState({ progress });
    setTimeout(this.updateProgress, 1000);
  };

  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 10 }}>
          <Text style={styles.ProgressFont}>{`${Math.min(
            Math.round(this.state.progress * 720)
          )}`}</Text>
          <Text style={styles.TextFont}>/720 Hours (Ends "Month" "Day")</Text>
        </View>
        <Progress.Bar
          color={"#EC7196"}
          unfilledColor={"#49657C"}
          borderColor={"#49657C"}
          progress={this.state.progress}
          width={230}
        />
      </View>
    );
  }
}

export default ProgressBarExample;
