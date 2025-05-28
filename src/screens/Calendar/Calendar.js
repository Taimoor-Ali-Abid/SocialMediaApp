// CalendarScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';
import { useNavigation } from '@react-navigation/native';

// Import vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import images for event backgrounds
import FrameOne from '../../assets/images/png/FrameOne.png';
import FrameTwo from '../../assets/images/png/FrameTwo.png';

const Calendar = () => {
  const navigation = useNavigation();
  const [selectedDay, setSelectedDay] = useState(18);

  // Sample data for the week days
  const weekDays = [
    { day: 16, name: 'Sun' },
    { day: 17, name: 'Mon' },
    { day: 18, name: 'Tue' },
    { day: 19, name: 'Wed' },
    { day: 20, name: 'Thu' },
    { day: 21, name: 'Fri' },
  ];

  // Sample data for events
  const events = [
    {
      id: 1,
      title: 'Webinar on Social Media Strategies',
      time: '22:00 PM',
      location: 'Singapore',
      date: '18 Sep',
      image: FrameOne
    },
    {
      id: 2,
      title: 'Webinar on Social Media Strategies',
      time: '22:00 PM',
      location: 'Singapore',
      date: '18 Sep',
      image: FrameTwo
    }
  ];

  return (
    <LinearGradient
      colors={colors.gradient.colors}
      start={colors.gradient.start}
      end={colors.gradient.end}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={WP(7)} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calendar</Text>
        <TouchableOpacity style={styles.calendarButton}>
          <MaterialCommunityIcons name="calendar-month" size={WP(6)} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Date Info */}
      <View style={styles.dateInfoContainer}>
        <View>
          <Text style={styles.currentDate}>September 24</Text>
          <Text style={styles.eventsCount}>6 events today</Text>
        </View>
      </View>

      {/* Week Days */}
      <View style={styles.weekDaysContainer}>
        {weekDays.map((item) => (
          <TouchableOpacity 
            key={item.day}
            style={[
              styles.dayItem,
              selectedDay === item.day && styles.selectedDayItem
            ]}
            onPress={() => setSelectedDay(item.day)}
          >
            <Text 
              style={[
                styles.dayNumber,
                selectedDay === item.day && styles.selectedDayText
              ]}
            >
              {item.day}
            </Text>
            <Text 
              style={[
                styles.dayName,
                selectedDay === item.day && styles.selectedDayText
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* My Events */}
      <View style={styles.eventsContainer}>
        <Text style={styles.eventsTitle}>My Events</Text>
        
        <ScrollView 
          style={styles.eventsScrollView}
          showsVerticalScrollIndicator={false}
        >
          {events.map((event) => (
            <View key={event.id} style={styles.eventCard}>
              <ImageBackground 
                source={event.image} 
                style={styles.eventImage}
                imageStyle={styles.eventImageStyle}
              >
                <View style={styles.eventContent}>
                  <View style={styles.eventInfo}>
                    <Text style={styles.eventTitle}>{event.title}</Text>
                    <View style={styles.eventDetails}>
                      <View style={styles.eventDetailItem}>
                        <Ionicons name="time-outline" size={WP(4)} color={colors.textPrimary} />
                        <Text style={styles.eventDetailText}>{event.time}</Text>
                      </View>
                      <View style={styles.eventDetailItem}>
                        <Ionicons name="location-outline" size={WP(4)} color={colors.textPrimary} />
                        <Text style={styles.eventDetailText}>{event.location}</Text>
                      </View>
                    </View>
                  </View>
                  
                  <View style={styles.eventActions}>
                    <TouchableOpacity style={styles.rsvpButton}>
                      <Text style={styles.rsvpButtonText}>RSVP Now</Text>
                    </TouchableOpacity>
                    <View style={styles.dateTag}>
                      <Text style={styles.dateTagText}>{event.date}</Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: WP(5),
    paddingTop: HP(5),
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
  calendarButton: {
    width: WP(10),
    height: WP(10),
    borderRadius: WP(5),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateInfoContainer: {
    paddingHorizontal: WP(5),
    marginBottom: HP(2),
  },
  currentDate: {
    color: colors.textPrimary,
    fontSize: WP(5),
    fontWeight: 'bold',
  },
  eventsCount: {
    color: '#9CA3AF',
    fontSize: WP(3.5),
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: WP(5),
    marginBottom: HP(3),
  },
  dayItem: {
    width: WP(12),
    height: WP(16),
    borderRadius: WP(3),
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDayItem: {
    backgroundColor: colors.primary,
  },
  dayNumber: {
    color: colors.textPrimary,
    fontSize: WP(4.5),
    fontWeight: 'bold',
    marginBottom: HP(0.5),
  },
  dayName: {
    color: '#9CA3AF',
    fontSize: WP(3),
  },
  selectedDayText: {
    color: '#000',
  },
  eventsContainer: {
    flex: 1,
    paddingHorizontal: WP(5),
  },
  eventsTitle: {
    color: colors.textPrimary,
    fontSize: WP(5),
    fontWeight: 'bold',
    marginBottom: HP(2),
  },
  eventsScrollView: {
    flex: 1,
  },
  eventCard: {
    height: HP(25),
    borderRadius: WP(4),
    overflow: 'hidden',
    marginBottom: HP(2),
  },
  eventImage: {
    width: '100%',
    height: '100%',
  },
  eventImageStyle: {
    borderRadius: WP(4),
  },
  eventContent: {
    flex: 1,
    padding: WP(4),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'space-between',
  },
  eventInfo: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  eventTitle: {
    color: colors.textPrimary,
    fontSize: WP(4.5),
    fontWeight: 'bold',
    marginBottom: HP(1),
  },
  eventDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: WP(4),
  },
  eventDetailText: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
    marginLeft: WP(1),
  },
  eventActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: HP(1),
  },
  rsvpButton: {
    backgroundColor: colors.primary,
    paddingVertical: HP(0.8),
    paddingHorizontal: WP(3),
    borderRadius: WP(3),
  },
  rsvpButtonText: {
    color: '#000',
    fontSize: WP(3.5),
    fontWeight: 'bold',
  },
  dateTag: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: HP(0.5),
    paddingHorizontal: WP(2),
    borderRadius: WP(3),
  },
  dateTagText: {
    color: colors.textPrimary,
    fontSize: WP(3),
  },
});

export default Calendar;