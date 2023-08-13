import * as React from "react";
import { Button, View, Text, TouchableOpacity, Settings } from "react-native";
import { useEffect, useState, useCallback } from "react";
//navigation------------------------------------------------------------------
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
//tab navigation is not used in the code anymore------------------------------
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//drawer navigation-------------------------------------------------------------
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "react-navigation-stack";
import { DrawerActions } from "@react-navigation/native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
//----------------------------------------------------------------------------

//icons libraries
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

//for fonts
import { useFonts } from "expo-font";
import styles from "./screens/mainScreen/mainScreen.style";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

// firebase
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_DB } from "../FirebaseConfig";
import { NavigationProp } from "@react-navigation/native";
import { addDoc, collection } from "firebase/firestore";

//screens
import Header from "./screens/Header";
import MainScreen from "./screens/mainScreen/MainScreen";
import SettingScreen from "./screens/settings/SettingsScreen";
import searchScreen from "./screens/search/SearchScreen";
import Awards from "./screens/awards/AwardScreen";
import Exercise from "./screens/exercise/ExerciseScreen";
import Timer from "./screens/timer/Timer";
import Search from "./screens/search/SearchScreen";
import Login from "./screens/login/loginScreen";
import TimerAwardsScreen from "./screens/walkingSession/TimerAward";
import HelpScreen from "./screens/settings/Help";
import CreationAccount from "./screens/accountCreation/CreateAccount";
import WalkingSession from "./screens/walkingSession/WalkingSession";
import nappingSession from "./screens/napping/NappingSession";
import MusicSession from "./screens/musicSession/MusicSession";
import MusicPlayer from "./screens/musicSession/MusicPlayer";
import FavoriteMusic from "./screens/musicSession/FavMusic";
import MusicAwards from "./screens/musicSession/MusicReward";
import NappingTimer from "./screens/napping/NappingTimer";
import NappingAwards from "./screens/napping/NappingReward";
import Subs from "./screens/settings/subs";
import Connect from "./screens/settings/AppsConnectedto";

//custom
import { COLORS, FONT, icons, images, SIZES } from "../constants";

//------------------------------(below is the mainStack)----------------------------------------------

// const MainStack = createNativeStackNavigator();
// const MainStackNavigator = () => {
//   return (
//     <MainStack.Navigator
//     screenOptions={{
//       headerShown: false
//     }}>
//       <MainStack.Screen name="bottom" component={BottomTabNavigator} />
//     </MainStack.Navigator>
//   );
// };

//main stack ended-----------------------------------------------------------------------------------

//-----------------------------(below is the tab stack)-----------------------------------------------

// const Tab = createBottomTabNavigator();
// const BottomTabNavigator = () => {

//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,

//         tabBarStyle: {
//           backgroundColor: COLORS.primary,
//         },

//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           if (route.name === "Main") {
//             iconName = focused ? "home-outline" : "home-outline";
//           } else if (route.name === "Settings") {
//             iconName = focused ? "settings-outline" : "settings-outline";
//           } else if (route.name === "Search") {
//             iconName = focused ? "search-outline" : "search-outline";
//           } else if (route.name === "Profile") {
//             iconName = focused ? "person" : "person";
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;

//         },

//       })}
//       tabBarOptions={{
//         activeTintColor: COLORS.tertiary,
//         inactiveTintColor: COLORS.lightWhite,
//       }}
//     >
//       <Tab.Screen name="Settings" component={SettingScreen} />
//       {/* <Tab.Screen name="Search" component={searchScreen} /> */}
//       <Tab.Screen name="Main" component={MainScreen}/>
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// };

//tap stack ends here--------------------------------------------------------------------------------

