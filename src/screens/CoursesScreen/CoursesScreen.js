// CoursesScreen.js
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  SafeAreaView,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';

// Import vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

// Sample data for courses
const recentCourses = [
  {
    id: '1',
    title: 'UI/UX Design Essentials',
    instructor: 'Razib Ara Kamal',
    duration: '9h 15m',
    lessons: 12,
    rating: 5.0,
    assignments: {
      completed: 0,
      total: 20
    },
    overview: 'This course covers the fundamentals of UI and UX design, including wireframing, prototyping, and user testing. Perfect for beginners looking to enter the design field.',
    instructorDetails: {
      name: 'Razib Ara Kamal',
      title: 'Senior UI/UX Designer',
      rating: 4.8,
    },
    details: {
      language: 'English',
      modules: 5
    },
    image: require('../../assets/images/png/FrameOne.png'), // Replace with actual image
    instructorImage: require('../../assets/images/png/FrameOne.png'), // Replace with actual image
  },
  {
    id: '2',
    title: 'Digital Marketing',
    instructor: 'Razib Ara Kamal',
    duration: '1h 15m',
    lessons: 8,
    rating: 4.5,
    assignments: {
      completed: 0,
      total: 15
    },
    overview: 'Learn the essentials of digital marketing including SEO, social media marketing, and content strategy. This course will help you build effective online marketing campaigns.',
    instructorDetails: {
      name: 'Razib Ara Kamal',
      title: 'Marketing Specialist',
      rating: 4.6,
    },
    details: {
      language: 'English',
      modules: 4
    },
    image: require('../../assets/images/png/FrameTwo.png'), // Replace with actual image
    instructorImage: require('../../assets/images/png/FrameTwo.png'), // Replace with actual image
  },
];

const featuredCourses = [
  {
    id: '3',
    title: 'Photography Fundamentals',
    instructor: 'Razib Ara Kamal',
    duration: '1h 15m',
    lessons: 12,
    rating: 4.8,
    assignments: {
      completed: 0,
      total: 10
    },
    overview: 'Master the basics of photography including composition, lighting, and camera settings. This course is perfect for beginners who want to improve their photography skills.',
    instructorDetails: {
      name: 'Razib Ara Kamal',
      title: 'Professional Photographer',
      rating: 4.9,
    },
    details: {
      language: 'English',
      modules: 3
    },
    image: require('../../assets/images/png/FrameOne.png'), // Replace with actual image
    instructorImage: require('../../assets/images/png/FrameOne.png'), // Replace with actual image
  },
  {
    id: '4',
    title: 'Digital Marketing',
    instructor: 'Razib Ara Kamal',
    duration: '1h 15m',
    lessons: 8,
    rating: 4.5,
    assignments: {
      completed: 0,
      total: 15
    },
    overview: 'Learn the essentials of digital marketing including SEO, social media marketing, and content strategy. This course will help you build effective online marketing campaigns.',
    instructorDetails: {
      name: 'Razib Ara Kamal',
      title: 'Marketing Specialist',
      rating: 4.6,
    },
    details: {
      language: 'English',
      modules: 4
    },
    image: require('../../assets/images/png/FrameTwo.png'), // Replace with actual image
    instructorImage: require('../../assets/images/png/FrameTwo.png'), // Replace with actual image
  },
];

const bestCourses = [
  {
    id: '5',
    title: 'Web Development Basics',
    instructor: 'Razib Ara Kamal',
    duration: '1h 15m',
    lessons: 12,
    rating: 4.7,
    assignments: {
      completed: 0,
      total: 18
    },
    overview: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript. This course will give you the skills to build your own responsive websites from scratch.',
    instructorDetails: {
      name: 'Razib Ara Kamal',
      title: 'Senior Web Developer',
      rating: 4.7,
    },
    details: {
      language: 'English',
      modules: 6
    },
    image: require('../../assets/images/png/FrameThree.png'), // Replace with actual image
    instructorImage: require('../../assets/images/png/FrameOne.png'), // Replace with actual image
  },
  {
    id: '6',
    title: 'Digital Marketing',
    instructor: 'Razib Ara Kamal',
    duration: '1h 15m',
    lessons: 8,
    rating: 4.5,
    assignments: {
      completed: 0,
      total: 15
    },
    overview: 'Learn the essentials of digital marketing including SEO, social media marketing, and content strategy. This course will help you build effective online marketing campaigns.',
    instructorDetails: {
      name: 'Razib Ara Kamal',
      title: 'Marketing Specialist',
      rating: 4.6,
    },
    details: {
      language: 'English',
      modules: 4
    },
    image: require('../../assets/images/png/FrameTwo.png'), // Replace with actual image
    instructorImage: require('../../assets/images/png/FrameTwo.png'), // Replace with actual image
  },
];

