import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Animated,
  Image,
} from 'react-native';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

// ✅ Make sure you import the image like this:
import LogoScoialMedia from '../../assets/images/png/LogoScoialMedia.png'; // adjust path if needed

const SplashScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Onboarding'); // Replace with your initial screen name
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={['#1E2626', '#121212']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      <Animated.View style={{ opacity: fadeAnim, alignItems: 'center' }}>
        <Image
          source={LogoScoialMedia}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.appNameText}>THE WALDEN{'\n'}EXPERIENCE</Text>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: WP(40),
    height: WP(40),
    marginBottom: HP(2),
  },
  appNameText: {
    color: '#FFFFFF',
    fontSize: WP(4),
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: WP(0.5),
  },
});

export default SplashScreen;
