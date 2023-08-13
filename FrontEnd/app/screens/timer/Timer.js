import * as React from "react";
import { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./timer.style";
import { COLORS, FONT } from "../../../constants";


const Timer = ({ navigation }) => {
  //implements options
  const [selectedTime, setSelectedTime] = useState(0);
  const timeOptions = Array.from(
    { length: 60 },
    (v, i) => `${i + 1} min${i > 0 ? "s" : ""}`
  );

  //timer behaviour
  const [isPaused, setIsPaused] = useState(true);

  const countdownRef = useRef();

  //picker behaviour
  const [showPicker, setShowPicker] = useState(true);

  //timer appear as min:sec
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    countdownRef.current && countdownRef.current.start();
    setIsPaused(false);
    setShowPicker(false);
  };

  const handlePause = () => {
    countdownRef.current && countdownRef.current.pause();
    setIsPaused(true);
  };

  const handleResume = () => {
    countdownRef.current && countdownRef.current.resume();
    setIsPaused(false);
  };

  const handleEndSession = () => {
    countdownRef.current && countdownRef.current.pause(); // Pause the timer
    setIsPaused(true);
    setSelectedTime(0); // Reset the selected time to 0
    setShowPicker(true); // Show the picker again
  };

  return (
    <View style={styles.backgroundSettings}>
      <View style={styles.area}>
        <View style={styles.timerCircle}>
          <CountdownCircleTimer
            isPlaying={!isPaused}
            duration={selectedTime * 60}
            size={250}
            colors={COLORS.tertiary}
            onComplete={() => alert("Timer completed!")}
            ref={countdownRef}>
            {({ remainingTime }) => (
              <View style={styles.centeredView}>
                {showPicker ? (
                  <View style={{ justifyContent: "center", paddingTop: 40 }}>
                    <Picker
                      selectedValue={selectedTime}
                      onValueChange={(itemValue, itemIndex) =>
                        setSelectedTime(itemValue)
                      }
                      style={{ width: 150, height: 150, bottom: 30 }}>
                      <Picker.Item
                        label="Select"
                        value={null}
                        style={{ fontFamily: FONT.bold }}
                      />
                      {timeOptions.map((option, index) => (
                        <Picker.Item
                          key={index}
                          label={option}
                          value={index + 1}
                          style={{ fontFamily: FONT.bold }}
                        />
                      ))}
                    </Picker>
                  </View>
                ) : (
                  <View style={{ transform: [{ translateY: 25 }] }}>
                    <Text style={[styles.timerFont]}>
                      {formatTime(remainingTime)}
                    </Text>
                  </View>
                )}
                <View style={{}}>
                  {showPicker ? (
                    <View style={{ paddingBottom: 10 }}>
                      <TouchableOpacity
                        style={styles.buttonStart}
                        onPress={handleStart}>
                        <Text style={styles.buttonText}>Start Session</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={{ flexDirection: "row" }}>
                      {isPaused ? (
                        <TouchableOpacity
                          style={styles.playnPauseButton}
                          onPress={handleResume}>
                          <MaterialCommunityIcons
                            style={{ marginLeft: 2 }}
                            name="play"
                            size={30}
                            color={COLORS.white}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={styles.playnPauseButton}
                          onPress={handlePause}>

                          <MaterialCommunityIcons
                            style={{ marginLeft: 2 }}
                            name="pause"
                            size={30}
                            color={COLORS.white}
                          />
                        </TouchableOpacity>
                      )}
                      <View style={{ marginLeft: 15 }}>
                        <TouchableOpacity
                          style={styles.playnPauseButton}
                          onPress={() => setShowPicker(true)}>
                         
                          <MaterialCommunityIcons
                            style={{ marginLeft: 2 }}
                            name="restore"
                            size={30}
                            color={COLORS.white}
                          />
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          transform: [{ translateX: -40 }, { translateY: 105 }],
                        }}>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={handleEndSession}>
                          <Text style={styles.buttonText}>End Session</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
              </View>
            )}
          </CountdownCircleTimer>
        </View>
      </View>
    </View> //background and the above is an area compo
  );
};

export default Timer;