const CourseCard = ({ course, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.courseCard}
      onPress={() => onPress(course)}
    >
      <Image source={course.image} style={styles.courseImage} />
      <Text style={styles.courseTitle}>{course.title}</Text>
      <View style={styles.instructorContainer}>
        <Image source={course.instructorImage} style={styles.instructorImage} />
        <Text style={styles.instructorName}>{course.instructor}</Text>
      </View>
      <View style={styles.courseInfoContainer}>
        <Text style={styles.courseInfo}>{course.duration}</Text>
        <View style={styles.dotSeparator} />
        <Text style={styles.courseInfo}>{course.lessons} lesson</Text>
      </View>
    </TouchableOpacity>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity style={styles.sortButton}>
        <Feather name="sliders" size={WP(4)} color={colors.textPrimary} />
        <Text style={styles.sortText}>Sort By</Text>
      </TouchableOpacity>
    </View>
  );
};

const CoursesScreen = () => {
  const navigation = useNavigation();

  const handleCoursePress = (course) => {
    // Navigate to CourseDetailScreen and pass the course data
    navigation.navigate('CourseDetailScreen', { course });
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
          <View style={styles.placeholder} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={WP(5)} color="#8A8A8A" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#8A8A8A"
          />
        </View>

        <ScrollView 
          style={styles.scrollView} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Recent Courses */}
          <SectionHeader title="Recent Courses" />
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.courseList}
          >
            {recentCourses.map(course => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onPress={handleCoursePress}
              />
            ))}
          </ScrollView>

          {/* Featured Courses */}
          <SectionHeader title="Featured Courses" />
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.courseList}
          >
            {featuredCourses.map(course => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onPress={handleCoursePress}
              />
            ))}
          </ScrollView>

          {/* Best Courses */}
          <SectionHeader title="Best Courses" />
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.courseList}
          >
            {bestCourses.map(course => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onPress={handleCoursePress}
              />
            ))}
          </ScrollView>
        </ScrollView>
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
    fontSize: WP(6),
    fontWeight: 'bold',
  },
  placeholder: {
    width: WP(10),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    borderRadius: WP(3),
    marginHorizontal: WP(5),
    marginBottom: HP(3),
    paddingHorizontal: WP(3),
  },
  searchIcon: {
    marginRight: WP(2),
  },
  searchInput: {
    flex: 1,
    height: HP(6),
    color: colors.textPrimary,
    fontSize: WP(4),
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: HP(5),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: WP(5),
    marginBottom: HP(2),
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: WP(5),
    fontWeight: 'bold',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    color: colors.textPrimary,
    marginLeft: WP(1),
    fontSize: WP(3.5),
  },
  courseList: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(3),
  },
  courseCard: {
    width: WP(70),
    marginRight: WP(3),
    borderRadius: WP(3),
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    overflow: 'hidden',
  },
  courseImage: {
    width: '100%',
    height: HP(12),
    resizeMode: 'cover',
  },
  courseTitle: {
    color: colors.textPrimary,
    fontSize: WP(3.8),
    fontWeight: 'bold',
    marginTop: HP(1),
    marginHorizontal: WP(2),
  },
  instructorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: HP(1),
    marginHorizontal: WP(2),
  },
  instructorImage: {
    width: WP(6),
    height: WP(6),
    borderRadius: WP(3),
    marginRight: WP(1),
  },
  instructorName: {
    color: colors.textPrimary,
    fontSize: WP(3),
  },
  courseInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: HP(1),
    marginBottom: HP(2),
    marginHorizontal: WP(2),
  },
  courseInfo: {
    color: '#8A8A8A',
    fontSize: WP(3),
  },
  dotSeparator: {
    width: WP(1),
    height: WP(1),
    borderRadius: WP(0.5),
    backgroundColor: colors.primary,
    marginHorizontal: WP(1),
  },
});

export default CoursesScreen;