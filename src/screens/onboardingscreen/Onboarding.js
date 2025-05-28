import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ActionCard from '../../components/ActionCard/ActionCard';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';

// ✅ Updated image import with renamed filename
import teamWork from '../../assets/images/png/teamWork.png'; // Ensure the path is correct


const Onboarding = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Image
        source={teamWork}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      <View style={styles.overlay}>
        <ActionCard 
          onPress={() => navigation.navigate('OnboardingsScreen')}
        />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  backgroundImage: {
    position: 'absolute',
    width: WP(100),
    height: HP(78),
    top: 0,
    left: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: HP(5),
  },
});
