import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from '../../utils/color';
import {WP, HP} from '../../utils/pixelresponsive'
import { useNavigation } from '@react-navigation/native';



const ActionCard = ({
  onPress,
}) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.title}>The Best Place to Meet Like-</Text>
          <Text style={styles.title}>Minded People</Text>      
          <View style={styles.divider} />    
          <Text style={styles.description}>It is a long established fact that a reader</Text>
          <Text style={styles.description}>will be distracted by the readable content.</Text>
          
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 45,
    left: 0,
    right: 0,
    
  },
  card: {
    width: WP(100),               
    height: HP(30),               // 40% of height
    borderTopLeftRadius: WP(5),   // 5% of width for rounded top-left
    borderTopRightRadius: WP(5),  // 5% of width for rounded top-right
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: colors.onBackground,
    padding: WP(6),              // 6% padding
    elevation: 4,
    
  },
  content: {
    padding: 0,
  },
  title: {
    color: colors.textPrimary,
    fontSize: WP(8),           // 5.5% of width
    fontWeight: 'bold',
    lineHeight: HP(3.8),         // 3.8% of height
    textAlign: 'center',
},
  description: {
    color: colors.textSecondary,
    fontSize: WP(4),           // 4.2% of width
    lineHeight: HP(2.8),         // 2.8% of height
    marginTop: HP(1),            // 1% of height
    textAlign: 'center',
    fontWeight: '100',    
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: HP(2.2),     // 2.2% of height
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: HP(1.8),    // 1.8% of height
    borderRadius: WP(2),         // 2% of width
    alignItems: 'center',
    marginTop: HP(2.5),          // 2.5% of height
  },
  buttonText: {
    color: colors.onPrimary,
    fontSize: WP(4),             // 4% of width
    fontWeight: '600',
  },
});

export default ActionCard;