// CourseDetailScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';

// Import vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const CourseDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [activeTab, setActiveTab] = useState('Information');
  
  // Get the course data passed from the CoursesScreen
  const { course } = route.params || {};
  
  // Default course data if none is passed
  const courseData = course || {
    id: '1',
    title: 'UI/UX Design Essentials',
    instructor: 'Razib Ara Kamal',
    rating: 5.0,
    duration: '9h 15m',
    assignments: {
      completed: 0,
      total: 20
    },
    overview: 'This course covers the fundamentals of UI and UX design, including wireframing, prototyping, and user testing. Perfect for beginners looking to enter the design field.',
    instructorDetails: {
      name: course?.instructor || 'Razib Ara Kamal',
      title: 'Senior UI/UX Designer',
      rating: 4.8,
      image: course?.instructorImage || require('../../assets/images/png/FrameOne.png'),
    },
    details: {
      language: 'English',
      modules: 5
    },
    image: course?.image || require('../../assets/images/png/FrameOne.png'),
    lessons: course?.lessons || 12,
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Information':
        return (
          <View style={styles.tabContent}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Overview</Text>
              <Text style={styles.overviewText}>{courseData.overview}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Instructor</Text>
              <View style={styles.instructorContainer}>
                <Image source={courseData.instructorDetails.image} style={styles.instructorImage} />
                <View style={styles.instructorInfo}>
                  <Text style={styles.instructorName}>{courseData.instructorDetails.name}</Text>
                  <Text style={styles.instructorTitle}>{courseData.instructorDetails.title}</Text>
                </View>
                <View style={styles.instructorRating}>
                  <View style={styles.starsContainer}>
                    {[1, 2, 3, 4, 5].map((_, index) => (
                      <FontAwesome 
                        key={index} 
                        name="star" 
                        size={WP(4)} 
                        color="#FFD700" 
                        style={styles.starIcon} 
                      />
                    ))}
                  </View>
                  <Text style={styles.ratingText}>({courseData.instructorDetails.rating})</Text>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Course Details</Text>
              <View style={styles.detailsContainer}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Language:</Text>
                  <Text style={styles.detailValueHighlight}>{courseData.details.language}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Total {courseData.details.modules} Modules</Text>
                  <View style={styles.durationContainerDetails}>
                    <Ionicons name="time-outline" size={WP(4)} color="#8A8A8A" />
                    <Text style={styles.durationText}>{courseData.duration}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
      case 'Curriculum':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.placeholderText}>Curriculum content will be displayed here</Text>
          </View>
        );
      case 'Questions':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.placeholderText}>Questions content will be displayed here</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Course Banner */}
      <View style={styles.bannerContainer}>
        <Image source={courseData.image} style={styles.bannerImage} />
        
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={WP(6)} color={colors.textPrimary} />
        </TouchableOpacity>
        
        {/* Rating and Duration Badge */}
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <FontAwesome name="star" size={WP(4)} color="#FFD700" />
            <Text style={styles.badgeText}>{courseData.rating}</Text>
            <Ionicons name="time-outline" size={WP(4)} color={colors.textPrimary} style={styles.timeIcon} />
            <Text style={styles.badgeText}>{courseData.duration}</Text>
          </View>
        </View>
      </View>
      
      {/* Course Info Section */}
      <View style={styles.courseInfoContainer}>
        <Text style={styles.courseTitle}>{courseData.title}</Text>
        <Text style={styles.progressText}>
          {courseData.assignments.completed}/{courseData.assignments.total} assignment complete
        </Text>
      </View>
      
      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {['Information', 'Curriculum', 'Questions'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              activeTab === tab && styles.activeTabButton
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[
              styles.tabText,
              activeTab === tab && styles.activeTabText
            ]}>
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.activeTabIndicator} />}
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Tab Content */}
      <ScrollView style={styles.contentContainer}>
        {renderTabContent()}
      </ScrollView>
      
      {/* Enroll Button */}
      <TouchableOpacity style={styles.enrollButton} onPress={() => navigation.navigate('Courses')}>
        <Text style={styles.enrollButtonText}>Enroll Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  bannerContainer: {
    height: HP(35),
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: HP(5),
    left: WP(5),
    width: WP(10),
    height: WP(10),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: HP(2),
    right: WP(5),
    zIndex: 10,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: WP(3),
    paddingVertical: HP(1),
    borderRadius: WP(5),
  },
  badgeText: {
    color: colors.textPrimary,
    marginLeft: WP(1),
    fontSize: WP(3.5),
  },
  timeIcon: {
    marginLeft: WP(3),
  },
  courseInfoContainer: {
    backgroundColor: '#121212',
    paddingHorizontal: WP(5),
    paddingVertical: HP(2),
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  courseTitle: {
    color: colors.textPrimary,
    fontSize: WP(6),
    fontWeight: 'bold',
    marginBottom: HP(0.5),
  },
  progressText: {
    color: '#8A8A8A',
    fontSize: WP(3.5),
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  tabButton: {
    flex: 1,
    paddingVertical: HP(2),
    alignItems: 'center',
    position: 'relative',
  },
  activeTabButton: {
    borderBottomWidth: 0,
  },
  tabText: {
    color: '#8A8A8A',
    fontSize: WP(4),
  },
  activeTabText: {
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: HP(0.5),
    backgroundColor: colors.primary,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
  },
  tabContent: {
    padding: WP(5),
  },
  section: {
    marginBottom: HP(3),
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: WP(5),
    fontWeight: 'bold',
    marginBottom: HP(1.5),
  },
  overviewText: {
    color: '#AAAAAA',
    fontSize: WP(4),
    lineHeight: WP(6),
  },
  instructorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  instructorImage: {
    width: WP(12),
    height: WP(12),
    borderRadius: WP(6),
    marginRight: WP(3),
  },
  instructorInfo: {
    flex: 1,
  },
  instructorName: {
    color: colors.textPrimary,
    fontSize: WP(4),
    fontWeight: 'bold',
  },
  instructorTitle: {
    color: '#AAAAAA',
    fontSize: WP(3.5),
  },
  instructorRating: {
    alignItems: 'flex-end',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    marginLeft: WP(0.5),
  },
  detailsContainer: {
    marginTop: HP(1),
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: HP(1.5),
  },
  detailLabel: {
    color: '#AAAAAA',
    fontSize: WP(4),
  },
  detailValueHighlight: {
    color: colors.primary,
    fontSize: WP(4),
  },
  durationContainerDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#AAAAAA',
    fontSize: WP(4),
    textAlign: 'center',
    marginTop: HP(10),
  },
  enrollButton: {
    backgroundColor: colors.primary,
    marginHorizontal: WP(5),
    marginBottom: HP(3),
    paddingVertical: HP(2),
    borderRadius: WP(3),
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#000000',
    fontSize: WP(4.5),
    fontWeight: 'bold',
  },
});

export default CourseDetailScreen;