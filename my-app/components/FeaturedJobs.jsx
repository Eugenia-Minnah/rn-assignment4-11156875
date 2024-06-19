import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'

export default function FeaturedJobs({job}) {
  return (
    <View style={styles.facebookBox}>
        <View style={styles.logo}>
           <Image source={job.icon} style={styles.facebookIcon}/>
        </View>
        <Text style={styles.facebookTitle}>{job.title}</Text>
        <Text style={styles.facebookText}>{job.company}</Text>
       <View style={styles.lowerText}>
        <Text style={styles.salary}>{job.salary}</Text>
        <Text style={styles.location}>{job.location}</Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    logo:{
        backgroundColor:'#ffffff',
        height:50,
        width:50,
        borderRadius:12,
        top:15,
        left:20,
    },
    facebookBox:{
        top: 100,
        width:280,
        height:186,
        borderRadius:24,
        backgroundColor:'#5386E4',
        marginBottom:100,
        marginRight:10,
    },
    facebookIcon:{
        width:26,
        height:26,
        left:10,
        top:10,
    },
    facebookText:{
        fontSize:14,
        fontWeight:400,
        left:78,
        top:-30,
        color:'#ffffff'
    },
    facebookTitle:{
        fontSize:16,
        fontWeight:600,
        left:78,
        top:-30,
        color:'#ffffff',

    },
    lowerText:{
        flexDirection:'row',
        left:20,
        gap:85,
        top:70,
    },
    salary:{
        fontSize:15,
        color:'#ffffff'
    },
    location:{
        fontSize:15,
        color:'#ffffff'
    }

})