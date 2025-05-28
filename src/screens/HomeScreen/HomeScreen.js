// HomeScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../utils/color';
import {WP, HP} from '../../utils/pixelresponsive';
import FrameOne from '../../assets/images/png/FrameOne.png';
import FrameTwo from '../../assets/images/png/FrameTwo.png';
import FrameThree from '../../assets/images/png/FrameThree.png';
import LogoScoialMedia from '../../assets/images/png/LogoScoialMedia.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux'; // ✅ Redux


import Menu from '../../components/Menu/Menu';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  // ✅ Get posts from Redux store
  const posts = useSelector(state => state.post.posts);
  console.log('Posts from Redux:', posts);
  return (
    
    <>
<SafeAreaProvider>

      <Menu
        isVisible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />
<SafeAreaView edges={['left', 'right', 'bottom']} style={{ flex: 1 }}>


      <LinearGradient
        colors={colors.gradient.colors}
        start={colors.gradient.start}
        end={colors.gradient.end}
        style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={LogoScoialMedia} style={styles.logo} />
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons
                name="notifications"
                size={WP(5)}
                color={colors.textPrimary}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="search" size={WP(5)} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Feed */}
        <ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
          {/* ✅ Render Redux Posts */}
          {posts.map((item, index) => (
            <View key={index} style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.userInfo}>
                  <Image source={FrameOne} style={styles.profilePic} />

                  <View>
                    <Text style={styles.userName}>{item.user || 'You'}</Text>
                    <Text style={styles.postTime}>Just now</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <MaterialIcons
                    name="more-vert"
                    size={WP(6)}
                    color={colors.textPrimary}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.postText}>{item.content}</Text>

              {/* Add image rendering here */}
              {item.image && (
                <Image 
                  source={{ uri: item.image }} 
                  style={styles.postImage}
                  resizeMode="cover"
                />
              )}

              {/* Post Stats */}
              <View style={styles.postStats}>
                <View style={styles.statItem}>
                  <FontAwesome
                    name="thumbs-up"
                    size={WP(4)}
                    color={colors.textPrimary}
                  />
                  <Text style={styles.statText}>0</Text>
                </View>
                <View style={styles.statItem}>
                  <MaterialCommunityIcons
                    name="comment-outline"
                    size={WP(4)}
                    color={colors.textPrimary}
                  />
                  <Text style={styles.statText}>0</Text>
                </View>
              </View>

              {/* Comment Input */}
              <View style={styles.commentInputContainer}>
                <Image source={FrameOne} style={styles.commentProfilePic} />
                <TextInput
                  style={styles.commentInput}
                  placeholder="Write a comment..."
                  placeholderTextColor="#8A8A8A"
                />
              </View>
            </View>
          ))}

          {/* Post 2 - Poll */}
          <View style={styles.postCard}>
            {/* Post Header */}
            <View style={styles.postHeader}>
              <View style={styles.userInfo}>
                <Image source={FrameTwo} style={styles.profilePic} />
                <View>
                  <Text style={styles.userName}>John Smith</Text>
                  <Text style={styles.postTime}>2 hour ago</Text>
                </View>
              </View>
              <TouchableOpacity>
                <MaterialIcons
                  name="more-vert"
                  size={WP(6)}
                  color={colors.textPrimary}
                />
              </TouchableOpacity>
            </View>

            {/* Poll Question */}
            <Text style={styles.pollQuestion}>
              What is your favorite feature of the website?
            </Text>

            {/* Poll Options */}
            <View style={styles.pollOptions}>
              <TouchableOpacity style={styles.pollOptionSelected}>
                <View style={styles.radioSelected}>
                  <View style={styles.radioInner} />
                </View>
                <Text style={styles.pollOptionText}>
                  User-friendly navigation
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.pollOption}>
                <View style={styles.radio} />
                <Text style={styles.pollOptionText}>Attractive design</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.pollOption}>
                <View style={styles.radio} />
                <Text style={styles.pollOptionText}>Easy checkout process</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.pollOption}>
                <View style={styles.radio} />
                <Text style={styles.pollOptionText}>Responsive design</Text>
              </TouchableOpacity>
            </View>

            {/* Poll Footer */}
            <View style={styles.pollFooter}>
              <View style={styles.voterAvatars}>
                <Image source={FrameOne} style={styles.voterAvatar} />
                <Image
                  source={FrameTwo}
                  style={[styles.voterAvatar, styles.voterAvatarOverlap]}
                />
                <Image
                  source={FrameThree}
                  style={[styles.voterAvatar, styles.voterAvatarOverlap]}
                />
              </View>
              <Text style={styles.voteCount}>
                Total Votes: 24 • 5 Days Left
              </Text>
              <TouchableOpacity style={styles.voteButton}>
                <Text style={styles.voteButtonText}>Vote</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Post 3 - Announcement */}
          <View style={styles.postCard}>
            {/* Post Header */}
            <View style={styles.postHeader}>
              <View style={styles.userInfo}>
                <Image source={FrameThree} style={styles.profilePic} />
                <View>
                  <Text style={styles.userName}>Ralena Akashe</Text>
                  <Text style={styles.postTime}>2 hour ago</Text>
                </View>
              </View>
              <TouchableOpacity>
                <MaterialIcons
                  name="more-vert"
                  size={WP(6)}
                  color={colors.textPrimary}
                />
              </TouchableOpacity>
            </View>

            {/* Post Text */}
            <Text style={styles.postText}>
              Excited to announce that our design team just wrapped up a major
              project! We've been working tirelessly on a new app feature that
              will revolutionize how users interact with their profiles.{' '}
              <MaterialCommunityIcons
                name="rocket-launch"
                size={WP(4)}
                color={colors.primary}
              />{' '}
              Can't wait to share more details soon! Stay tuned for updates.
            </Text>

            {/* Hashtags */}
            <View style={styles.hashtagContainer}>
              <Text style={styles.hashtag}>#AppDesign</Text>
              <Text style={styles.hashtag}>#UserExperience</Text>
              <Text style={styles.hashtag}>#BigNews</Text>
            </View>

            {/* Post Stats */}
            <View style={styles.postStats}>
              <View style={styles.statItem}>
                <FontAwesome
                  name="thumbs-up"
                  size={WP(4)}
                  color={colors.textPrimary}
                />
                <Text style={styles.statText}>2.4K</Text>
              </View>
              <View style={styles.statItem}>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={WP(4)}
                  color={colors.textPrimary}
                />
                <Text style={styles.statText}>120</Text>
              </View>
            </View>

            {/* Comment Input */}
            <View style={styles.commentInputContainer}>
              <Image source={FrameOne} style={styles.commentProfilePic} />
              <TextInput
                style={styles.commentInput}
                placeholder="Write a comment..."
                placeholderTextColor="#8A8A8A"
              />
             
            </View>
          </View>
        </ScrollView>
         <View style={styles.floatingLogo}>
                <TouchableOpacity onPress={() => setMenuVisible(true)}>
                  <Image
                    source={LogoScoialMedia}
                    style={styles.floatingLogoImage}
                  />
                </TouchableOpacity>
              </View>
      </LinearGradient>
      </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: WP(5),
    paddingTop: HP(5),
    paddingBottom: HP(2),
  },
  logo: {
    width: WP(10),
    height: WP(10),
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: WP(10),
    height: WP(10),
    borderRadius: WP(5),
    backgroundColor: 'rgba(50, 50, 50, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: WP(3),
  },
  feed: {
    flex: 1,
    paddingHorizontal: WP(5),
  },
  postCard: {
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    borderRadius: WP(4),
    padding: WP(4),
    marginBottom: HP(2),
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: HP(2),
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: WP(10),
    height: WP(10),
    borderRadius: WP(5),
    marginRight: WP(3),
  },
  userName: {
    color: colors.textPrimary,
    fontSize: WP(4),
    fontWeight: 'bold',
  },
  postTime: {
    color: '#8A8A8A',
    fontSize: WP(3),
  },
  // Add the new postImage style
  postImage: {
    width: '100%',
    height: HP(25),
    borderRadius: WP(3),
    marginBottom: HP(2),
    marginTop: HP(1),
  },
  imageCollage: {
    flexDirection: 'row',
    height: HP(25),
    borderRadius: WP(3),
    overflow: 'hidden',
    marginBottom: HP(2),
  },
  collageLeft: {
    flex: 1,
    height: '100%',
    marginRight: WP(1),
  },
  collageRight: {
    flex: 1,
    height: '100%',
  },
  collageTopRight: {
    width: '100%',
    height: '49.5%',
    marginBottom: '1%',
  },
  collageBottomRight: {
    width: '100%',
    height: '49.5%',
  },
  postText: {
    color: colors.textPrimary,
    fontSize: WP(3.8),
    lineHeight: WP(5.5),
    marginBottom: HP(2),
  },
  postStats: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(150, 150, 150, 0.2)',
    paddingTop: HP(1.5),
    marginBottom: HP(1.5),
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: WP(5),
  },
  statText: {
    color: colors.textPrimary,
    marginLeft: WP(1),
    fontSize: WP(3.5),
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  commentProfilePic: {
    width: WP(8),
    height: WP(8),
    borderRadius: WP(4),
    marginRight: WP(3),
  },
  commentInput: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: WP(3.5),
  },
  pollQuestion: {
    color: colors.textPrimary,
    fontSize: WP(4.5),
    fontWeight: 'bold',
    marginBottom: HP(2),
  },
  pollOptions: {
    marginBottom: HP(2),
  },
  pollOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: HP(1.5),
  },
  pollOptionSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: HP(1.5),
    backgroundColor: 'rgba(38, 166, 154, 0.1)',
    borderRadius: WP(2),
  },
  radio: {
    width: WP(5),
    height: WP(5),
    borderRadius: WP(2.5),
    borderWidth: 1,
    borderColor: '#8A8A8A',
    marginRight: WP(3),
    marginLeft: WP(2),
  },
  radioSelected: {
    width: WP(5),
    height: WP(5),
    borderRadius: WP(2.5),
    borderWidth: 1,
    borderColor: colors.primary,
    marginRight: WP(3),
    marginLeft: WP(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: WP(2.5),
    height: WP(2.5),
    borderRadius: WP(1.25),
    backgroundColor: colors.primary,
  },
  pollOptionText: {
    color: colors.textPrimary,
    fontSize: WP(3.8),
  },
  pollFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  voterAvatars: {
    flexDirection: 'row',
  },
  voterAvatar: {
    width: WP(7),
    height: WP(7),
    borderRadius: WP(3.5),
    borderWidth: 1,
    borderColor: '#323232',
  },
  voterAvatarOverlap: {
    marginLeft: -WP(3),
  },
  voteCount: {
    color: '#8A8A8A',
    fontSize: WP(3.2),
    flex: 1,
    marginLeft: WP(3),
  },
  voteButton: {
    backgroundColor: colors.primary,
    paddingVertical: HP(1),
    paddingHorizontal: WP(5),
    borderRadius: WP(5),
  },
  voteButtonText: {
    color: colors.onPrimary,
    fontWeight: 'bold',
  },
  hashtagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: HP(2),
  },
  hashtag: {
    color: colors.primary,
    marginRight: WP(2),
    fontSize: WP(3.5),
  },
  floatingLogo: {
    position: 'absolute',
    right: WP(2),
    bottom: HP(1.5),
    width: WP(15),
    height: WP(15),
    borderRadius: WP(7.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    shadowColor: '#1DA1F2', // Use the primary/dominant color of the logo
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10, // For Android shadow
  },

  floatingLogoImage: {
    width: WP(12),
    height: WP(12),
    resizeMode: 'contain',
  },
});