import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ActionCardWorkout = ({
  onPress,
  workout = {
    title: 'Day 01 - Warm Up',
    subtitle: '04 Workouts for Beginner',
    duration: '60 min',
    calories: '350 Cal',
    estimatedKcal: '236 Kcal',
    description:
      "Wish for a healthy body. Join our program with guidelines based on your body's objectives. Strength training aims to increase physical strength. Exercise for physical fitness at least two to three times a week.",
  },
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.title}>{workout.title}</Text>
          <Text style={styles.subtitle}>{workout.subtitle}</Text>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Ionicons name="play-circle" size={WP(5)} color={colors.primary} />
              <Text style={styles.statText}>{workout.duration}</Text>
            </View>

            <View style={styles.statItem}>
              <Ionicons name="flame" size={WP(5)} color="#FF9800" />
              <Text style={styles.statText}>{workout.calories}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.description}>{workout.description}</Text>

          <View style={styles.estimatedContainer}>
            <Text style={styles.estimatedLabel}>Estimated</Text>
            <Text style={styles.estimatedValue}>{workout.estimatedKcal}</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Start Workout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCardWorkout;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  card: {
    width: WP(100),
    height: HP(40),
    borderTopLeftRadius: WP(5),
    borderTopRightRadius: WP(5),
    backgroundColor: colors.onBackground,
    padding: WP(6),
    elevation: 4,
  },
  content: {
    alignItems: 'flex-start',
  },
  title: {
    color: colors.textPrimary,
    fontSize: WP(8),
    fontWeight: 'bold',
    lineHeight: HP(3.8),
    textAlign: 'left',
  },
  subtitle: {
    color: colors.primary,
    fontSize: WP(4),
    marginTop: HP(0.5),
    marginBottom: HP(2),
    textAlign: 'left',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: HP(1.5),
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: WP(4),
    paddingVertical: HP(1),
    borderRadius: WP(5),
    marginRight: WP(2),
  },
  statText: {
    color: colors.textPrimary,
    fontSize: WP(4),
    marginLeft: WP(2),
    textAlign: 'left',
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: HP(2.2),
    alignSelf: 'stretch',
  },
  description: {
    color: colors.textSecondary,
    fontSize: WP(4),
    lineHeight: HP(2.8),
    textAlign: 'left',
    fontWeight: '300',
  },
  estimatedContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: HP(1),
  },
  estimatedLabel: {
    color: colors.textSecondary,
    fontSize: WP(4),
    marginRight: WP(1),
    textAlign: 'left',
  },
  estimatedValue: {
    color: colors.textPrimary,
    fontSize: WP(4.5),
    fontWeight: 'bold',
    textAlign: 'left',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: HP(1.8),
    borderRadius: WP(2),
    width: WP(60),
    alignItems: 'center',
    paddingHorizontal: WP(4),
    alignSelf : 'center',
    marginTop: HP(2.5),
  },
  buttonText: {
    color: colors.onPrimary,
    fontSize: WP(4),
    fontWeight: '600',
    textAlign: 'left',
  },
});
