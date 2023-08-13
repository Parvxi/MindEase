import * as React from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import styles from "./awards.style";
import { icons, COLORS } from "../../../constants";

import { ScrollView } from "react-native-gesture-handler";

const Awards = ({ navigation }) => {
  return (
    <View style={styles.backgroundSettings}>
      <View style={styles.area}>
        <View style={styles.row}>
          <Image
            source={icons.classAward}
            style={{
              width: 70,
              height: 70,
              marginRight: 30,
            }}
          />
          <Image
            source={icons.monthAward1}
            style={{
              width: 75,
              height: 75,
              marginRight: 35,
            }}
          />
          <Image
            source={icons.weeksAwards}
            style={{
              width: 60,
              height: 80,
            }}
          />
        </View>

        <View style={{ marginTop: 10 }}></View>
        <View style={styles.row}>
          <Image
            source={icons.award}
            style={{
              width: 60,
              height: 60,
              marginRight: 35,
              marginLeft: 10,
            }}
          />
          <Image
            source={icons.invitesAward}
            style={{
              width: 70,
              height: 70,
              marginRight: 40,
            }}
          />
          <Image
            source={icons.monthAward2}
            style={{
              width: 60,
              height: 80,
            }}
          />
        </View>
      </View>

      <View style={styles.seperatorLine}></View>

      <View style={styles.couponArea}>
        <ScrollView>
          <View>
            <Image
              source={icons.subticket}
              style={{
                width: 350,
                height: 120,
                marginBottom: 15,
              }}
            />

            <Text
              style={{
                position: "absolute",

                paddingRight: 90,
                paddingBottom: 80,
                paddingLeft: 60,
                transform: [{ rotate: "-90deg" }],
              }}>
              Expires in
            </Text>
            <Text
              style={{
                position: "absolute",
                paddingRight: 100,

                transform: [{ rotate: "-90deg" }],
              }}>
              00/00/0000
            </Text>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                position: "absolute",
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  marginLeft: 120,
                  marginTop: 30,
                  borderRadius: 30,
                  backgroundColor: COLORS.secondary,
                  position: "absolute",
                }}></View>
              <View>
                <View>
                  <Text
                    style={{
                      position: "absolute",
                      paddingLeft: 190,
                      marginTop: 40,
                    }}>
                    15% Discount
                  </Text>

                  <Text
                    style={{
                      position: "absolute",
                      paddingLeft: 190,
                      marginTop: 55,
                      width: 320,
                      fontSize: 10,
                    }}>
                    Applied on appliances, sports, accessories category
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Image
              source={icons.subticket}
              style={{
                width: 350,
                height: 120,
                marginBottom: 15,
              }}
            />

            <Text
              style={{
                position: "absolute",

                paddingRight: 90,
                paddingBottom: 80,
                paddingLeft: 60,
                transform: [{ rotate: "-90deg" }],
              }}>
              Expires in
            </Text>
            <Text
              style={{
                position: "absolute",
                paddingRight: 100,

                transform: [{ rotate: "-90deg" }],
              }}>
              00/00/0000
            </Text>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                position: "absolute",
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  marginLeft: 120,
                  marginTop: 30,
                  borderRadius: 30,
                  backgroundColor: COLORS.secondary,
                  position: "absolute",
                }}></View>
              <View>
                <View>
                  <Text
                    style={{
                      position: "absolute",
                      paddingLeft: 190,
                      marginTop: 40,
                    }}>
                    15% Discount
                  </Text>

                  <Text
                    style={{
                      position: "absolute",
                      paddingLeft: 190,
                      marginTop: 55,
                      width: 320,
                      fontSize: 10,
                    }}>
                    Applied on appliances, sports, accessories category
                  </Text>
                </View>
              </View>
            </View>
          </View>


          <View>
            <Image
              source={icons.subticket}
              style={{
                width: 350,
                height: 120,
                marginBottom: 15,
              }}
            />

            <Text
              style={{
                position: "absolute",

                paddingRight: 90,
                paddingBottom: 80,
                paddingLeft: 60,
                transform: [{ rotate: "-90deg" }],
              }}>
              Expires in
            </Text>
            <Text
              style={{
                position: "absolute",
                paddingRight: 100,

                transform: [{ rotate: "-90deg" }],
              }}>
              00/00/0000
            </Text>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                position: "absolute",
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  marginLeft: 120,
                  marginTop: 30,
                  borderRadius: 30,
                  backgroundColor: COLORS.secondary,
                  position: "absolute",
                }}></View>
              <View>
                <View>
                  <Text
                    style={{
                      position: "absolute",
                      paddingLeft: 190,
                      marginTop: 40,
                    }}>
                    15% Discount
                  </Text>

                  <Text
                    style={{
                      position: "absolute",
                      paddingLeft: 190,
                      marginTop: 55,
                      width: 320,
                      fontSize: 10,
                    }}>
                    Applied on appliances, sports, accessories category
                  </Text>
                </View>
              </View>
            </View>
          </View>


          <View>
            <Image
              source={icons.subticket}
              style={{
                width: 350,
                height: 120,
                marginBottom: 15,
              }}
            />

            <Text
              style={{
                position: "absolute",

                paddingRight: 90,
                paddingBottom: 80,
                paddingLeft: 60,
                transform: [{ rotate: "-90deg" }],
              }}>
              Expires in
            </Text>
            <Text
              style={{
                position: "absolute",
                paddingRight: 100,

                transform: [{ rotate: "-90deg" }],
              }}>
              00/00/0000
            </Text>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                position: "absolute",
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  marginLeft: 120,
                  marginTop: 30,
                  borderRadius: 30,
                  backgroundColor: COLORS.secondary,
                  position: "absolute",
                }}></View>
              <View>
                <View>
                  <Text
                    style={{
                      position: "absolute",
                      paddingLeft: 190,
                      marginTop: 40,
                    }}>
                    15% Discount
                  </Text>

                  <Text
                    style={{
                      position: "absolute",
                      paddingLeft: 190,
                      marginTop: 55,
                      width: 320,
                      fontSize: 10,
                    }}>
                    Applied on appliances, sports, accessories category
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Awards;