//-----------------------------(below is the Drawer stack)-----------------------------------------------

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <View style={{ flex: 1, justifyContent: "flex-end", marginTop: 290 }}>
        <View style={styles.seperatorLine}></View>
        <DrawerItem
          label="Rate this app"
          onPress={() => {}}
          labelStyle={{
            fontFamily: FONT.medium,
            fontSize: SIZES.medium,
            color: COLORS.white,
            marginLeft: -20,
          }}
          icon={({ size }) => (
            <MaterialCommunityIcons
              name="thumbs-up-down-outline"
              size={size}
              color={COLORS.white}
            />
          )}
        />
        <DrawerItem
          label="Help"
          onPress={() => navigation.navigate("HelpScreen")}
          labelStyle={{
            fontFamily: FONT.medium,
            fontSize: SIZES.medium,
            color: COLORS.white,
            marginLeft: -20,
          }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="help-circle-outline"
              size={size}
              color={COLORS.white}
            />
          )}
        />
        <DrawerItem
          label="Log out"
          onPress={() => FIREBASE_AUTH.signOut()}
          labelStyle={{
            fontFamily: FONT.medium,
            fontSize: SIZES.medium,
            color: COLORS.white,
            marginLeft: -20,
          }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="logout"
              size={size}
              color={COLORS.white}
            />
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      screenOptions={{
        //header related
        headerStyle: { backgroundColor: COLORS.primary },
        headerShown: true,
        headerTitleStyle: {
          fontFamily: FONT.bold,
          fontSize: SIZES.large,
          color: COLORS.white,
        },
        //drawer related

        drawerStyle: {
          backgroundColor: COLORS.drawerColor,
        },
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.white,
        drawerActiveBackgroundColor: COLORS.secondary,
        drawerInactiveBackgroundColor: COLORS.inactiveBackground,

        drawerLabelStyle: { fontSize: 20, marginLeft: -20 },

        drawerPosition: "left",

        headerLeft: () => <DrawerToggleButton />,
        headerShadowVisible: false,

        headerRight: () => (
          <View style={{ marginRight: 15 }}>
            <TouchableOpacity onPress={() => navigation.navigate(Search)}>
              <MaterialCommunityIcons
                name="magnify"
                size={28}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>
        ),
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{
          drawerIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="home"
              size={size}
              color={COLORS.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Timer"
        component={Timer}
        options={{
          drawerIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="timer"
              size={size}
              color={COLORS.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Awards & Achievements"
        component={Awards}
        options={{
          drawerIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="star-four-points"
              size={size}
              color={COLORS.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          drawerIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="cog"
              size={size}
              color={COLORS.white}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Search"
        component={searchScreen}
        options={{ drawerItemStyle: { display: "none" } }}
      />
      <Drawer.Screen
        name="Exercises"
        component={Exercise}
        options={{
          drawerIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="run-fast"
              size={size}
              color={COLORS.white}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const [user, setUser] = useState<User | null>(null);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  if (!fontsLoaded) return null;

  return (

    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerShadowVisible: false,
          headerShown: true,
          headerTitleStyle: {
            fontFamily: FONT.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
          },
          headerTintColor: COLORS.white,
        }}
        initialRouteName="Login">
        {user?.emailVerified ? (
          <Stack.Screen
            name="main"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="Timeawards"
          component={TimerAwardsScreen}
          options={{ headerShown: true, headerTitle: "Walking Session" }}
        />
        <Stack.Screen
          name="HelpScreen"
          component={HelpScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="accountCreation"
          component={CreationAccount}
          options={{ headerShown: true, headerTitle: "Create an account" }}
        />
        <Stack.Screen
          name="walking"
          component={WalkingSession}
          options={{ headerShown: true, headerTitle: "Walking session" }}
        />
        <Stack.Screen
          name="music"
          component={MusicSession}
          options={{ headerShown: true, headerTitle: "Music session" }}
        />
        <Stack.Screen
          name="napping"
          component={nappingSession}
          options={{ headerShown: true, headerTitle: "Napping session" }}
        />
        <Stack.Screen
          name="Player"
          component={MusicPlayer}
          options={{ headerShown: true, headerTitle: "Music session" }}
        />
        <Stack.Screen
          name="FavouriteMusic"
          component={FavoriteMusic}
          options={{ headerShown: true, headerTitle: "Music session" }}
        />
        <Stack.Screen
          name="MusicAwards"
          component={MusicAwards}
          options={{ headerShown: true, headerTitle: "Music session" }}
        />
        <Stack.Screen
          name="NappingTimer"
          component={NappingTimer}
          options={{ headerShown: true, headerTitle: "Napping session" }}
        />
        <Stack.Screen
          name="NappingAwards"
          component={NappingAwards}
          options={{ headerShown: true, headerTitle: "Napping session" }}
        />
        <Stack.Screen
          name="subs"
          component={Subs}
          options={{ headerShown: true, headerTitle: "Subscription" }}
        />
        <Stack.Screen
          name="Connected"
          component={Connect}
          options={{ headerShown: true, headerTitle: "Apps Connected" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
