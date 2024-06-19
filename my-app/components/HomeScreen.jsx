import { View, Text, StyleSheet, Image, FlatList, ScrollView} from 'react-native'
import React from 'react';
import FeaturedJobs from '../components/FeaturedJobs';
import PopularJobs from '../components/PopularJobs';

export default function HomeScreen({route}) {
    const {name,email} = route.params;
    const featuredJobs =[
        {id:'1', title:'Software Engineer',company:'Facebook',salary:'$180,000',location:'Accra,Ghana',icon:require('../assets/facebook.png'),backgroundColor: '#356899'},
        {id:'2', title:'Software Manager',company:'Google',salary:'$160,000',location:'Accra,Ghana',icon:require('../assets/google.png'),backgroundColor:'#000000'},
        {id:'3', title:'Sales Manager',company:'Adidas',salary:'$10,000',location:'Accra,Ghana',icon:require('../assets/adidas.png'),backgroundColor:'#FF9900'},
        {id:'4', title:'Store Manager',company:'Amazon',salary:'$180,000',location:'Accra,Ghana',icon:require('../assets/amazon.png'),backgroundColor:'#3A3B3C'},
        {id:'5', title:'Driver',company:'Target',salary:'$2,000',location:'Accra,Ghana',icon:require('../assets/target.png'),backgroundColor:'#808000'},
        {id:'6', title:'Product Manager',company:'Beats',salary:'$5,000',location:'Accra,Ghana',icon:require('../assets/beats.png'),backgroundColor:'#C0C0C0'},
        {id:'7', title:'Cashier',company:'Burger King',salary:'$1,000',location:'Airport,Ghana',icon:require('../assets/burgerKing.png'),backgroundColor:'#800080'},
        {id:'8', title:'Delivery Driver',company:'Uber Eats',salary:'$1,000',location:'Accra,Ghana',icon:require('../assets/uber.png'),backgroundColor:'#E5E4E2'},
        {id:'9', title:'Developer',company:'WhatsApp',salary:'$50,000',location:'Accra,Ghana',icon:require('../assets/whatsapp.png'),backgroundColor:'#800000'},
    ]
    const popularJobs = [
        { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', image: require('../assets/burgerKing.png') },
        { id: '2', title: 'Finance Analyst', company: 'Amazon', salary: '$100,000/y', location: 'Washington, US', image: require('../assets/amazon.png') },
        { id: '3', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', image: require('../assets/beats.png') },
        { id: '4', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', image: require('../assets/facebook.png') },
        { id: '5', title: 'Marketing Specialist', company: 'Adidas', salary: '$90,000/y', location: 'New York, US', image: require('../assets/adidas.png') },
        { id: '6', title: 'Sales Associate', company: 'Target', salary: '$80,000/y', location: 'Texas, US', image: require('../assets/target.png') },
        { id: '7', title: 'HR Manager', company: 'Google', salary: '$95,000/y', location: 'California, US', image: require('../assets/google.png') },
    ];

return (
    <ScrollView>
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
    </View>

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
        top:40
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