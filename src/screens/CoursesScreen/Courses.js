// CoursesScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  FlatList, 
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';
import { useNavigation } from '@react-navigation/native';

// Import vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Import images for profile pictures
import FrameOne from '../../assets/images/png/FrameOne.png';
import FrameTwo from '../../assets/images/png/FrameTwo.png';
import FrameThree from '../../assets/images/png/FrameThree.png';

// Dummy data for courses
const coursesData = [
  {
    id: '1',
    title: 'Introduction to Digital Marketing',
    description: 'Learn key digital marketing strategies to boost your brand and grow your business online.',
    instructor: 'Jane Doe',
    instructorImage: FrameOne,
    duration: '3h 45m',
    progress: 36,
    categories: ['Online Business', 'Marketing'],
    categoryColors: ['#26A69A', '#8BC34A']
  },
  {
    id: '2',
    title: 'Basic Python Programming',
    description: 'Learn key digital marketing strategies to boost your brand and grow your business online.',
    instructor: 'Jane Doe',
    instructorImage: FrameOne,
    duration: '3h 45m',
    progress: 50,
    categories: ['Python', 'Technology'],
    categoryColors: ['#FDD835', '#FF9800']
  },
  {
    id: '3',
    title: 'An Overview of English Courses',
    description: 'Learn key digital marketing strategies to boost your brand and grow your business online.',
    instructor: 'John Smith',
    instructorImage: FrameTwo,
    duration: '2h 20m',
    progress: 10,
    categories: ['Online Business', 'Marketing'],
    categoryColors: ['#8BC34A', '#FF9800']
  },
  {
    id: '4',
    title: 'Advanced UI/UX Design',
    description: 'Master the principles of user interface and user experience design for digital products.',
    instructor: 'Sarah Johnson',
    instructorImage: FrameThree,
    duration: '5h 30m',
    progress: 75,
    categories: ['Design', 'Technology'],
    categoryColors: ['#9C27B0', '#FF9800']
  },
];

const Courses = () => {
  const navigation = useNavigation();

  const renderCourseItem = ({ item }) => {
    // Determine progress bar color based on progress percentage
    let progressColor = '#26A69A'; // Default teal color
    if (item.progress < 30) {
      progressColor = '#FF9800'; // Orange for low progress
    } else if (item.progress < 70) {
      progressColor = '#8BC34A'; // Green for medium progress
    }

    return (
      <TouchableOpacity 
        style={styles.courseCard}
        onPress={() => {
          navigation.navigate('CourseDetail', { course: item });
        }}
      >
        {/* Categories */}
        <View style={styles.categoriesContainer}>
          {item.categories.map((category, index) => (
            <View 
              key={index} 
              style={[
                styles.categoryTag,
                { backgroundColor: item.categoryColors[index] }
              ]}
            >
              <Text style={styles.categoryText}>{category}</Text>
            </View>
          ))}
        </View>

        {/* Course Title */}
        <Text style={styles.courseTitle}>{item.title}</Text>
        
        {/* Course Description */}
        <Text style={styles.courseDescription}>{item.description}</Text>
        
        {/* Instructor and Duration */}
        <View style={styles.courseMetaContainer}>
          <View style={styles.instructorContainer}>
            <Image source={item.instructorImage} style={styles.instructorImage} />
            <Text style={styles.instructorName}>{item.instructor}</Text>
          </View>
          
          <View style={styles.durationContainer}>
            <Ionicons name="time-outline" size={WP(4)} color="#8A8A8A" />
            <Text style={styles.durationText}>{item.duration}</Text>
          </View>
        </View>
        
        {/* Progress */}
        <Text style={styles.progressText}>{item.progress}%</Text>
        <View style={styles.progressBarContainer}>
          <View 
            style={[
              styles.progressBar,
              { 
                width: `${item.progress}%`,
                backgroundColor: progressColor
              }
            ]} 
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient
      colors={colors.gradient.colors}
      start={colors.gradient.start}
      end={colors.gradient.end}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={WP(6)} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Courses</Text>
          <View style={styles.headerRight} />
        </View>

        {/* Progress Header */}
        <View style={styles.progressHeader}>
          <Text style={styles.progressHeaderTitle}>Your Progress</Text>
          <TouchableOpacity style={styles.sortButton}>
            <Feather name="filter" size={WP(4)} color={colors.textPrimary} />
            <Text style={styles.sortButtonText}>Sort By</Text>
          </TouchableOpacity>
        </View>

        {/* Courses List */}
        <FlatList
          data={coursesData}
          renderItem={renderCourseItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.coursesList}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: WP(5),
    fontWeight: 'bold',
  },
  headerRight: {
    width: WP(10),
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: WP(5),
    paddingBottom: HP(2),
  },
  progressHeaderTitle: {
    color: colors.textPrimary,
    fontSize: WP(4.5),
    fontWeight: 'bold',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortButtonText: {
    color: colors.textPrimary,
    marginLeft: WP(1),
    fontSize: WP(3.5),
  },
  coursesList: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(2),
  },
  courseCard: {
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    borderRadius: WP(3),
    padding: WP(4),
    marginBottom: HP(2),
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: HP(1),
  },
  categoryTag: {
    paddingHorizontal: WP(3),
    paddingVertical: HP(0.5),
    borderRadius: WP(3),
    marginRight: WP(2),
  },
  categoryText: {
    color: '#000000',
    fontSize: WP(3),
    fontWeight: '500',
  },
  courseTitle: {
    color: colors.textPrimary,
    fontSize: WP(4.5),
    fontWeight: 'bold',
    marginBottom: HP(0.5),
  },
  courseDescription: {
    color: '#AAAAAA',
    fontSize: WP(3.5),
    marginBottom: HP(1.5),
  },
  courseMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: HP(1.5),
  },
  instructorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  instructorImage: {
    width: WP(8),
    height: WP(8),
    borderRadius: WP(4),
    marginRight: WP(2),
  },
  instructorName: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    color: '#8A8A8A',
    marginLeft: WP(1),
    fontSize: WP(3.5),
  },
  progressText: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
    marginBottom: HP(0.5),
  },
  progressBarContainer: {
    height: HP(1),
    backgroundColor: 'rgba(50, 50, 50, 0.8)',
    borderRadius: WP(1),
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: WP(1),
  },
});

export default Courses;