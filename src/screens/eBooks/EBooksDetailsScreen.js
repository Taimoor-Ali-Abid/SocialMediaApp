// EBookDetailScreen.js
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity,
  StatusBar,
  SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';

// Import vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';

const EBookDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [showFullDescription, setShowFullDescription] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  
  // Get the book data passed from the EBooksScreen
  const { book } = route.params || {};
  
  // Enhanced book data with additional details needed for the detail screen
  const bookData = {
    ...book,
    authorTitle: 'Author',
    releaseDate: 'Dec, 2020',
    pages: 316,
    language: 'English',
    genres: ['Design', 'Art', 'Education', 'Creative'],
    fullDescription: book?.description + ' This book covers everything from color theory to typography, layout design to user interface principles. Perfect for beginners and professionals alike who want to enhance their design skills and create more impactful visual communications. The book includes practical exercises and real-world examples to help you apply the concepts immediately in your own projects.',
  };

  const truncatedDescription = bookData.fullDescription?.substring(0, 150) + '...';

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
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
          <View style={styles.headerActions}>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={toggleFavorite}
            >
              <Ionicons 
                name={isFavorite ? "heart" : "heart-outline"} 
                size={WP(6)} 
                color={isFavorite ? colors.primary : colors.textPrimary} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Feather name="share-2" size={WP(6)} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Book Cover and Details */}
          <View style={styles.bookInfoContainer}>
            <Image source={bookData.coverImage} style={styles.bookCover} />
            <View style={styles.bookDetails}>
              <Text style={styles.bookTitle}>{bookData.title}</Text>
              <Text style={styles.authorName}>{bookData.author}</Text>
              <Text style={styles.releaseDate}>Released on {bookData.releaseDate}</Text>
              
              <View style={styles.genresContainer}>
                {bookData.genres.slice(0, 4).map((genre, index) => (
                  <View key={index} style={styles.genreTag}>
                    <Text style={styles.genreText}>{genre}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Book Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Page</Text>
              <Text style={styles.statValue}>{bookData.pages}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Language</Text>
              <Text style={styles.statValue}>{bookData.language}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Ratings</Text>
              <Text style={styles.statValue}>{bookData.rating}</Text>
            </View>
          </View>

          {/* Description */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Descriptions</Text>
            <Text style={styles.descriptionText}>
              {showFullDescription ? bookData.fullDescription : truncatedDescription}
              {!showFullDescription && (
                <TouchableOpacity onPress={() => setShowFullDescription(true)}>
                  <Text style={styles.seeMoreText}>See More</Text>
                </TouchableOpacity>
              )}
            </Text>
          </View>

          {/* Author */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Author</Text>
            <View style={styles.authorContainer}>
              <Image source={bookData.authorImage} style={styles.authorImage} />
              <View style={styles.authorInfo}>
                <Text style={styles.authorFullName}>{bookData.author}</Text>
                <Text style={styles.authorTitle}>{bookData.authorTitle}</Text>
              </View>
              <TouchableOpacity style={styles.viewProfileButton}>
                <Text style={styles.viewProfileText}>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  headerActions: {
    flexDirection: 'row',
  },
  actionButton: {
    width: WP(10),
    height: WP(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: WP(3),
  },
  scrollView: {
    flex: 1,
  },
  bookInfoContainer: {
    flexDirection: 'row',
    paddingHorizontal: WP(5),
    paddingVertical: HP(2),
  },
  bookCover: {
    width: WP(30),
    height: HP(20),
    borderRadius: WP(2),
    resizeMode: 'cover',
  },
  bookDetails: {
    flex: 1,
    marginLeft: WP(4),
    justifyContent: 'center',
  },
  bookTitle: {
    color: colors.textPrimary,
    fontSize: WP(5),
    fontWeight: 'bold',
    marginBottom: HP(1),
  },
  authorName: {
    color: colors.primary,
    fontSize: WP(4),
    marginBottom: HP(1),
  },
  releaseDate: {
    color: '#8A8A8A',
    fontSize: WP(3.5),
    marginBottom: HP(2),
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genreTag: {
    backgroundColor: 'rgba(50, 50, 50, 0.7)',
    paddingHorizontal: WP(3),
    paddingVertical: HP(0.5),
    borderRadius: WP(4),
    marginRight: WP(2),
    marginBottom: HP(1),
  },
  genreText: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    marginHorizontal: WP(5),
    marginVertical: HP(2),
    borderRadius: WP(3),
    padding: WP(4),
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    color: '#8A8A8A',
    fontSize: WP(3.5),
    marginBottom: HP(0.5),
  },
  statValue: {
    color: colors.primary,
    fontSize: WP(5),
    fontWeight: 'bold',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#333',
    height: '80%',
    alignSelf: 'center',
  },
  sectionContainer: {
    paddingHorizontal: WP(5),
    marginBottom: HP(3),
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: WP(5),
    fontWeight: 'bold',
    marginBottom: HP(2),
  },
  descriptionText: {
    color: '#AAAAAA',
    fontSize: WP(3.8),
    lineHeight: WP(5.5),
  },
  seeMoreText: {
    color: colors.primary,
    fontSize: WP(3.8),
    fontWeight: 'bold',
    marginLeft: WP(1),
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImage: {
    width: WP(12),
    height: WP(12),
    borderRadius: WP(6),
    marginRight: WP(3),
  },
  authorInfo: {
    flex: 1,
  },
  authorFullName: {
    color: colors.textPrimary,
    fontSize: WP(4),
    fontWeight: 'bold',
  },
  authorTitle: {
    color: '#8A8A8A',
    fontSize: WP(3.5),
  },
  viewProfileButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: WP(5),
    paddingVertical: HP(1),
    paddingHorizontal: WP(4),
  },
  viewProfileText: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
  },
});

export default EBookDetailScreen;