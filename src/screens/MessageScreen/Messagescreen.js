// MessagesScreen.js
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  FlatList, 
  TouchableOpacity, 
  TextInput,
  SafeAreaView,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';
import { useNavigation } from '@react-navigation/native';

// Import vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

// Import images for profile pictures
import FrameOne from '../../assets/images/png/FrameOne.png';
import FrameTwo from '../../assets/images/png/FrameTwo.png';
import FrameThree from '../../assets/images/png/FrameThree.png';

// Dummy data for conversations
const conversationsData = [
  {
    id: '1',
    name: 'Theresa Webb',
    message: 'We are going for this trip',
    time: '2 min ago',
    avatar: FrameOne,
    unread: 0,
    online: true
  },
  {
    id: '2',
    name: 'Jack Pandey',
    message: 'Tap to chat 😊',
    time: '2 min ago',
    avatar: FrameTwo,
    unread: 1,
    online: true
  },
  {
    id: '3',
    name: 'Suhana Khan',
    message: 'It\'s my pleasure mate',
    time: '3 hours ago',
    avatar: FrameThree,
    unread: 2,
    online: false
  },
  {
    id: '4',
    name: 'Katrina Kayif',
    message: 'Tap to chat',
    time: '12 hours ago',
    avatar: FrameOne,
    unread: 0,
    online: false
  },
  {
    id: '5',
    name: 'Anupoma Das',
    message: 'Tap to chat',
    time: 'Yesterday',
    avatar: FrameTwo,
    unread: 0,
    online: false
  },
  {
    id: '6',
    name: 'Rahul Sarkar',
    message: 'Tap to chat',
    time: '2 days ago',
    avatar: FrameThree,
    unread: 0,
    online: true
  },
  {
    id: '7',
    name: 'Elena Rocks',
    message: 'Tap to chat!',
    time: '4 days ago',
    avatar: FrameOne,
    unread: 0,
    online: false
  },
  {
    id: '8',
    name: 'Michael Johnson',
    message: 'Tap to chat',
    time: '5 days ago',
    avatar: FrameTwo,
    unread: 0,
    online: false
  },
  {
    id: '9',
    name: 'Sarah Williams',
    message: 'Tap to chat',
    time: '1 week ago',
    avatar: FrameThree,
    unread: 0,
    online: false
  },
];

const MessagesScreen = () => {
  const navigation = useNavigation();

  const renderConversationItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.conversationItem}
      onPress={() => {
        // Navigate to chat detail screen with the conversation data
        navigation.navigate('ChatDetailScreen', { conversation: item });
      }}
    >
      <View style={styles.avatarContainer}>
        <Image source={item.avatar} style={styles.avatar} />
        {item.online && <View style={styles.onlineIndicator} />}
      </View>
      
      <View style={styles.conversationContent}>
        <View style={styles.conversationHeader}>
          <Text style={styles.conversationName}>{item.name}</Text>
          <Text style={styles.conversationTime}>{item.time}</Text>
        </View>
        <Text style={styles.conversationMessage}>{item.message}</Text>
      </View>
      
      {item.unread > 0 && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadText}>{item.unread}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={colors.gradient.colors}
      start={colors.gradient.start}
      end={colors.gradient.end}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={WP(6)} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Message</Text>
          <View style={styles.headerRight} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={WP(5)} color="#8A8A8A" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#8A8A8A"
          />
        </View>

        {/* Conversations List */}
        <FlatList
          data={conversationsData}
          renderItem={renderConversationItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.conversationsList}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

// Keep your existing styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: HP(2),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WP(5),
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
  headerRight: {
    width: WP(10),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    borderRadius: WP(3),
    marginHorizontal: WP(5),
    marginBottom: HP(2),
    paddingHorizontal: WP(3),
  },
  searchIcon: {
    marginRight: WP(2),
  },
  searchInput: {
    flex: 1,
    height: HP(6),
    color: colors.textPrimary,
    fontSize: WP(4),
  },
  conversationsList: {
    paddingHorizontal: WP(5),
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: HP(1.5),
  },
  avatarContainer: {
    position: 'relative',
    marginRight: WP(3),
  },
  avatar: {
    width: WP(12),
    height: WP(12),
    borderRadius: WP(6),
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: WP(3),
    height: WP(3),
    borderRadius: WP(1.5),
    backgroundColor: '#4CAF50',
    borderWidth: 1,
    borderColor: colors.gradient.colors[1],
  },
  conversationContent: {
    flex: 1,
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: HP(0.5),
  },
  conversationName: {
    color: colors.textPrimary,
    fontSize: WP(4),
    fontWeight: 'bold',
  },
  conversationTime: {
    color: '#8A8A8A',
    fontSize: WP(3),
  },
  conversationMessage: {
    color: '#AAAAAA',
    fontSize: WP(3.5),
  },
  unreadBadge: {
    width: WP(6),
    height: WP(6),
    borderRadius: WP(3),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: WP(2),
  },
  unreadText: {
    color: colors.onPrimary,
    fontSize: WP(3),
    fontWeight: 'bold',
  },
});

export default MessagesScreen;