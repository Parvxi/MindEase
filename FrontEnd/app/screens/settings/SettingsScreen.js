import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./SettingsScreen.style";
import { images, COLORS } from "../../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { FIREBASE_AUTH, FIREBASE_DB } from '../../../FirebaseConfig';
import { doc,getDoc } from 'firebase/firestore';
const MainScreen = ({ navigation }) => {

  const auth = FIREBASE_AUTH
  const [email, setEmail] = React.useState('');
  const [job, setJob] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [name, setName] = React.useState('');
  const [mood, setMood] = React.useState('');
  const [resultTime, setResultTime] = React.useState('');

const User = auth.currentUser; // Get the current user


const GET_Doc = async () => {
const Uid = User?.uid.toString()
console.log(Uid);     
const docRef = doc(FIREBASE_DB, "Users",Uid.toString());
const docref2 = doc(docRef, "Prediction" , "80nFL56JAvUphNOoNN5f");
const docSnap = await getDoc(docRef);
const docSnap2 = await getDoc(docref2);

if (docSnap.exists()) {
  console.log("Document data:", docSnap2.data());
  setBirthday(docSnap.data()?.birthday)
  setEmail(docSnap.data()?.email)
  setName(docSnap.data()?.name)
  setJob(docSnap.data()?.job)
  setMood(docSnap2.data()?.Prediction_result)
  setResultTime(docSnap2.data()?.timestamp)
  console.log( mood + resultTime); 
  setGender(docSnap.data()?.gender.toString())
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");

}
};

React.useEffect(() => {
    GET_Doc();
  }, []);

  return (
    <View style={styles.backgroundSettings}>
      <ScrollView>
      <View style={styles.area}>
      
      <View style={styles.insightComp}>
        {/* the user pic and and name */}
        <View style={styles.centeredView}>
        <View style={styles.circle}>
        <Image
                  source={images.anon}
                  style={ styles.Profile}/>
        </View>
        <Text style={styles.primaryFont}>{name}</Text>
        </View>
        
        {/* the user info */}
        <View style={{marginLeft:10, marginTop:20, }}>

        <View style={styles.row}>
        <Text style={styles.primaryFont}>Email</Text>
        <View style={{marginLeft:70}}>
        <Text style={styles.secondaryFont}>{email}</Text>
        </View>
        </View>

        <TouchableOpacity>
        <View style={styles.row}>
        <Text style={styles.primaryFont}>Change Username</Text>
        <MaterialCommunityIcons 
         style={{marginLeft:150}}
         name="chevron-right" 
         size= {20}
         color={COLORS.white}
        />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.row}>
        <Text style={styles.primaryFont}>Change Password</Text>
        <MaterialCommunityIcons 
         style={{marginLeft:155}}
         name="chevron-right" 
         size= {20}
         color={COLORS.white}
        />
        </View>
        </TouchableOpacity>

        <View style={styles.row}>
        <Text style={styles.primaryFont}>Birthdate</Text>
        <View style={{marginLeft:45}}>
        <Text style={styles.secondaryFont}>{birthday}</Text>
        </View>
        </View>

        <View style={styles.row}>
        <Text style={styles.primaryFont}>Gender</Text>
        <View style={{marginLeft:60}}>
        <Text style={styles.secondaryFont}>{gender}</Text>
        </View>
        </View>

        <View style={styles.row}>
        <Text style={styles.primaryFont}>Job</Text>
        <View style={{marginLeft:87}}>
        <Text style={styles.secondaryFont}>{job}</Text>
        </View>
        </View>
        </View>

      </View> 
{/* first comp ends here */}

      <Text style={styles.titleText}>General Settings</Text>

      <View style={styles.insightComp}>
      <View style={{marginLeft:10, marginTop:20, }}>

        <TouchableOpacity>
        <View style={styles.row}>
        <MaterialCommunityIcons 
         style={{marginRight:10}}
         name="web" 
         size= {20}
         color={COLORS.white}
        />
        <Text style={styles.primaryFont}>Language</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.row}>
        <MaterialCommunityIcons 
         style={{marginRight:10}}
         name="thumbs-up-down-outline" 
         size= {20}
         color={COLORS.white}
        />
        <Text style={styles.primaryFont}>Rate app</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate("subs")}
        >
        <View style={styles.row}>
        <MaterialCommunityIcons 
         style={{marginRight:10}}
         name="crown-circle" 
         size= {20}
         color={COLORS.white}
        />
        <Text style={styles.primaryFont}>Subscriptions</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate("Connected")}
        >
        <View style={styles.row}>
        <Text style={styles.primaryFont}>App Connected</Text>
        <MaterialCommunityIcons 
         style={{marginLeft:170}}
         name="chevron-right" 
         size= {20}
         color={COLORS.white}
        />
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate("HelpScreen")}
        >
        <View style={styles.row}>
        <MaterialCommunityIcons 
         style={{marginRight:10}}
         name="help-circle-outline" 
         size= {20}
         color={COLORS.white}
        />
        <Text style={styles.primaryFont}>Help</Text>
        </View>
        </TouchableOpacity>
      </View>
      </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;
