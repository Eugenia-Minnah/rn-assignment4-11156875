import { View, Text, Button, TextInput, StyleSheet,Image, Pressable} from 'react-native'
import React, { useState } from 'react'

export default function LoginScreen({navigation}) {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

 const handleLogin = ()=>{
    navigation.navigate ('Home',{name,email});
 }
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Jobizz</Text>
       <Image source={require('../assets/welcome.png')} style={styles.subTitle}/>
       <Text style={styles.text}>Let’s log in. Apply to jobs!</Text>
       <View style={styles.inputBox}>
        <View>
            <TextInput placeholder='Name'  style={styles.input}/>
            <TextInput placeholder='Email' style={styles.input}/>
        </View>
        <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
       </View>
       <View style={styles.alt}>
        <View style={styles.line}/>
        <Text style={styles.altText}>Or continue with</Text>
        <Text style={styles.line}/>
       </View>
       <View style={styles.icons}>
        <Pressable style={styles.iconBtn}><Image source={require('../assets/apple.png')} style={styles.logo}/></Pressable>
        <Pressable style={styles.iconBtn}><Image source={require('../assets/google.png')} style={styles.logo}/></Pressable>
        <Pressable style={styles.iconBtn}><Image source={require('../assets/facebook.png')} style={styles.logo}/></Pressable>
       </View>
       <Text style={styles.register}>Haven’t an account? <Text style={styles.link}>Register</Text></Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        left:24,
        top:100,
    },
    title:{
        fontSize:22,
        fontWeight:600,
        color:'#356899',
    },
    subTitle:{
        width:207,
        height:24,
        top:8,
    },
    text:{
        color:'#0D0D26',
        fontSize:14,
        fontWeight:400,
        top:15,
        left:5,
    },
    inputBox:{
        top:120,
        marginLeft:18,
    },
    input:{
        height:52,
        width:330,
        borderWidth:1,
        borderRadius:10,
        marginBottom:15,
        borderColor:'#AFB0B6',
        padding:12,
        fontSize:14,
        fontWeight:500,
        color:'#000000',
    },
    button:{
        backgroundColor:'#356899',
        height:52,
        width:330,
        borderRadius:5,
        alignItems:'center',
        marginTop:20,
    },
    buttonText:{
        fontSize:16,
        fontWeight:500,
        color:'#ffffff',
        top:15,
    },
    alt:{
        flexDirection:'row',
        top:200,
        left:24,
    },
    line:{
        height:0.5,
        backgroundColor:'#AFB0B6',
        width:100,
    },
    altText:{
        color:'#AFB0B6',
        marginTop:-10,
        paddingLeft:10,
        paddingRight:10,
    },
    icons:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        top:230,
        gap:40,
    },
    iconBtn:{
        padding:15,
        borderRadius:'50%',
        backgroundColor:'#ffffff',
    },
    logo:{
        height:26,
        width:26,
    },
    register:{
        top:280,
        fontSize:14,
        fontWeight:400,
        left:90,
        
    },
    link:{
        color:'#356899',
    }

})

