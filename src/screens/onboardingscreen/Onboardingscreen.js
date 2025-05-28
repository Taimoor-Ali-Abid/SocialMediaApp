import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ActionCard from '../../components/ActionCard/ActionCard';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';

// ✅ Updated image import with renamed filename
import GetStarted from '../../assets/images/png/GetStarted.png'; // Ensure the path is correct

const OnboardingsScreen = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Image
        source={GetStarted}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      <View style={styles.overlay}>
        <ActionCard 
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default OnboardingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  backgroundImage: {
    position: 'absolute',
    width: WP(100),
    height: HP(75),
    top: 0,
    left: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: HP(5),
  },
});
