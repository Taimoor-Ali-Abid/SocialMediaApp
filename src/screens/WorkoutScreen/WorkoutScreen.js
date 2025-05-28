import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const todayWorkout = {
  id: '0',
  title: 'Learn the Basic of Training',
  subtitle: '4 Workouts for Beginner',
  image: require('../../assets/images/png/Workout.png'),
  time: '7:00 - 08:00 AM',
  date: 'Mon 26 Apr',
  duration: '60 min',
  calories: '350 Cal',
  estimatedKcal: '236 Kcal',
  description: 'This beginner workout focuses on foundational strength and form. Ideal for starting your fitness journey!',
};

const guidedRuns = [
  {
    id: '1',
    title: 'Learn the Basic of Training',
    subtitle: '6 Workouts for Beginner',
    image: require('../../assets/images/png/Workout.png'),
    duration: '45 min',
    calories: '300 Cal',
    estimatedKcal: '220 Kcal',
    description: 'A guided series to help you learn the basic of training with structured runs and strength sessions.',
  },
  {
    id: '2',
    title: 'Learn Advanced Training',
    subtitle: '8 Workouts for Intermediate',
    image: require('../../assets/images/png/Workout.png'),
    duration: '60 min',
    calories: '450 Cal',
    estimatedKcal: '320 Kcal',
    description: 'Challenging exercises tailored for those ready to push beyond beginner levels.',
  },
];

const shortWorkouts = [
  {
    id: '1',
    title: 'Learn the Basic of Training',
    subtitle: '6 Workouts for Beginner',
    image: require('../../assets/images/png/Workout.png'),
    duration: '30 min',
    calories: '200 Cal',
    estimatedKcal: '160 Kcal',
    description: 'A short session designed for busy individuals who still want to get a workout in.',
  },
  {
    id: '2',
    title: 'Learn HIIT Training',
    subtitle: '4 Workouts for All Levels',
    image: require('../../assets/images/png/Workout.png'),
    duration: '20 min',
    calories: '250 Cal',
    estimatedKcal: '190 Kcal',
    description: 'High-intensity interval training that suits all fitness levels.',
  },
];

const WorkoutsScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const renderWorkoutCard = (item, height = HP(25), showTime = false) => {
    const isTodayWorkout = item.id === '0';

    return (
      <TouchableOpacity
        style={[
          styles.workoutCard,
          { height },
          isTodayWorkout && { width: WP(90), marginRight: WP(4) },
        ]}
        onPress={() => navigation.navigate('WorkoutDetails', { workout: item })}
      >
        <ImageBackground
          source={item.image}
          style={styles.workoutImage}
          imageStyle={styles.workoutImageStyle}
        >
          <View style={styles.workoutOverlay}>
            <Text style={styles.workoutTitle}>{item.title}</Text>
            <Text style={styles.workoutSubtitle}>
              {showTime ? item.time : item.subtitle}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderSectionHeader = (title, hasDate = false) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {hasDate ? (
          <Text style={styles.dateText}>{todayWorkout.date}</Text>
        ) : (
          <TouchableOpacity style={styles.sortButton}>
            <MaterialIcons name="sort" size={WP(5)} color={colors.textPrimary} />
            <Text style={styles.sortText}>Sort By</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={WP(6)} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Workouts</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={WP(5)} color="#8A8A8A" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#8A8A8A"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {renderSectionHeader('Today Workout Plan', true)}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalWorkoutList}
          >
            {renderWorkoutCard(todayWorkout, HP(30), true)}
          </ScrollView>

          {renderSectionHeader('Guided Runs')}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalWorkoutList}
          >
            {guidedRuns.map((workout) => (
              <View key={workout.id} style={styles.workoutCardContainer}>
                {renderWorkoutCard(workout)}
              </View>
            ))}
          </ScrollView>

          {renderSectionHeader('Short Workouts')}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalWorkoutList}
          >
            {shortWorkouts.map((workout) => (
              <View key={workout.id} style={styles.workoutCardContainer}>
                {renderWorkoutCard(workout)}
              </View>
            ))}
          </ScrollView>
        </ScrollView>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WP(5),
    paddingTop: HP(2),
    paddingBottom: HP(2),
  },
  backButton: {
    width: WP(10),
    height: WP(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.textPrimary,
    fontSize: WP(6),
    fontWeight: 'bold',
  },
  placeholder: {
    width: WP(10),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    marginHorizontal: WP(5),
    marginVertical: HP(1),
    borderRadius: WP(3),
    paddingHorizontal: WP(4),
    paddingVertical: HP(1.5),
  },
  searchIcon: {
    marginRight: WP(2),
  },
  searchInput: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: WP(4),
    padding: 0,
  },
  scrollView: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: WP(5),
    marginTop: HP(3),
    marginBottom: HP(1.5),
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: WP(5),
    fontWeight: 'bold',
  },
  dateText: {
    color: colors.primary,
    fontSize: WP(4),
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
    marginLeft: WP(1),
  },
  horizontalWorkoutList: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(2),
  },
  workoutCardContainer: {
    width: WP(90),
    marginRight: WP(4),
  },
  workoutCard: {
    borderRadius: WP(3),
    overflow: 'hidden',
    marginBottom: HP(1),
  },
  workoutImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  workoutImageStyle: {
    borderRadius: WP(3),
  },
  workoutOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: WP(4),
  },
  workoutTitle: {
    color: colors.textPrimary,
    fontSize: WP(4.5),
    fontWeight: 'bold',
    marginBottom: HP(0.5),
  },
  workoutSubtitle: {
    color: colors.primary,
    fontSize: WP(3.5),
  },
});

export default WorkoutsScreen;
