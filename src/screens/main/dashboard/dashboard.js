import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    View,
    Text,
    Image,
    TextInput, 
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import styles from '../styles';
import { getProducts } from '../../../redux/actions/product';
import { getCategories } from '../../../redux/actions/category';

const Dashboard = (props) => {
    const dataProducts = useSelector(state => state.product.productList);
    const dataCategories = useSelector(state => state.category.categoryList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    useEffect(() => {
        dispatch(getCategories())
    }, [])
    
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        {/* Header */}
                        <View style={styles.headercontainer}>
                            <View style={styles.headercontentlogo}>
                                <Text style={{fontSize: 16, fontWeight: 'bold', fontFamily: 'Roboto'}}>Kitty.</Text>
                            </View>
                            <View style={styles.headercontentcart}>
                                <Image source={require('../../../assets/icon/icon-carts.png')} style={styles.headercart}/>
                            </View>
                        </View>
                        {/* tag line */}
                        <View style={{marginHorizontal: 17, marginTop: 40}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontFamily: 'Roboto',fontSize: 27, fontWeight: 'bold', paddingRight: 8}}>Hey, Alviyan!</Text>
                                <Image source={require('../../../assets/icon/icon-hand.png')} style={{width: 35, height: 35}} />
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <Text style={{fontSize: 18, color: 'grey', fontFamily: 'Roboto'}}>What you plan to eat today?</Text>
                            </View>
                        </View>
                        {/* search */}
                        <View style={{marginHorizontal: 17, marginTop: 20}}>
                            <View>
                                <TextInput placeholder="Search" style={styles.contentsearch}/>
                                <Image source={require('../../../assets/icon/search.png')} style={styles.contentsearching}/>
                            </View>
                        </View>
                        {/* Categories */}
                        <View style={{marginHorizontal: 17, marginTop: 30}}>
                            <Text style={{fontSize: 18, fontFamily: 'Roboto'}}>Type of cake</Text>
                        </View>
                        <SafeAreaView style={{flexDirection: 'row'}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{marginLeft: 17, marginTop: 15, backgroundColor: 'grey', height: 120, width: 140}}>
                                    <View>
                                        <Image source={require('../../../assets/icon/icon-hand.png')} />
                                    </View>
                                    <View></View>
                                    <View></View>
                                </View>
                                <View style={{marginLeft: 17, marginTop: 15, backgroundColor: 'grey', height: 120, width: 140}}>
                                    <View>
                                        <Image source={require('../../../assets/icon/icon-hand.png')} />
                                    </View>
                                    <View></View>
                                    <View></View>
                                </View>
                                <View style={{marginLeft: 17, marginTop: 15, backgroundColor: 'grey', height: 120, width: 140}}>
                                    <View>
                                        <Image source={require('../../../assets/icon/icon-hand.png')} />
                                    </View>
                                    <View></View>
                                    <View></View>
                                </View>
                                <View style={{marginLeft: 17, marginTop: 15, backgroundColor: 'grey', height: 120, width: 140}}>
                                    <View>
                                        <Image source={require('../../../assets/icon/icon-hand.png')} />
                                    </View>
                                    <View></View>
                                    <View></View>
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                        {/* Title show */}
                        <View style={{marginHorizontal: 17, flexDirection: 'row', justifyContent: 'space-between',paddingTop: 30,}}>
                            <Text style={{fontSize: 18, fontFamily: 'Roboto'}}>Popular cake</Text>
                            
                        </View>
                        {/* product */}
                        {dataProducts.map((item, index) => (
                        <View style={{marginHorizontal: 17, flexDirection: 'column'}} key={index}>
                            <View style={{borderWidth: 0.3,borderColor: 'grey', height: 80, marginTop: 15, borderRadius: 10, paddingVertical: 4, paddingHorizontal: 3, flexDirection: 'row'}}>
                                <Image style={{width: 70, height: 70, borderRadius: 4}} source={{uri: item.image}}/>
                                <View style={{marginHorizontal: 10, flexDirection: 'column'}}>
                                    <Text>{item.name}</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{width: 185}}>Rp.{item.price}</Text>
                                        <TouchableOpacity
                                            style={{width: 50, height: 25, backgroundColor: '#E95E8B', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}
                                        >
                                            <Text style={{fontSize: 11, color: '#fff', fontFamily: 'roboto'}}>Add</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default Dashboard;