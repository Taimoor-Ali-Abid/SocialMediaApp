// ProfileScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';

// Import vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Recent Posts');
  
  // Profile data
  const profileData = {
    name: 'Musiani Wanda',
    username: '@Musia_Wan25',
    bio: 'Creative coder with a passion for design, always seeking new ideas and outdoor adventures.',
    profileImage: require('../../assets/images/png/profile.png'),
    isFollowing: false,
  };

  // News data
  const latestNews = [
    {
      id: '1',
      image: require('../../assets/images/png/motivational.png'),
      title: 'DIFFICULT ROADS LEAD TO BEAUTIFUL DESTINATIONS',
    },
    {
      id: '2',
      image: require('../../assets/images/png/laptop.png'),
      title: 'Remote Work Tips',
    },
  ];

  const handleFollow = () => {
    // Handle follow/unfollow logic
    console.log('Follow button pressed');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Interests':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.emptyStateText}>No interests to show</Text>
          </View>
        );
      case 'Recent Posts':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Latest News</Text>
            <View style={styles.newsContainer}>
              {latestNews.map((item) => (
                <TouchableOpacity 
                  key={item.id} 
                  style={styles.newsCard}
                  onPress={() => console.log('News item pressed:', item.title)}
                >
                  <Image source={item.image} style={styles.newsImage} />
                  {item.id === '1' && (
                    <View style={styles.newsTextOverlay}>
                      <Text style={styles.newsText}>{item.title}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
      case 'Activities':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.emptyStateText}>No activities to show</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Profile Header with Background Image */}
          <ImageBackground 
            source={profileData.profileImage} 
            style={styles.profileBackground}
          >
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" size={WP(6)} color={colors.textPrimary} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>My Profile</Text>
              <View style={styles.placeholder} />
            </View>

            {/* Profile Info Overlay */}
            <View style={styles.profileInfoOverlay}>
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>{profileData.name}</Text>
                <Text style={styles.profileUsername}>{profileData.username}</Text>
                
                <TouchableOpacity 
                  style={styles.followButton}
                  onPress={handleFollow}
                >
                  <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>
                
                <View style={styles.bioSection}>
                  <Text style={styles.bioLabel}>Bio</Text>
                  <Text style={styles.bioText}>{profileData.bio}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>

          {/* Tab Navigation */}
          <View style={styles.tabContainer}>
            {['Interests', 'Recent Posts', 'Activities'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tabButton,
                  activeTab === tab && styles.activeTabButton
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text 
                  style={[
                    styles.tabButtonText,
                    activeTab === tab && styles.activeTabButtonText
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Tab Content */}
          {renderTabContent()}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onBackground,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  profileBackground: {
    height: HP(70),
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WP(5),
    paddingTop: HP(2),
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
    fontSize: WP(6),
    fontWeight: 'bold',
  },
  placeholder: {
    width: WP(10),
  },
  profileInfoOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    
  },
  profileInfo: {
    padding: WP(5),
  },
  profileName: {
    color: colors.textPrimary,
    fontSize: WP(8),
    fontWeight: 'bold',
    marginBottom: HP(0.5),
  },
  profileUsername: {
    color: colors.textPrimary,
    fontSize: WP(4),
    marginBottom: HP(2),
  },
  followButton: {
    alignSelf: 'flex-end',
    borderColor: colors.textPrimary,
    borderWidth: 1,
    borderRadius: WP(5),
    paddingVertical: HP(1),
    paddingHorizontal: WP(5),
    position: 'absolute',
    top: 0,
    right: WP(5),
  },
  followButtonText: {
    color: colors.textPrimary,
    fontSize: WP(4),
  },
  bioSection: {
    marginTop: HP(2),
  },
  bioLabel: {
    color: colors.textPrimary,
    fontSize: WP(4),
    marginBottom: HP(0.5),
  },
  bioText: {
    color: colors.textPrimary,
    fontSize: WP(4),
    lineHeight: HP(3),
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: WP(5),
    paddingVertical: HP(2),
  },
  tabButton: {
    paddingVertical: HP(1.5),
    paddingHorizontal: WP(4),
    borderRadius: WP(5),
    backgroundColor: '#1E1E1E',
  },
  activeTabButton: {
    backgroundColor: colors.primary,
  },
  tabButtonText: {
    color: colors.textPrimary,
    fontSize: WP(4),
  },
  activeTabButtonText: {
    color: '#000000',
    fontWeight: '600',
  },
  tabContent: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(5),
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: WP(5),
    fontWeight: 'bold',
    marginBottom: HP(2),
  },
  newsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newsCard: {
    width: WP(42),
    height: HP(20),
    borderRadius: WP(3),
    overflow: 'hidden',
  },
  newsImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  newsTextOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: WP(3),
  },
  newsText: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emptyStateText: {
    color: '#8A8A8A',
    fontSize: WP(4),
    textAlign: 'center',
    marginTop: HP(5),
  },
});

export default ProfileScreen;