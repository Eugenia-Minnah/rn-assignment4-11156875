import { View, Text, StyleSheet, Image, FlatList, ScrollView} from 'react-native'
import React from 'react';
import FeaturedJobs from '../components/FeaturedJobs';
import PopularJobs from '../components/PopularJobs';

export default function HomeScreen({route}) {
    const {name,email} = route.params;
    const featuredJobs =[
        {id:'1', title:'Software Engineer',company:'Facebook',salary:'$180,000',location:'Accra,Ghana',icon:require('../assets/facebook.png'),backgroundColor: '#FF9900'},
        {id:'2', title:'Software ',company:'Facebook',salary:'$180,000',location:'Accra,Ghana',icon:require('../assets/google.png'),backgroundColor:'#'},
        {id:'3', title:'Software Engineer',company:'Facebook',salary:'$180,000',location:'Accra,Ghana',icon:require('../assets/facebook.png'),backgroundColor:'#'},
        {id:'4', title:'Software Engineer',company:'Facebook',salary:'$180,000',location:'Accra,Ghana',icon:require('../assets/facebook.png'),backgroundColor:'#'},
        {id:'5', title:'Software Engineer',company:'Facebook',salary:'$180,000',location:'Accra,Ghana',icon:require('../assets/facebook.png'),backgroundColor:'#'},
        {id:'6', title:'Software Engineer',company:'Facebook',salary:'$180,000',location:'Accra,Ghana',icon:require('../assets/facebook.png'),backgroundColor:'#'},
        {id:'7', title:'Software Engineer',company:'Facebook',salary:'$180,000',location:'Accra,Ghana',icon:require('../assets/facebook.png'),backgroundColor:'#'},
        {id:'8', title:'Software Engineer',company:'Facebook',salary:'$180,000',location:'Accra,Ghana',icon:require('../assets/facebook.png'),backgroundColor:'#'},
        {id:'9', title:'Software Engineer',company:'Facebook',salary:'$180,000',location:'Accra,Ghana',icon:require('../assets/facebook.png'),backgroundColor:'#'},
    ]
    const popularJobs = [
        { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', image: require('../assets/facebook.png') },
        { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', image: require('../assets/facebook.png') },
        { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', image: require('../assets/facebook.png') },
        { id: '4', title: 'Marketing Specialist', company: 'Nike', salary: '$90,000/y', location: 'New York, US', image: require('../assets/facebook.png') },
        { id: '5', title: 'Sales Associate', company: 'Walmart', salary: '$80,000/y', location: 'Texas, US', image: require('../assets/facebook.png') },
        { id: '6', title: 'HR Manager', company: 'Google', salary: '$95,000/y', location: 'California, US', image: require('../assets/facebook.png') },
        { id: '7', title: 'Finance Analyst', company: 'Amazon', salary: '$100,000/y', location: 'Washington, US', image: require('../assets/facebook.png') },
        { id: '8', title: 'Operations Manager', company: 'Microsoft', salary: '$110,000/y', location: 'Seattle, US', image: require('../assets/facebook.png') },
      ];

return (
    <ScrollView style={styles.home}>
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
    <FlatList
    data={featuredJobs}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) =>
        <FeaturedJobs job={item}/>
    }
    keyExtractor={item => item.id}
    />

    <View style={styles.popularJobs}>
        <Text style={styles.popularTitle}>Popular Jobs</Text>
        <Text style={styles.popularView}>See all</Text>
    </View>
    <FlatList
    data={popularJobs}
    vertical
    showsVerticalScrollIndicator={false}
    renderItem={({item}) =>
        <PopularJobs job={item}/>
    }
    keyExtractor={item => item.id}
    />
    </ScrollView>


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
        top:100,
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