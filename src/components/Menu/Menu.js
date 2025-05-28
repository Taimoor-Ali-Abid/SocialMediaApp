// MenuDrawer.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {colors} from '../../utils/color';
import {WP, HP} from '../../utils/pixelresponsive';

// Import vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width} = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.6;

const MenuDrawer = ({isVisible, onClose, navigation}) => {
  const translateX = React.useRef(new Animated.Value(DRAWER_WIDTH)).current;

  React.useEffect(() => {
    if (isVisible) {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateX, {
        toValue: DRAWER_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  const menuItems = [
    {name: 'Home', icon: 'home', iconSet: 'Ionicons', active: true},
    {name: 'Greetings', icon: 'hand-wave', iconSet: 'MaterialCommunity'},
    {name: 'Calendar', icon: 'calendar', iconSet: 'Feather'},
    {name: 'Messages', icon: 'message-circle', iconSet: 'Feather'},
    {name: 'Polls', icon: 'poll', iconSet: 'MaterialIcons'},
    {name: 'Articles', icon: 'file-text', iconSet: 'Feather'},
    {name: 'Ebooks', icon: 'book', iconSet: 'FontAwesome'},
    {name: 'Courses', icon: 'graduation-cap', iconSet: 'FontAwesome'},
    {name: 'Workouts', icon: 'dumbbell', iconSet: 'FontAwesome5'},
    {
      name: 'Flavorful Meals',
      icon: 'food-variant',
      iconSet: 'MaterialCommunity',
    },
    {name: 'Spiritual', icon: 'pray', iconSet: 'FontAwesome5'},
    {name: 'Profiles', icon: 'user', iconSet: 'Feather'},
    {name: 'Settings', icon: 'settings', iconSet: 'Feather'},
    {name: 'Contact Us', icon: 'phone', iconSet: 'Feather'},
  ];

  const renderIcon = item => {
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
        return (
          <MaterialCommunityIcons name={item.icon} size={size} color={color} />
        );
      case 'Feather':
        return <Feather name={item.icon} size={size} color={color} />;
      case 'FontAwesome5':
        return <FontAwesome5 name={item.icon} size={size} color={color} />;
      default:
        return <Ionicons name={item.icon} size={size} color={color} />;
    }
  };

  if (!isVisible) return null;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.drawer, {transform: [{translateX}]}]}>
        <View style={styles.containerBackground}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Menu</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={WP(7)} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <ScrollView
            style={styles.menuContainer}
            showsVerticalScrollIndicator={false}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.menuItem, item.active && styles.activeMenuItem]}
                onPress={() => {
      onClose();
      // Navigate to the respective screen
      if (item.name === 'Home') {
        navigation.navigate('Home');
      } else if (item.name === 'Calendar') {
        navigation.navigate('Calendar');
     } else if (item.name === 'Articles') {
        navigation.navigate('Articles');
      } else if (item.name === 'Courses') {
        navigation.navigate('CoursesScreen');
      } else if (item.name === 'Ebooks') {
        navigation.navigate('EBooksScreen');
      } else if (item.name === 'Polls') {
        navigation.navigate('EditPoll');
      } else if (item.name === 'Flavorful Meals') {
        navigation.navigate('FlavorfulMealsScreen');
      } else if (item.name === 'Workouts') {
        navigation.navigate('WorkoutsScreen');
      } else if (item.name === 'Workout Details') {
        navigation.navigate('WorkoutDetail');
      } else if (item.name === 'Profiles') {
        navigation.navigate('ProfileScreen');
      } else if (item.name === 'Messages') {
        navigation.navigate('MessagesScreen');
        // Handle other navigation
      }
    }}>
                {renderIcon(item)}
                <Text
                  style={[
                    styles.menuItemText,
                    item.active && styles.activeMenuItemText,
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.createPostButton}
              onPress={() => {
                onClose();
                navigation.navigate('CreatePost');
              }}>
              <Ionicons name="add-circle" size={WP(5)} color={colors.primary} />
              <Text style={styles.createPostText}>Create Post</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: DRAWER_WIDTH,
    height: '100%',
  },
  containerBackground: {
    flex: 1,
    paddingTop: HP(5),
    paddingHorizontal: WP(5),
    backgroundColor: colors.onBackground, // black background from your theme
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

export default MenuDrawer;
