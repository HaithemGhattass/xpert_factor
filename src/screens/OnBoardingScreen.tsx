import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import SwipeGesture from 'react-native-swipe-gestures';

const { width, height } = Dimensions.get('window');

import { NavigationProp } from '@react-navigation/native';

interface OnboardingScreenProps {
  navigation: NavigationProp<any>;
}

const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  const logoOpacity = useRef(new Animated.Value(0)).current; // Animated value for opacity
  const logoTranslateY = useRef(new Animated.Value(20)).current; // Animated value for Y-axis movement

  const [currentSlide, setCurrentSlide] = useState(1);
  const [firstSlideCompleted, setFirstSlideCompleted] = useState(false);

  const goTologin = () => {
    navigation.navigate('SignIn'); // Navigate to the SignIn screen
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(logoTranslateY, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [logoOpacity, logoTranslateY]);

  useEffect(() => {
    if (currentSlide === 1 && !firstSlideCompleted) {
      const timer = setTimeout(() => {
        setFirstSlideCompleted(true);
        setCurrentSlide(2);
      }, 1500); // 1.5 seconds

      return () => clearTimeout(timer); // Clean up the timeout
    }
  }, [currentSlide, firstSlideCompleted]);

  const handleSwipe = (direction: any) => {
    if (direction === 'left' && currentSlide < 3) setCurrentSlide(currentSlide + 1);
    else if (direction === 'right' && currentSlide > 1) setCurrentSlide(currentSlide - 1);
  };

  const renderSlideContent = () => {
    switch (currentSlide) {
      case 1:
        return (
          <Animated.View
            style={[
              styles.slideContainer,
              { opacity: logoOpacity, transform: [{ translateY: logoTranslateY }] },
            ]}
          >
            <Text style={styles.logoText}>LOGO HERE</Text>
          </Animated.View>
        );
      case 2:
        return (
          <View style={styles.slideContainer}>
            <Image source={require('../../assets/onboarding1.png')} style={styles.image} />
            <Text style={styles.title}>Some stuff random</Text>
            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleSwipe('left')}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        );
      case 3:
        return (
          <View style={styles.slideContainer}>
            <Image source={require('../../assets/onboarding2.png')} style={styles.image} />
            <Text style={styles.title}>Some stuff random</Text>
            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <TouchableOpacity style={styles.button} onPress={() => goTologin()}>
              <Text style={styles.buttonText}>Go to Login</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      <SwipeGesture onSwipeLeft={() => handleSwipe('left')} onSwipeRight={() => handleSwipe('right')}>
        {renderSlideContent()}
      </SwipeGesture>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  slideContainer: {
    width: width, // Full width of the screen
    height: height, // Full height of the screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  logo: {
    width: 150,  // Adjusted size for better visibility
    height: 150, // Adjusted size for better visibility
    resizeMode: 'contain', // Ensures the image scales appropriately
    marginBottom: 20, // Space between logo and text
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Ensure the text is visible
    textAlign: 'center', // Center the text
    marginTop: 10, // Space between logo and text
  },
  image: {
    width: width * 0.8,
    height: width * 0.5,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#808080',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OnboardingScreen;
