// WorkoutDetailScreen.js
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';
import ActionCardWorkout from '../../components/ActionCard/ActionCardWorkout';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

const WorkoutDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { workout } = route.params || {};

  const workoutData = workout || {
    title: 'Day 01 - Warm Up',
    subtitle: '04 Workouts for Beginner',
    duration: '60 min',
    calories: '350 Cal',
    estimatedKcal: '236 Kcal',
    description:
      "Wish for a healthy body. Join our program with guidelines based on your body's objectives. Strength training aims to increase physical strength. Exercise for physical fitness at least two to three times a week.",
  };

  const handleStartWorkout = () => {
    console.log('Starting workout:', workoutData.title);
    // navigation.navigate('WorkoutSession', { workout: workoutData });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={require('../../assets/images/png/Dumbell.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={WP(6)} color={colors.textPrimary} />
          </TouchableOpacity>

          {/* Overlay card */}
          <ActionCardWorkout workout={workoutData} onPress={handleStartWorkout} />
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
  backButton: {
    width: WP(10),
    height: WP(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HP(2),
    marginLeft: WP(5),
    position: 'absolute',
    top: HP(1),
    left: WP(2),
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: WP(5),
  },
});

export default WorkoutDetails;
