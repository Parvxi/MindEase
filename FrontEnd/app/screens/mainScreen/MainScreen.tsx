import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  Dimensions,
} from "react-native";

import {
  BarChart,
  StackedBarChart,
} from "react-native-chart-kit";

import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { icons, images, COLORS } from "../../../constants";
import styles from "./mainScreen.style";

import ProgressBarToday from "../ProgressBarToday";
import ProgressBarMonth from "../ProgressBarMonth";

import { FIREBASE_AUTH, FIREBASE_DB } from "../../../FirebaseConfig";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

import SwitchSelector from "react-native-switch-selector";

import { AnimatedCircularProgress } from "react-native-circular-progress";

import moment from "moment";


const MainScreen = ({ navigation }) => {
  //modal related
  const [actionTriggered, setActionTriggered] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  //switches related
  const [selectedOption, setSelectedOption] = useState("dayWindow");
  const onValueChange = (value) => {
    setSelectedOption(value);
  };

  const auth = FIREBASE_AUTH;
  const [mood, setMood] = React.useState("");
  const [name, setName] = React.useState("");
  const [currentMood, setCurrentMood] = React.useState("");
  const [outputArray, setOutputArray] = React.useState<number[]>([]);
  const [resultTime, setResultTime] = React.useState("");

  const User = auth.currentUser; // Get the current user

  const GET_Doc = async () => {
    const Uid = User?.uid.toString();
    const docRef = doc(FIREBASE_DB, "Users", Uid.toString());
    const docSnap = await getDoc(docRef);

    const colRef = collection(docRef, "Prediction");

    const q = query(colRef, orderBy("timestamp", "desc"), limit(24)); 
    const c_mood_doc = query(colRef, orderBy("timestamp", "desc"), limit(1)); 

    const docsSnap = await getDocs(q);
    const docsMoodSnap = await getDocs(c_mood_doc);

    const convertInputToNumber = (input: string) => {
      switch (input) {
        case "GOOD-MOOD":
          return 0;
        case "CALM":
          return 1;
        case "STRESSED":
          return 2;
        default:
          return 1; // Default fallback value if the string doesn't match any case
      }
    };

    let newArray: number[] = []; // Initialize newArray outside the loop
    let mood = "";

    docsSnap.forEach((doc) => {
      const timestamp = doc.data().timestamp.toDate();
      const localTime = moment(timestamp)
        .utcOffset(3)
        .format("YYYY-MM-DD HH:mm:ss");
      mood = doc.data()?.Prediction_result;
      const number = convertInputToNumber(mood);
      newArray.push(number); 
    });

    docsMoodSnap.forEach((doc) => {
      const timestamp = doc.data().timestamp.toDate();
      const localTime = moment(timestamp)
        .utcOffset(3)
        .format("YYYY-MM-DD HH:mm:ss");
      setCurrentMood(doc.data()?.Prediction_result);
    });

    setOutputArray(newArray);

    if (docSnap.exists()) {
      setName(docSnap.data()?.name);
    } else {
      console.log("No such document!");
    }
  };

  React.useEffect(() => {
    GET_Doc();
  }, []);
  const screenWidth = Dimensions.get("window").width;

  function* yLabel() {
    yield* ["good", "neutral", "stressed"];
  }

  const minValue = Math.min(...outputArray);
  const datapoints = outputArray.map((datapoint) => datapoint - minValue - 1);

  const data = {
    labels: [
      "1:00",
      "2:00",
      "3:00",
      "4:00",
      "5:00",
      "6:00",
      "7:00",
      "8:00",
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00,",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
      "24:00",
    ],
    datasets: [
      {
        data: datapoints,
      },
    ],
  };

  const monthlyData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    legend: ["good", "neutral", "stressed"],
    data: [
      [60, 20, 60],
      [30, 30, 60],
      [30, 60, 60],
      [30, 30, 100],
      [30, 60, 60],
      [30, 60, 60],
      [20, 60, 60],
      [30, 60, 60],
      [30, 50, 60],
      [30, 60, 60],
      [30, 60, 60],
      [40, 60, 60],
    ],
    barColors: [COLORS.white, COLORS.grey, COLORS.tertiary],
  };

  const yLabelIterator = yLabel();

  const renderDayWindow = () => {
    return (
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.backgroundSettings}>
          <View style={styles.firstcomponant}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: 25,
              }}>
              {/* first icon -------------------------------------------------------------------*/}

              <View style={styles.row}>
                <View style={styles.smallCirclesForicons}>
                  <Image
                    source={icons.meditation}
                    style={{
                      width: 18,
                      height: 18,
                      padding: 10,
                      marginLeft: 5,
                      marginTop: 5,
                    }}
                  />
                </View>
                <View style={{ marginTop: 3, marginLeft: 10 }}>
                  <Text style={styles.iConsFont}>Start Time</Text>
                  <Text style={styles.iConsFont}>8:00 AM</Text>
                </View>
              </View>
              {/* second icon -------------------------------------------------------------------*/}
              <View style={styles.row}>
                <View style={styles.smallCirclesForicons}>
                  <Image
                    source={icons.standing}
                    style={{
                      width: 11.5,
                      height: 22,
                      marginLeft: 9,
                      marginTop: 5,
                    }}
                  />
                </View>
                <View style={{ marginTop: 3, marginLeft: 10 }}>
                  <Text style={styles.iConsFont}>End Time</Text>
                  <Text style={styles.iConsFont}>8:00 AM</Text>
                </View>
              </View>

              {/* third icon -------------------------------------------------------------------*/}
              <View style={styles.row}>
                <View style={styles.smallCirclesForicons}>
                  <Image
                    source={icons.hourglass}
                    style={{
                      width: 11.5,
                      height: 22,
                      marginLeft: 9,
                      marginTop: 5,
                    }}
                  />
                </View>

                <View style={{ marginTop: 3, marginLeft: 10 }}>
                  <Text style={styles.iConsFont}>Duration</Text>
                  <Text style={styles.iConsFont}>8 Hours</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.seperatorLine}></View>

          <View style={styles.firstcomponant}>
            <View style={styles.row}>
              <Text style={styles.primaryFont}>current mood: </Text>
              <Text style={styles.primaryFont}>{currentMood}</Text>
            </View>

            {/* //---------------------------------------------------------------------------------------- */}
            <ScrollView horizontal={true}>
              <View>
                <BarChart
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                  }}
                  data={data}
                  segments={2}
                  width={screenWidth * 3}
                  height={220}
                  verticalLabelRotation={0}
                  fromZero={true}
                  hasBarHighlight={false}
                  chartConfig={{
                    backgroundColor: "#e26a00",
                    barPercentage: 0.5,
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 3) => `rgba(200, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 30,
                    },
                    formatYLabel: () => yLabelIterator.next().value,
                    data: data.datasets,
                    propsForDots: {
                      r: "10",
                      strokeWidth: "40",
                      stroke: "#ffa726",
                    },
                  }}
                />
              </View>

              
            </ScrollView>
            {/* //---------------------------------------------------------------------------------------- */}
          </View>

          <View style={styles.seperatorLine}></View>

          {/* stress-neu-calm-reward ROW+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <ScrollView
            style={{ marginLeft: 10 }}
            horizontal
            fadingEdgeLength={200}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.componant}>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginLeft: 10,
                }}>
                {/* item number 1 -----------------------------------------------------*/}

                <View style={styles.row}>
                  <Image
                    source={icons.stressIndicator}
                    style={{ width: 48, height: 48 }}
                  />
                  <View style={{ marginTop: 10, marginRight: 5 }}>
                    <Text style={styles.iConsFont}>Stress Time</Text>
                    <Text style={styles.iConsFont}>[num] min</Text>
                  </View>
                </View>

                {/* item number 2 -----------------------------------------------------*/}
                <Image
                  source={icons.normalIndicator}
                  style={{ width: 45, height: 45 }}
                />
                <View style={{ marginTop: 10, marginRight: 5 }}>
                  <Text style={styles.iConsFont}>neutural Time</Text>
                  <Text style={styles.iConsFont}>[num] min</Text>
                </View>

                {/* item number3 -----------------------------------------------------*/}
                <View style={{ marginTop: 5 }}>
                  <Image
                    source={icons.calmIndicator}
                    style={{ width: 37, height: 37 }}
                  />
                </View>
                <View style={{ marginTop: 10, marginLeft: 5 }}>
                  <Text style={styles.iConsFont}>Calm Time</Text>
                  <Text style={styles.iConsFont}>[num] min</Text>
                </View>

                {/* item number4 -----------------------------------------------------*/}
                <View style={{ marginTop: 10, marginLeft: 15 }}>
                  <MaterialCommunityIcons
                    name="star-four-points"
                    size={30}
                    color={COLORS.white}
                  />
                </View>
                <View style={{ marginTop: 10, marginLeft: 5 }}>
                  <Text style={styles.iConsFont}>Awards</Text>
                  <Text style={styles.iConsFont}>[num] sparkles</Text>
                </View>
              </View>
            </View>
          </ScrollView>

          <View style={styles.seperatorLine}></View>

          {/* goal ROW+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <View style={styles.componant}>
            <Text style={styles.titleText}>Today's Goal</Text>
            <View style={styles.row}>
              <Image
                source={icons.aim}
                style={{ width: 50, height: 50, marginLeft: 20 }}
              />
              <ProgressBarToday />
            </View>
          </View>

          <View style={styles.seperatorLine}></View>
          {/* Suggetion ROW+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.titleText}>Suggestions</Text>
            <ScrollView
              horizontal
              fadingEdgeLength={200}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.row}>
                <View style={{ marginTop: 30, marginLeft: 20 }}>
                  <TouchableOpacity
                    style={{ marginLeft: 20 }}
                    onPress={() => {
                      setModalVisible(true);
                      setActionTriggered("ACTION_1");
                    }}>
                    <View style={{ marginLeft: 30 }}>
                      <Image
                        source={icons.walking}
                        style={{ width: 20, height: 50 }}
                      />
                    </View>

                    <Text style={styles.primaryFont}>take a walk</Text>
                  </TouchableOpacity>
                </View>

                {/* comp1 ends here------------------------------------------------------------- */}

                <View style={{ marginTop: 30, marginLeft: 25 }}>
                  <TouchableOpacity
                    style={{ marginLeft: 0 }}
                    onPress={() => {
                      setModalVisible(true);
                      setActionTriggered("ACTION_2");
                    }}>
                    <View style={{ marginLeft: 25 }}>
                      <Image
                        source={icons.headphones}
                        style={{ width: 40, height: 40 }}
                      />
                    </View>

                    <Text style={styles.primaryFont}> listen to</Text>
                    <Text style={styles.primaryFont}>some music</Text>
                  </TouchableOpacity>
                </View>

                {/* comp1 ends here------------------------------------------------------------- */}

                <View style={{ marginTop: 40, marginLeft: 30 }}>
                  <TouchableOpacity
                    style={{ marginLeft: 0 }}
                    onPress={() => {
                      setModalVisible(true);
                      setActionTriggered("ACTION_3");
                    }}>
                    <View style={{ marginLeft: 20 }}>
                      <Image
                        source={icons.sleep}
                        style={{ width: 40, height: 40 }}
                      />
                    </View>

                    <Text style={styles.primaryFont}>take a nap</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={{ marginBottom: 30 }}></View>
        </View>
      </ScrollView>
    );
  };

  const renderMonthWindow = () => {
    return (
      <ScrollView>
        <View style={styles.backgroundSettings}>
          <View style={styles.firstcomponant}>
            <ScrollView horizontal={true}>
              <View>
                <StackedBarChart
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                  }}
                  data={monthlyData}
                  segments={2}
                  width={screenWidth * 2}
                  height={220}
                  verticalLabelRotation={0}
                  fromZero={true}
                  hasBarHighlight={false}
                  chartConfig={{
                    legendOffset: -0,
                    backgroundColor: "#e26a00",
                    barPercentage: 0.5,
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 3) => `rgba(200, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 30,
                    },
                    formatYLabel: () => yLabelIterator.next().value,
                    data: data.datasets,
                    propsForDots: {
                      r: "10",
                      strokeWidth: "40",
                      stroke: "#ffa726",
                    },
                  }}
                />
              </View>
            </ScrollView>
          </View>

          <View style={styles.seperatorLine}></View>

          {/* stress-neu-calm-reward ROW+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <ScrollView
            style={{ marginLeft: 10 }}
            horizontal
            fadingEdgeLength={200}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.componant}>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginLeft: 10,
                }}>
                {/* item number 1 -----------------------------------------------------*/}

                <View style={styles.row}>
                  <Image
                    source={icons.stressIndicator}
                    style={{ width: 48, height: 48 }}
                  />
                  <View style={{ marginTop: 10, marginRight: 5 }}>
                    <Text style={styles.iConsFont}>Stress Time</Text>
                    <Text style={styles.iConsFont}>[num] min</Text>
                  </View>
                </View>

                {/* item number 2 -----------------------------------------------------*/}
                <Image
                  source={icons.normalIndicator}
                  style={{ width: 45, height: 45 }}
                />
                <View style={{ marginTop: 10, marginRight: 5 }}>
                  <Text style={styles.iConsFont}>neutural Time</Text>
                  <Text style={styles.iConsFont}>[num] min</Text>
                </View>

                {/* item number3 -----------------------------------------------------*/}
                <View style={{ marginTop: 5 }}>
                  <Image
                    source={icons.calmIndicator}
                    style={{ width: 37, height: 37 }}
                  />
                </View>
                <View style={{ marginTop: 10, marginLeft: 5 }}>
                  <Text style={styles.iConsFont}>Calm Time</Text>
                  <Text style={styles.iConsFont}>[num] min</Text>
                </View>

                {/* item number4 -----------------------------------------------------*/}
                <View style={{ marginTop: 10, marginLeft: 15 }}>
                  <MaterialCommunityIcons
                    name="star-four-points"
                    size={30}
                    color={COLORS.white}
                  />
                </View>
                <View style={{ marginTop: 10, marginLeft: 5 }}>
                  <Text style={styles.iConsFont}>Awards</Text>
                  <Text style={styles.iConsFont}>[num] sparkles</Text>
                </View>
              </View>
            </View>
          </ScrollView>

          <View style={styles.seperatorLine}></View>

          {/* goal ROW+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <View style={styles.componant}>
            <Text style={styles.titleText}>This Month's Goal</Text>
            <View style={styles.row}>
              <Image
                source={icons.aim}
                style={{ width: 50, height: 50, marginLeft: 20 }}
              />
              <ProgressBarMonth />
            </View>
          </View>

          <View style={styles.seperatorLine}></View>
          {/* Suggetion ROW+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.titleText}>This Month's Activities</Text>
            <ScrollView
              horizontal
              fadingEdgeLength={200}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.row}>
                <View style={{ marginTop: 30, marginLeft: 20 }}>
                  <TouchableOpacity
                    style={{ marginLeft: 20 }}
                    onPress={() => {
                      setModalVisible(true);
                      setActionTriggered("ACTION_1");
                    }}>
                    <View style={{ marginLeft: 30, marginBottom: 12 }}>
                      <Text style={styles.primaryFont}>Walking</Text>
                    </View>

                    <AnimatedCircularProgress
                      size={120}
                      width={15}
                      fill={75}
                      tintColor={COLORS.tertiary}
                      backgroundColor="#3d5875"
                      arcSweepAngle={180}
                      rotation={-90}
                      lineCap="square"
                      renderCap={({ center }) => (
                        <Image
                          x={center.x - 10}
                          y={center.y + 10}
                          width={20}
                          height={20}
                          source={icons.walking}
                          style={{
                            width: 20,
                            height: 50,
                            marginLeft: 50,
                            marginTop: 20,
                          }}
                        />
                      )}
                    />

                    <View style={{ marginTop: -30, marginLeft: -10 }}>
                      <Text style={styles.iConsFont}>
                        [num] Hours, [num] minutes
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* comp1 ends here------------------------------------------------------------- */}

                <View style={{ marginTop: 30, marginLeft: 20 }}>
                  <TouchableOpacity
                    style={{ marginLeft: 20 }}
                    onPress={() => {
                      setModalVisible(true);
                      setActionTriggered("ACTION_2");
                    }}>
                    <View style={{ marginLeft: 30, marginBottom: 12 }}>
                      <Text style={styles.primaryFont}>Listening</Text>
                    </View>

                    <AnimatedCircularProgress
                      size={120}
                      width={15}
                      fill={75}
                      tintColor={COLORS.tertiary}
                      backgroundColor="#3d5875"
                      arcSweepAngle={180}
                      rotation={-90}
                      lineCap="square"
                      renderCap={({ center }) => (
                        <Image
                          x={center.x - 10}
                          y={center.y + 10}
                          width={20}
                          height={20}
                          source={icons.headphones}
                          style={{
                            width: 40,
                            height: 40,
                            marginLeft: 40,
                            marginTop: 30,
                          }}
                        />
                      )}
                    />

                    <View style={{ marginTop: -30, marginLeft: -10 }}>
                      <Text style={styles.iConsFont}>
                        [num] Hours, [num] minutes
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* comp2 ends here------------------------------------------------------------- */}


                <View style={{ marginTop: 30, marginLeft: 20 }}>
                  <TouchableOpacity
                    style={{ marginLeft: 20 }}
                    onPress={() => {
                      setModalVisible(true);
                      setActionTriggered("ACTION_3");
                    }}>
                    <View style={{ marginLeft: 30, marginBottom: 12 }}>
                      <Text style={styles.primaryFont}>napping</Text>
                    </View>

                    <AnimatedCircularProgress
                      size={120}
                      width={15}
                      fill={75}
                      tintColor={COLORS.tertiary}
                      backgroundColor="#3d5875"
                      arcSweepAngle={180}
                      rotation={-90}
                      lineCap="square"
                      renderCap={({ center }) => (
                        <Image
                          x={center.x - 10}
                          y={center.y + 10}
                          width={20}
                          height={20}
                          source={icons.sleep}
                          style={{
                            width: 40,
                            height: 40,
                            marginLeft: 40,
                            marginTop: 30,
                          }}
                        />
                      )}
                    />

                    <View style={{ marginTop: -30, marginLeft: -10 }}>
                      <Text style={styles.iConsFont}>
                        [num] Hours, [num] minutes
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={{ marginBottom: 40 }}></View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.backgroundSettings}>
      <View style={styles.customeheader}>
        <View style={styles.circle}>
          <Image source={images.anon} style={styles.Profile} />
        </View>
        <View style={{ marginTop: 12 }}></View>
        <Text style={styles.primaryFont}>{name}</Text>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="star-four-points"
            size={15}
            color={COLORS.white}
          />
          <Text style={styles.secondaryFont}> Total sparkles: 0</Text>
        </View>
      </View>

      <View style={styles.backgroundSettings}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ marginTop: 25, marginBottom: 25 }}>
            <SwitchSelector
              options={[
                { label: "Day", value: "dayWindow" },
                { label: "Month", value: "monthWindow" },
              ]}
              textColor={COLORS.white}
              selectedColor={COLORS.white}
              buttonColor={COLORS.primary}
              borderColor={COLORS.grey}
              backgroundColor={COLORS.grey}
              style={{
                transform: [{ scaleX: 1 }, { scaleY: 1 }],
                width: 200,
                borderRadius: "20",
              }}
              hasPadding
              initial={0}
              onPress={onValueChange}
            />
          </View>
        </View>

        {selectedOption === "dayWindow"
          ? renderDayWindow()
          : renderMonthWindow()}
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        {actionTriggered === "ACTION_1" ? (
          <View style={styles.centeredView}>
            <View style={styles.modalToggle}>
              <Image
                source={icons.walking}
                style={{ width: 40, height: 100 }}
              />
              <Text style={styles.primaryFont}>
                Taking a walk can be a great way to reduce your stress levels
                and improve your mood.
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  navigation.navigate("walking");
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.primaryFont}>Start</Text>
              </Pressable>
            </View>
          </View>
        ) : actionTriggered === "ACTION_2" ? (
          <View style={styles.centeredView}>
            <View style={styles.modalToggle}>
              <Image
                source={icons.headphones}
                style={{ width: 50, height: 50 }}
              />
              <Text style={styles.primaryFont}>
                Putting on some good music can be a total game-changer when
                you're feeling stress.
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  navigation.navigate("music");
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.primaryFont}>Start</Text>
              </Pressable>
            </View>
          </View>
        ) : actionTriggered === "ACTION_3" ? (
          <View style={styles.centeredView}>
            <View style={styles.modalToggle}>
              <Image source={icons.sleep} style={{ width: 50, height: 50 }} />
              <Text style={styles.primaryFont}>
                When life gets overwhelming, taking a quick snooze can be a
                total lifesaver.
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  navigation.navigate("napping");
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.primaryFont}>Start</Text>
              </Pressable>
            </View>
          </View>
        ) : null}
      </Modal>
    </View>
  );
};

export default MainScreen;
