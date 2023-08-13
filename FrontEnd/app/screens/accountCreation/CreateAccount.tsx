import {
  View,
  Image,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  ActivityIndicator,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";
import Constants from "expo-constants";
import DateTimePicker from "@react-native-community/datetimepicker";
import { COLORS, FONT, icons, images, SIZES } from "../../../constants";
const Signup = () => {
  const [name, setName] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [job, setJob] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [gender, setGender] = useState("");

  const handleSelect = (value) => setGender(value);

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = auth.currentUser;
      if (user !== null) {
        await sendEmailVerification(user);
        console.log(response);
        const uid = user.uid;
        console.log(uid);
        await setDoc(doc(FIREBASE_DB, "Users", uid), {
          name: name,
          email: email,
          password: password,
          birthday: birthday,
          gender: gender,
          job: job,
          sparkles: "",
        });
        const docRef = doc(FIREBASE_DB, "Users", uid);
        const colRef = collection(docRef, "Prediction");
        addDoc(colRef, {
          PRED: "",
        });

        console.log("file: list ", doc);
        alert("Check your emails");
      }
    } catch (e: any) {
      console.log(e);
      alert("Rigestritation failed: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());
  const [formReady, setFormReady] = useState(false);

  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setBirthday(currentDate.toDateString());
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    setBirthday(date.toDateString());
    toggleDatePicker();
  };

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Image
        source={images.gradientBG}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: screenWidth,
          height: screenHeight,
          resizeMode: "stretch",
          zIndex: -1,
        }}
      />

      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <View style={{ marginTop: 20 }}></View>

          <Text style={styles.label}>Name</Text>

          <TextInput
            value={name}
            style={[
              styles.input,
              { fontFamily: FONT.medium, color: COLORS.background },
            ]}
            placeholder="Type your name here"
            placeholderTextColor={"grey"}
            autoCapitalize="none"
            onChangeText={setName}></TextInput>

          <Text style={styles.label}>Email</Text>

          <TextInput
            value={email}
            style={[
              styles.input,
              { fontFamily: FONT.medium, color: COLORS.background },
            ]}
            placeholder="Type your email here"
            placeholderTextColor={"grey"}
            autoCapitalize="none"
            onChangeText={setEmail}></TextInput>

          <Text style={styles.label}>Password</Text>

          <TextInput
            secureTextEntry={true}
            value={password}
            style={[
              styles.input,
              { fontFamily: FONT.medium, color: COLORS.background },
            ]}
            placeholder="Type your password here"
            placeholderTextColor={"grey"}
            autoCapitalize="none"
            onChangeText={setPassword}></TextInput>

          <View>
            <Text style={styles.label}>Date of Birth</Text>

            {showPicker && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onChange}
                style={styles.datePicker}
              />
            )}

            {showPicker && Platform.OS === "ios" && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    styles.pickerButton,
                    { backgroundColor: "#11182711" },
                  ]}
                  onPress={toggleDatePicker}>
                  <Text style={[styles.buttonText, { color: COLORS.grey }]}>
                    Cancel
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.pickerButton]}
                  onPress={confirmIOSDate}>
                  <Text style={[styles.buttonText]}>Confirm</Text>
                </TouchableOpacity>
              </View>
            )}

            {!showPicker && (
              <Pressable onPress={toggleDatePicker}>
                <TextInput
                  style={styles.input}
                  placeholder="Sat Jan 01 2000"
                  value={birthday}
                  onChangeText={setDateOfBirth}
                  placeholderTextColor="#11182744"
                  editable={false}
                  onPressIn={toggleDatePicker}
                />
              </Pressable>
            )}
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.label}>Gender </Text>
            <TouchableOpacity
              onPress={() => handleSelect("male")}
              style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  height: 20,
                  width: 20,
                  marginBottom: 15,
                  borderRadius: 10,
                  borderWidth: 3,
                  borderColor:
                    gender === "male" ? COLORS.tertiary : COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 40,
                }}>
                {gender === "male" && (
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      borderRadius: 5,
                      backgroundColor: COLORS.tertiary,
                    }}
                  />
                )}
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  marginBottom: 10,
                  fontWeight: "500",
                  fontSize: 16,
                  color: COLORS.white,
                }}>
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSelect("female")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
              }}>
              <View
                style={{
                  height: 20,
                  width: 20,
                  marginBottom: 15,
                  borderRadius: 10,
                  borderWidth: 3,
                  borderColor:
                    gender === "female" ? COLORS.tertiary : COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 40,
                }}>
                {gender === "female" && (
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      borderRadius: 5,
                      backgroundColor: COLORS.tertiary,
                    }}
                  />
                )}
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  marginBottom: 10,
                  fontWeight: "500",
                  fontSize: 16,
                  color: COLORS.white,
                }}>
                Female
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>job</Text>
          <TextInput
            value={job}
            style={[
              styles.input,
              { fontFamily: FONT.medium, color: COLORS.background },
            ]}
            placeholder="Type your job here"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={setJob}></TextInput>

          {loading ? (
            <ActivityIndicator size="large" color={COLORS.tertiary} />
          ) : (
            <>
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.button} onPress={signUp}>
                  <Text style={styles.iConsFont}>Create an account</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight + 50 : 50,
  },
  head: {
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
    color: "#111827cc",
  },
  moto: {
    fontWeight: "400",
    fontSize: 15,
    marginBottom: 35,
    textAlign: "center",
    color: "#111827cc",
  },
  label: {
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 5,
    color: COLORS.white,
    marginLeft: 20,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderColor: "#fff",
    borderWidth: 0,
    borderRadius: 90,
    margin: 5,
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  button: {
    width: 200,
    height: 40,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: COLORS.tertiary,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
  datePicker: {
    height: 120,
    marginTop: -10,
  },
  pickerButton: {
    paddingHorizontal: 20,
  },
  iConsFont: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
});
