import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  lottie:{
    width: width * 0.9,
    height: width
  },
  doneButton: {
    padding: 20
  }
})

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles={{paddingHorizontal: 15}}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View style={styles.lottie}>
                <Lottie source={require('../assets/animations/boost.json')} autoPlay loop />
              </View>
            ),
            title: 'Boost Productivity',
            subtitle: 'Subscribe this channel to boost your productivity level',
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <View style={styles.lottie}>
                <Lottie source={require('../assets/animations/work.json')} autoPlay loop />
              </View>
            ),
            title: 'Work Seamlessly',
            subtitle: 'Get your work done seamlessly without interruption',
          },
          {
            backgroundColor: '#a78bfa',
            image: (
              <View style={styles.lottie}>
                <Lottie source={require('../assets/animations/achieve.json')} autoPlay loop />
              </View>
            ),
            title: 'Achieve Higher Goals',
            subtitle: 'By boosting your productivity we help you to achieve higher goals',
          },
        ]}
      />
    </View>
  )
}

export default OnboardingScreen;