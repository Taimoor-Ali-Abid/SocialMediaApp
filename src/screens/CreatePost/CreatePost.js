// CreatePostScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';
import { useNavigation } from '@react-navigation/native';

// Redux
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/slices/postslice';
import uuid from 'react-native-uuid';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// Profile image
import FrameOne from '../../assets/images/png/FrameOne.png';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';

const CreatePostScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [postText, setPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCamera = () => {
    launchCamera({ mediaType: 'photo', saveToPhotos: true }, response => {
      if (!response.didCancel && !response.errorCode) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  const handleGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.errorCode) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  const handleShare = () => {
    if (postText.trim() === '') return;

    const newPost = {
      id: uuid.v4(),
      content: postText,
      image: selectedImage,
      createdAt: new Date().toISOString(),
    };

    dispatch(addPost(newPost));
    setPostText('');
    setSelectedImage(null);
    navigation.goBack(); // Navigate back to Home or previous screen
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
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={WP(7)} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Post</Text>
        <View style={styles.headerRight} />
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.userInfoContainer}>
            <Image source={FrameOne} style={styles.profilePic} />
            <Text style={styles.userName}>XYZ</Text>
          </View>

          <TextInput
            style={styles.postInput}
            placeholder="What's on your mind?"
            placeholderTextColor="#6B7280"
            multiline
            value={postText}
            onChangeText={setPostText}
          />

          {selectedImage && (
            <View style={styles.imagePreviewContainer}>
              <Image 
                source={{ uri: selectedImage }} 
                style={styles.selectedImage} 
                resizeMode="cover"
              />
              <TouchableOpacity 
                style={styles.removeImageButton}
                onPress={() => setSelectedImage(null)}
              >
                <Ionicons name="close" size={WP(5)} color={colors.textPrimary} />
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.bottomOptions}>
        <TouchableOpacity style={styles.optionItem} onPress={handleCamera}>
          <Feather name="camera" size={WP(6)} color={colors.textPrimary} />
          <Text style={styles.optionText}>Camera</Text>
        </TouchableOpacity>
        
        <View style={styles.optionDivider} />
        
        <TouchableOpacity style={styles.optionItem} onPress={handleGallery}>
          <Feather name="image" size={WP(6)} color={colors.textPrimary} />
          <Text style={styles.optionText}>Photo / Video</Text>
        </TouchableOpacity>
        
        <View style={styles.optionDivider} />
        
        <TouchableOpacity style={styles.optionItem}>
          <MaterialCommunityIcons name="poll" size={WP(6)} color={colors.textPrimary} />
          <Text style={styles.optionText}>Add Polls</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.saveDraftButton}>
          <Text style={styles.saveDraftText}>Save Draft</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: WP(5),
    paddingTop: HP(5),
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
  headerRight: { width: WP(10) },
  keyboardAvoidingView: { flex: 1 },
  scrollView: {
    flex: 1,
    paddingHorizontal: WP(5),
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: HP(2),
  },
  profilePic: {
    width: WP(12),
    height: WP(12),
    borderRadius: WP(6),
    marginRight: WP(3),
  },
  userName: {
    color: colors.textPrimary,
    fontSize: WP(4.5),
    fontWeight: 'bold',
  },
  postInput: {
    color: colors.textPrimary,
    fontSize: WP(4.5),
    textAlignVertical: 'top',
    minHeight: HP(30),
    paddingTop: 0,
  },
  bottomOptions: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: HP(2),
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: HP(1.5),
    paddingHorizontal: WP(5),
  },
  optionText: {
    color: colors.textPrimary,
    fontSize: WP(4),
    marginLeft: WP(3),
  },
  optionDivider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: WP(5),
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: WP(5),
    paddingVertical: HP(2),
    paddingBottom: Platform.OS === 'ios' ? HP(4) : HP(2),
  },
  saveDraftButton: {
    flex: 1,
    backgroundColor: '#333333',
    borderRadius: WP(5),
    paddingVertical: HP(2),
    alignItems: 'center',
    marginRight: WP(2),
  },
  saveDraftText: {
    color: colors.textPrimary,
    fontSize: WP(4),
    fontWeight: 'bold',
  },
  shareButton: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: WP(5),
    paddingVertical: HP(2),
    alignItems: 'center',
    marginLeft: WP(2),
  },
  shareText: {
    color: colors.onPrimary,
    fontSize: WP(4),
    fontWeight: 'bold',
  },
  imagePreviewContainer: {
    marginTop: HP(2),
    borderRadius: WP(2),
    overflow: 'hidden',
    position: 'relative',
  },
  selectedImage: {
    width: '100%',
    height: HP(30),
    borderRadius: WP(2),
  },
  removeImageButton: {
    position: 'absolute',
    top: HP(1),
    right: HP(1),
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: WP(3),
    width: WP(6),
    height: WP(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreatePostScreen;
