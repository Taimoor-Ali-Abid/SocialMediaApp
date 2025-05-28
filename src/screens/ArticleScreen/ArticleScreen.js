// ArticlesScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';
import { useNavigation } from '@react-navigation/native';

// Import vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Import images for article thumbnails and author profile
import FrameOne from '../../assets/images/png/FrameOne.png';
import FrameTwo from '../../assets/images/png/FrameTwo.png';
import FrameThree from '../../assets/images/png/FrameThree.png';

const ArticlesScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  // Sample data for categories
  const categories = ['All', 'Technology', 'Health', 'Business', 'Lifestyle'];

  // Sample data for recent articles
  const recentArticles = [
    {
      id: 1,
      title: '10 Tips for Starting Your Own Business',
      image: FrameOne,
      author: 'Alima Jazan',
      authorImage: FrameThree,
      date: 'Sep 23, 2024',
    },
    {
      id: 2,
      title: 'How AI is Changing Healthcare',
      image: FrameTwo,
      author: 'Alima Jazan',
      authorImage: FrameThree,
      date: 'Sep 23, 2024',
    }
  ];

  // Sample data for popular articles
  const popularArticles = [
    {
      id: 1,
      title: 'Healthy Eating on a Budget: Nutritious Meals for Less',
      image: FrameOne,
      timeAgo: '2h ago',
      readCount: '8k read',
    },
    {
      id: 2,
      title: 'Healthy Eating on a Budget: Nutritious Meals for Less',
      image: FrameTwo,
      timeAgo: '2h ago',
      readCount: '8k read',
    },
    {
      id: 3,
      title: 'Healthy Eating on a Budget: Nutritious Meals for Less',
      image: FrameThree,
      timeAgo: '2h ago',
      readCount: '8k read',
    }
  ];

  // Render recent article item
  const renderRecentArticleItem = (item) => (
    <TouchableOpacity 
      style={styles.recentArticleCard}
      onPress={() => {
        // Navigate to article detail
      }}
    >
      <Image source={item.image} style={styles.recentArticleImage} />
      <Text style={styles.recentArticleTitle}>{item.title}</Text>
      <View style={styles.authorContainer}>
        <Image source={item.authorImage} style={styles.authorImage} />
        <View>
          <Text style={styles.authorName}>{item.author}</Text>
          <Text style={styles.articleDate}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  // Render popular article item
  const renderPopularArticleItem = (item) => (
    <TouchableOpacity 
      style={styles.popularArticleItem}
      onPress={() => {
        // Navigate to article detail
      }}
    >
      <Image source={item.image} style={styles.popularArticleImage} />
      <View style={styles.popularArticleContent}>
        <Text style={styles.popularArticleTitle}>{item.title}</Text>
        <View style={styles.articleMetrics}>
          <Text style={styles.articleMetricText}>{item.timeAgo}</Text>
          <View style={styles.metricDot} />
          <Text style={styles.articleMetricText}>{item.readCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={colors.gradient.colors}
      start={colors.gradient.start}
      end={colors.gradient.end}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={WP(7)} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Articles</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={WP(5)} color="#6B7280" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#6B7280"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      {/* Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryItem,
              selectedCategory === category && styles.selectedCategoryItem
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text 
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView 
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Recent Articles */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Articles</Text>
          <TouchableOpacity style={styles.sortButton}>
            <Feather name="sliders" size={WP(4.5)} color={colors.textPrimary} />
            <Text style={styles.sortText}>Sort By</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recentArticlesContainer}>
          {recentArticles.map((article) => renderRecentArticleItem(article))}
        </View>

        {/* Popular Articles */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Articles</Text>
          <TouchableOpacity style={styles.sortButton}>
            <Feather name="sliders" size={WP(4.5)} color={colors.textPrimary} />
            <Text style={styles.sortText}>Sort By</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.popularArticlesContainer}>
          {popularArticles.map((article) => renderPopularArticleItem(article))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

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
    paddingHorizontal: WP(5),
    marginBottom: HP(2),
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    borderRadius: WP(3),
    paddingHorizontal: WP(3),
    height: HP(6),
  },
  searchIcon: {
    marginRight: WP(2),
  },
  searchInput: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: WP(4),
  },
  categoriesContainer: {
    maxHeight: HP(6),
    marginBottom: HP(2),
  },
  categoriesContent: {
    paddingHorizontal: WP(5),
  },
  categoryItem: {
    paddingHorizontal: WP(4),
    paddingVertical: HP(1),
    borderRadius: WP(5),
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    marginRight: WP(2),
  },
  selectedCategoryItem: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
  },
  selectedCategoryText: {
    color: '#000',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: WP(5),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: HP(2),
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: WP(4.5),
    fontWeight: 'bold',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
    marginLeft: WP(1),
  },
  recentArticlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: HP(3),
  },
  recentArticleCard: {
    width: '48%',
    borderRadius: WP(3),
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    overflow: 'hidden',
  },
  recentArticleImage: {
    width: '100%',
    height: HP(12),
    resizeMode: 'cover',
  },
  recentArticleTitle: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
    fontWeight: 'bold',
    padding: WP(3),
    paddingBottom: WP(2),
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WP(3),
    paddingBottom: WP(3),
  },
  authorImage: {
    width: WP(8),
    height: WP(8),
    borderRadius: WP(4),
    marginRight: WP(2),
  },
  authorName: {
    color: colors.textPrimary,
    fontSize: WP(3),
    fontWeight: 'bold',
  },
  articleDate: {
    color: '#9CA3AF',
    fontSize: WP(2.5),
  },
  popularArticlesContainer: {
    marginBottom: HP(3),
  },
  popularArticleItem: {
    flexDirection: 'row',
    marginBottom: HP(2),
    borderRadius: WP(3),
    overflow: 'hidden',
  },
  popularArticleImage: {
    width: WP(25),
    height: WP(25),
    resizeMode: 'cover',
  },
  popularArticleContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: WP(3),
  },
  popularArticleTitle: {
    color: colors.textPrimary,
    fontSize: WP(3.8),
    fontWeight: 'bold',
    marginBottom: HP(1),
  },
  articleMetrics: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  articleMetricText: {
    color: '#9CA3AF',
    fontSize: WP(3),
  },
  metricDot: {
    width: WP(1),
    height: WP(1),
    borderRadius: WP(0.5),
    backgroundColor: '#9CA3AF',
    marginHorizontal: WP(2),
  },
});

export default ArticlesScreen;