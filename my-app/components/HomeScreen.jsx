import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

export default function HomeScreen({route}) {
    const {name,email} = route.params;


return (
    <View style={styles.home}>
    <View>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.email}>{email}</Text>
    <Image source={require('../assets/user.png')} style={styles.user}/>
    </View>
    <View style={styles.searchBox}>
        <Image source={require('../assets/search.png')} style={styles.searchIcon}/>
        <Text style={styles.searchText}>Search a job or position</Text>
        <View style={styles.menu}>
        <Image source={require('../assets/menu.png')} style={styles.menuIcon}/>
    </View>
    </View>
    <View style={styles.featuredJobs}>
        <Text style={styles.featured}>Featured Jobs</Text>
        <Text style={styles.view}>See all</Text>
    </View>
    <View style={styles.popularJobs}>
        <Text style={styles.popularTitle}>Popular Jobs</Text>
        <Text style={styles.popularView}>See all</Text>
    </View>
    </View>


)
}


const styles = StyleSheet.create({
    home:{
        top:60,
        left:24,
    },
    name:{
        color:'#0D0D26',
        fontSize:24,
        fontWeight:700,
    },
    email:{
        color:'#95969D',
        fontSize:20,
        fontWeight:400,
    },
    user:{
        left:300,
        top:-60,
        height:54,
        width:54,
    },
    searchBox:{
        flexDirection:'row',
        width:263,
        height:48,
        borderWidth:1,
        borderRadius:12,
        backgroundColor:'#F2F2F3',
    },
    searchIcon:{
        width:26,
        height:26,
        left:20,
        top:10,
    },
    searchText:{
        color:'#95969D',
        fontSize:15,
        fontWeight:500,
        left:25,
        top:12,
    },
    menu:{
        left:115,
        height:48,
        width:48,
        backgroundColor:'#F2F2F3',
        borderRadius:'12,',
        borderWidth:1,
    },
    menuIcon:{
        height:26,
        width:26,
        top:10,
        left:12,
    },
    featuredJobs:{
        flexDirection:'row',
    justifyContent:'space-between',
    top:50,
    },
    featured:{
        fontSize:16,
        fontWeight:600,
        color:'#0D0D26',
    },
    view:{
    fontSize:14,
    fontWeight:400,
    right:65,
    color:'#95969D',
    },
    popularJobs:{
        flexDirection:'row',
    justifyContent:'space-between',
    top:300,
    },
    popularTitle:{
        fontSize:17,
        fontWeight:600,
        color:'#0D0D26',
    },
    popularView:{
    fontSize:15,
    fontWeight:400,
    right:65,
    color:'#95969D',
    },

})