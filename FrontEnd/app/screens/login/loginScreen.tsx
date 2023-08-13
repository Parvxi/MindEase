import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    Button,
    KeyboardAvoidingView,
    TouchableOpacity,
    Image,
    Dimensions
 } from 'react-native';
import React from 'react';

import { FIREBASE_AUTH, FIREBASE_DB } from '../../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

import { COLORS, FONT, icons, images, SIZES } from "../../../constants";

import styles from "./login.style";
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';


const Login = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const auth = FIREBASE_AUTH

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            const user = auth.currentUser;
            if (user?.emailVerified === false ){
                alert('Email not Verified');
            }
        } catch (e: any) {
            console.log(e);
            alert('Sign in failed: ' + e.message);
        } finally {
            setLoading(false);
        }
    };

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser; 
            if (user !== null){ 
            await sendEmailVerification(user); 
                console.log(response); 
                const uid  = user.uid;
                console.log( uid);               
                await setDoc(doc(FIREBASE_DB, "Users", uid), {
                    name: "",
                    email: email,
                    password: password,
                    birthday: "",
                    gender: "",
                    job: "",    
                    sparkles: "",
                  });
                    const docRef = doc(FIREBASE_DB, "Users", uid);
                    const colRef = collection(docRef, "Prediction")
                    addDoc(colRef, {
                    PRED: "",
                    });

                console.log('file: list ', doc);
                alert('Check your emails');
            }
        } catch (e: any) {
            console.log(e);
            alert('Rigestritation failed: ' + e.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        
        <View style={{ flex: 1 ,position: 'relative',}}>
            <Image source={images.gradientBG} style={{ position: 'absolute', top: 0, left: 0, width: screenWidth, height: screenHeight, resizeMode: 'stretch', zIndex: -1 }} />


            <View>
                <Text style={styles.welcome}>WELCOME TO </Text>
            </View>


            <View style={styles.row}>
                <Text style={styles.mind}>MIND</Text>
                <Text style={styles.ease}>EASE</Text>
            </View>


            <View style={{ justifyContent: 'center', alignItems: 'center' , marginTop:35, marginBottom:50 }}>
                <Image source={icons.appLogo} style={{ width: 100, height: 100 }}/>
            </View>

            <KeyboardAvoidingView behavior='padding'> 
                <View style={{ padding: 6}}>
                <TextInput


                value={email}
                style={[styles.input, {fontFamily:FONT.medium, color:COLORS.background,  }]}
                placeholder='Email'
                placeholderTextColor={'grey'}
                autoCapitalize='none'
                onChangeText={setEmail}>
                </TextInput>
                </View>

                <View style={{marginTop:1, padding: 6}}>
                <TextInput
                secureTextEntry={true}
                value={password}
                style={[styles.input, {fontFamily:FONT.medium, color:COLORS.background}]}
                placeholderTextColor={'grey'}
                placeholder='Password'
                autoCapitalize='none'
                onChangeText={setPassword}>
                </TextInput>
                </View>

                

                {loading ? (<ActivityIndicator size="large" color={COLORS.tertiary} /> 
                ) : ( 
                <>
                <View style={{alignItems: "center",}}>
                <TouchableOpacity
                onPress={signIn}
                style={styles.button} >
                <Text style={styles.iConsFont}>Login</Text>
                </TouchableOpacity>
                </View>

                <View>
                <Text style={styles.primaryFont}>forgot password</Text>
            </View>

                <View style={styles.row}>
            <View>
                <Text style={styles.primaryFont}>Don't have an account? </Text>
            </View>
                <View style={{alignItems: "center", marginTop:70}}>
                <TouchableOpacity onPress={() => navigation.navigate("accountCreation")}>
                <Text style={styles.secondaryFont}>Create account</Text>
                </TouchableOpacity>
                </View>
                </View>
                </>
                )}
            </KeyboardAvoidingView>    
        </View>
    );
};


export default Login;
