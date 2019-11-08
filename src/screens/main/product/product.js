import React, { Component } from 'react';
import { useSelector} from 'react-redux';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';

const Products = (props) => {
  const dataProducts = useSelector(state => state.product.productList);
  
  return(
    <View style={{ flex: 1, backgroundColor: '#EEECEE' }}>
        <View style={{flexDirection: 'column'}}>
          <View style={{marginHorizontal: 17, marginTop: 30, height: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Product</Text>
            <Image style={{width: 25, height: 25}} source={require('../../../assets/icon/icon-sorting.png')} />
          </View>
        </View>
        <View style={{flexDirection: 'column', flex: 1, marginTop: 50}}>
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
              {dataProducts.map((item, index) => (
              <View style={{marginHorizontal: 17, flexDirection: 'column'}} key={index}>
                  <View style={{backgroundColor: '#fff', height: 80, marginTop: 15, borderRadius: 10, paddingVertical: 4, paddingHorizontal: 3, flexDirection: 'row'}}>
                      <Image style={{width: 70, height: 70, borderRadius: 4}} source={require('../../../assets/icon/icon-carts.png')}/>
                      <View style={{marginHorizontal: 10, flexDirection: 'column'}}>
                          <Text style={{fontFamily: 'roboto'}}>{item.name}</Text>
                          <View style={{flexDirection: 'row'}}>
                              <Text style={{width: 185, fontSize: 12}}>50 stock || Rp.5000</Text>
                              <View style={{flexDirection: 'column'}}>
                              <TouchableOpacity
                                  style={{width: 50, height: 25, backgroundColor: '#2196F3', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 5,}}
                              >
                                  <Text style={{fontSize: 11, color: '#fff', fontFamily: 'roboto'}}>Update</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                  style={{width: 50, height: 25, backgroundColor: '#E95E8B', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}
                              >
                                  <Text style={{fontSize: 11, color: '#fff', fontFamily: 'roboto'}}>Delete</Text>
                              </TouchableOpacity>
                              </View>
                          </View>
                      </View>
                  </View>
              </View>
              ))}
            </ScrollView>
          </SafeAreaView>
        </View>
    </View>
  );
}
  
export default Products;