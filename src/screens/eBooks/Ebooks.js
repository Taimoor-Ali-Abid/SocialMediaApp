// EBooksScreen.js
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  SafeAreaView,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';

// Import vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

// Sample data for eBooks
const recentEBooks = [
  {
    id: '1',
    title: 'The Art of Design',
    author: 'Jane Doe',
    rating: 5.0,
    description: 'A comprehensive guide to modern design principles and practices. Learn how to create stunning visuals and user experiences.',
    coverImage: require('../../assets/images/png/FrameOne.png'), // Replace with actual image
    authorImage: require('../../assets/images/png/FrameOne.png'), // Replace with actual image
  },
  {
    id: '2',
    title: 'Digital Transformation',
    author: 'John Smith',
    rating: 4.8,
    description: 'Explore how digital technologies are reshaping industries and creating new opportunities for innovation and growth.',
    coverImage: require('../../assets/images/png/FrameTwo.png'), // Replace with actual image
    authorImage: require('../../assets/images/png/FrameTwo.png'), // Replace with actual image
  },
];

const popularEBooks = [
  {
    id: '3',
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    rating: 5.0,
    description: 'Why we do what we do in life and business. Discover how habits work and how they can be changed to transform your life.',
    coverImage: require('../../assets/images/png/FrameThree.png'), // Replace with actual image
    authorImage: require('../../assets/images/png/FrameOne.png'), // Replace with actual image
  },
  {
    id: '4',
    title: 'Marketing Strategies',
    author: 'Sarah Johnson',
    rating: 4.7,
    description: 'Learn effective marketing strategies for the digital age. This book covers social media, content marketing, and more.',
    coverImage: require('../../assets/images/png/FrameTwo.png'), // Replace with actual image
    authorImage: require('../../assets/images/png/FrameTwo.png'), // Replace with actual image
  },
];

const bestEBooks = [
  {
    id: '5',
    title: 'The Science of Sleep',
    author: 'Charles Duhigg',
    rating: 5.0,
    description: 'Discover the latest scientific findings about sleep and how it affects your health, productivity, and overall well-being.',
    coverImage: require('../../assets/images/png/FrameOne.png'), // Replace with actual image
    authorImage: require('../../assets/images/png/FrameOne.png'), // Replace with actual image
  },
  {
    id: '6',
    title: 'Artificial Intelligence',
    author: 'Michael Chen',
    rating: 4.9,
    description: 'An introduction to AI concepts and applications. Learn how AI is transforming industries and what the future holds.',
    coverImage: require('../../assets/images/png/FrameTwo.png'), // Replace with actual image
    authorImage: require('../../assets/images/png/FrameTwo.png'), // Replace with actual image
  },
];

const EBookCard = ({ book, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.bookCard}
      onPress={() => onPress(book)}
    >
      <Image source={book.coverImage} style={styles.bookCoverImage} />
      <View style={styles.bookRatingContainer}>
        <FontAwesome name="star" size={WP(3.5)} color="#FFD700" />
        <Text style={styles.bookRatingText}>{book.rating}</Text>
      </View>
      <View style={styles.bookInfoOverlay}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <View style={styles.authorContainer}>
          <Image source={book.authorImage} style={styles.authorImage} />
          <Text style={styles.authorName}>{book.author}</Text>
        </View>
        <TouchableOpacity 
          style={styles.readMoreButton}
          onPress={() => onPress(book)}
        >
          <Text style={styles.readMoreText}>Read more</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity style={styles.sortButton}>
        <Feather name="sliders" size={WP(4)} color={colors.textPrimary} />
        <Text style={styles.sortText}>Sort By</Text>
      </TouchableOpacity>
    </View>
  );
};

const EBooksScreen = () => {
  const navigation = useNavigation();

  const handleBookPress = (book) => {
    // Navigate to the EBookDetail screen with the selected book data

    
    navigation.navigate('EBookDetailScreen', { book });
  };

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
          <Text style={styles.headerTitle}>eBooks</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={WP(5)} color="#8A8A8A" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#8A8A8A"
          />
        </View>

        <ScrollView 
          style={styles.scrollView} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Recent eBooks */}
          <SectionHeader title="Recent eBooks" />
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bookList}
          >
            {recentEBooks.map(book => (
              <EBookCard 
                key={book.id} 
                book={book} 
                onPress={handleBookPress}
              />
            ))}
          </ScrollView>

          {/* Popular eBooks */}
          <SectionHeader title="Popular eBooks" />
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bookList}
          >
            {popularEBooks.map(book => (
              <EBookCard 
                key={book.id} 
                book={book} 
                onPress={handleBookPress}
              />
            ))}
          </ScrollView>

          {/* Best eBooks */}
          <SectionHeader title="Best eBooks" />
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bookList}
          >
            {bestEBooks.map(book => (
              <EBookCard 
                key={book.id} 
                book={book} 
                onPress={handleBookPress}
              />
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    borderRadius: WP(3),
    marginHorizontal: WP(5),
    marginBottom: HP(3),
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: HP(5),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: WP(5),
    marginBottom: HP(2),
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: WP(5),
    fontWeight: 'bold',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    color: colors.textPrimary,
    marginLeft: WP(1),
    fontSize: WP(3.5),
  },
  bookList: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(3),
  },
  bookCard: {
    width: WP(90),
    height: HP(30),
    marginRight: WP(3),
    borderRadius: WP(3),
    overflow: 'hidden',
    position: 'relative',
  },
  bookCoverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bookRatingContainer: {
    position: 'absolute',
    top: WP(3),
    right: WP(3),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: WP(2),
    paddingVertical: HP(0.5),
    borderRadius: WP(4),
  },
  bookRatingText: {
    color: colors.textPrimary,
    marginLeft: WP(1),
    fontSize: WP(3),
  },
  bookInfoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: WP(3),
  },
  bookTitle: {
    color: colors.textPrimary,
    fontSize: WP(4.5),
    fontWeight: 'bold',
    marginBottom: HP(1),
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: HP(1.5),
  },
  authorImage: {
    width: WP(6),
    height: WP(6),
    borderRadius: WP(3),
    marginRight: WP(2),
  },
  authorName: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
  },
  readMoreButton: {
    backgroundColor: colors.primary,
    paddingVertical: HP(0.8),
    paddingHorizontal: WP(4),
    borderRadius: WP(5),
    alignSelf: 'flex-end',
  },
  readMoreText: {
    color: '#000000',
    fontSize: WP(3.5),
    fontWeight: 'bold',
  },
});

export default EBooksScreen;