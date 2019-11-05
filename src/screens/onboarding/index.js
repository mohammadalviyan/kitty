import React, { Component } from "react";
import {
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View // Container component
} from "react-native";
import Swiper from './swiper';

export default class Boarding extends Component {
  render(){

    return(
      <Swiper>
        {/* First screen */}
        <View style={[styles.slide, { backgroundColor: '#C04DEE' }]}>
          <Text style={styles.header}>EAT</Text>
          <Text style={styles.text}>Good nutrition is an important part of leading a healthy lifestyle</Text>
        </View>
        {/* Second screen */}
        <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
          <Text style={styles.header}>PRAY</Text>
          <Text style={styles.text}>Prayer is one of the most important things a Christian can do</Text>
        </View>
        {/* Third screen */}
        <View style={[styles.slide, { backgroundColor: '#FC515B' }]}>
          <Text style={styles.header}>LOVE</Text>
          <Text style={styles.text}>Where there is love there is life</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1,                    // Take up all screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
  },
  // Header styles
  header: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});