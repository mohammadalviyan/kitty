import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { deleteCategory, getCategories } from '../../../redux/actions/category';

const Category = (props) => {
    const dataCategories = useSelector(state => state.category.categoryList);
    const dispatch = useDispatch()
    const [input, setInput] = useState({ category_id:"",name:"" });
    const fetchddata=async()=>{
      await dispatch(getCategories (input))
      .then(result => {
        
      })
      .catch(err => {
        alert(err);
      });
    }
  
    useEffect(()=>{
      fetchddata()
    },[])

    const handleSubmitdelete = async (id) => {
      console.log(id)
      try {
        await dispatch(deleteCategory(id))
      } catch (err) {
        console.log(err)
      }
    };

    const onShow=(item)=>{
      Alert.alert(
        'Delete This Item?',
        item.name,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', 
            onPress: () =>  handleSubmitdelete(item.category_id)},
            
        ],
        {cancelable: false},
      );
      
    }
  return(
    <View style={{ flex: 1, backgroundColor: '#EEECEE' }}>
        <View style={{flexDirection: 'column'}}>
          <View style={{marginHorizontal: 17, marginTop: 30, height: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Category</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("AddCategory")}>
            <Image style={{width: 35, height: 35}} source={require('../../../assets/icon/icon-add.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'column', flex: 1, marginTop: 50}}>
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
              {dataCategories.map((item, index) => (
              <View style={{marginHorizontal: 17, flexDirection: 'column'}} key={index}>
                  <View style={{backgroundColor: '#fff', height: 80, marginTop: 15, borderRadius: 10, paddingVertical: 4, paddingHorizontal: 3, flexDirection: 'row'}}>
                      <Image style={{width: 70, height: 70, borderRadius: 4}} source={require('../../../assets/icon/icon-carts.png')}/>
                      <View style={{marginHorizontal: 10, flexDirection: 'column'}}>
                          <Text style={{fontFamily: 'roboto'}}>{item.name}</Text>
                          <View style={{flexDirection: 'row'}}>
                              <Text style={{width: 185, fontSize: 12}}>50 stock || Rp.5000</Text>
                              <View style={{flexDirection: 'column'}}>
                              <TouchableOpacity onPress={() =>
                                      props.navigation.navigate('EditCategory',{
                                        name:item.name,
                                        id:item.category_id
                                      })
                                    }
                                  style={{width: 50, height: 25, backgroundColor: '#00BFFF', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 5,}}
                              >
                                  <Text style={{fontSize: 11, color: '#fff', fontFamily: 'roboto'}}>Update</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={()=>{onShow(item)}}
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
  
export default Category;