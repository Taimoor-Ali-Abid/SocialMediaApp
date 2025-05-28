import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../utils/theme';

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={theme.colors.gradient.colors}
      start={theme.colors.gradient.start}
      end={theme.colors.gradient.end}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GradientBackground;