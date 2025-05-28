// MenuScreen.js
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';
import { useNavigation } from '@react-navigation/native';

// Import vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';

const MenuScreen = () => {
  const navigation = useNavigation();

  const menuItems = [
    { name: 'Home', icon: 'home', iconSet: 'Ionicons', active: true },
    { name: 'Greetings', icon: 'hand-wave', iconSet: 'MaterialCommunity' },
    { name: 'Calendar', icon: 'calendar', iconSet: 'Feather' },
    { name: 'Messages', icon: 'message-circle', iconSet: 'Feather' },
    { name: 'Polls', icon: 'poll', iconSet: 'MaterialIcons' },
    { name: 'Articles', icon: 'file-text', iconSet: 'Feather' },
    { name: 'Ebooks', icon: 'book', iconSet: 'FontAwesome' },
    { name: 'Courses', icon: 'graduation-cap', iconSet: 'FontAwesome' },
    { name: 'Workouts', icon: 'dumbbell', iconSet: 'FontAwesome5' },
    { name: 'Flavorful Meals', icon: 'food-variant', iconSet: 'MaterialCommunity' },
    { name: 'Spiritual', icon: 'pray', iconSet: 'FontAwesome5' },
    { name: 'Profiles', icon: 'user', iconSet: 'Feather' },
    { name: 'Settings', icon: 'settings', iconSet: 'Feather' },
    { name: 'Contact Us', icon: 'phone', iconSet: 'Feather' },
  ];

  const renderIcon = (item) => {
    const size = WP(5);
    const color = item.active ? colors.onPrimary : colors.textPrimary;

    switch (item.iconSet) {
      case 'Ionicons':
        return <Ionicons name={item.icon} size={size} color={color} />;
      case 'MaterialIcons':
        return <MaterialIcons name={item.icon} size={size} color={color} />;
      case 'FontAwesome':
        return <FontAwesome name={item.icon} size={size} color={color} />;
      case 'MaterialCommunity':
        return <MaterialCommunityIcons name={item.icon} size={size} color={color} />;
      case 'Feather':
        return <Feather name={item.icon} size={size} color={color} />;
      case 'FontAwesome5':
        return <FontAwesome5 name={item.icon} size={size} color={color} />;
      default:
        return <Ionicons name={item.icon} size={size} color={color} />;
    }
  };

  return (
    <SafeAreaProvider>
    <SafeAreaView edges={['left', 'right', 'bottom']} style={{ flex: 1 }}>
    
    <LinearGradient
      colors={colors.gradient.colors}
      start={colors.gradient.start}
      end={colors.gradient.end}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Menu</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={WP(7)} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <ScrollView style={styles.menuContainer} showsVerticalScrollIndicator={false}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.menuItem,
              item.active && styles.activeMenuItem
            ]}
            onPress={() => {
              // Navigate to the respective screen
              if (item.name === 'Home') {
                navigation.navigate('Home');
              } else {
                // Handle other navigation
                navigation.goBack();
              }
            }}
          >
            {renderIcon(item)}
            <Text style={[
              styles.menuItemText,
              item.active && styles.activeMenuItemText
            ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.createPostButton}>
          <Ionicons name="add-circle" size={WP(5)} color={colors.primary} />
          <Text style={styles.createPostText}>Create Post</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
    </SafeAreaView>
    </SafeAreaProvider>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: HP(5),
    paddingHorizontal: WP(5),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: HP(2),
  },
  headerTitle: {
    color: colors.textPrimary,
    fontSize: WP(7),
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: HP(1),
  },
  menuContainer: {
    flex: 1,
    marginTop: HP(2),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: HP(1.8),
    paddingHorizontal: WP(4),
    borderRadius: WP(5),
    marginBottom: HP(1),
  },
  activeMenuItem: {
    backgroundColor: colors.primary,
  },
  menuItemText: {
    color: colors.textPrimary,
    fontSize: WP(4.5),
    marginLeft: WP(3),
    fontWeight: '500',
  },
  activeMenuItemText: {
    color: colors.onPrimary,
    fontWeight: 'bold',
  },
  createPostButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: HP(2),
    paddingHorizontal: WP(4),
    borderRadius: WP(5),
    marginTop: HP(2),
    marginBottom: HP(5),
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  createPostText: {
    color: colors.primary,
    fontSize: WP(4.5),
    marginLeft: WP(2),
    fontWeight: '500',
  },
});

export default MenuScreen;