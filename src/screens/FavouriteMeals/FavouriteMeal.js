// FlavorfulMealsScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';

// Import vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


// Sample data for recipes
const categories = [
  { id: '1', name: 'All' },
  { id: '2', name: 'Breakfast' },
  { id: '3', name: 'Salad' },
  { id: '4', name: 'Lunch' },
  { id: '5', name: 'Appetizer' },
];

const trendingRecipes = [
  {
    id: '1',
    title: 'Spicy Chicken Tacos',
    description: 'Zesty chicken with fresh salsa and avocado',
    image: require('../../assets/images/png/chicken-tacos.png'),
    duration: '15:10',
    calories: '500 kcal',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'Spicy Beef Bowl',
    description: 'Zesty beef with fresh vegetables and avocado',
    image: require('../../assets/images/png/beef-bowl.png'),
    duration: '15:30',
    calories: '650 kcal',
    rating: 4.7,
  },
];

const popularRecipes = [
  {
    id: '1',
    title: 'Creamy Tomato Basil Soup',
    description: 'Rich and creamy with a hint of fresh basil',
    image: require('../../assets/images/png/tomota-soup.png'),
    duration: '15:10',
    calories: '500 kcal',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'Spicy Vegetable Curry',
    description: 'Zesty vegetables in a rich curry sauce',
    image: require('../../assets/images/png/beef-bowl.png'),
    duration: '15:45',
    calories: '450 kcal',
    rating: 4.3,
  },
];

const recentRecipes = [
  {
    id: '1',
    title: 'Garlic Shrimp Pasta',
    description: 'Pasta tossed with shrimp in a garlic butter sauce',
    image: require('../../assets/images/png/beef-bowl.png'),
    duration: '15:10',
    calories: '500 kcal',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'Spicy Tofu Stir Fry',
    description: 'Zesty tofu with fresh vegetables and rice',
    image: require('../../assets/images/png/beef-bowl.png'),
    duration: '15:20',
    calories: '380 kcal',
    rating: 4.2,
  },
];

const FlavorfulMealsScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Render recipe card
  const renderRecipeCard = (item) => {
    return (
      <TouchableOpacity 
        style={styles.recipeCard}
        onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
      >
        <Image source={item.image} style={styles.recipeImage} />
        
        {/* Play button overlay */}
        <View style={styles.playButtonContainer}>
          <View style={styles.playButton}>
            <Ionicons name="play" size={WP(6)} color={colors.textPrimary} />
          </View>
        </View>
        
        {/* Duration and calories */}
        <View style={styles.recipeMetaContainer}>
          <View style={styles.durationContainer}>
            <Text style={styles.durationText}>{item.duration}</Text>
          </View>
          
          <View style={styles.caloriesContainer}>
            <Ionicons name="flame" size={WP(4)} color="#FFC107" />
            <Text style={styles.caloriesText}>{item.calories}</Text>
          </View>
        </View>
        
        {/* Rating */}
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={WP(4)} color="#FFC107" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        
        {/* Recipe info */}
        <View style={styles.recipeInfoContainer}>
          <Text style={styles.recipeTitle}>{item.title}</Text>
          <Text style={styles.recipeDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Render category item
  const renderCategoryItem = ({ item }) => {
    const isSelected = selectedCategory === item.name;
    
    return (
      <TouchableOpacity
        style={[
          styles.categoryItem,
          isSelected && styles.selectedCategoryItem
        ]}
        onPress={() => setSelectedCategory(item.name)}
      >
        <Text 
          style={[
            styles.categoryText,
            isSelected && styles.selectedCategoryText
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  // Render section header
  const renderSectionHeader = (title, fireIcon = false) => {
    return (
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>{title}</Text>
          {fireIcon && (
            <Ionicons name="flame" size={WP(5)} color="#FF5722" style={styles.fireIcon} />
          )}
        </View>
        
        <TouchableOpacity style={styles.sortButton}>
          <MaterialIcons name="sort" size={WP(5)} color={colors.textPrimary} />
          <Text style={styles.sortText}>Sort By</Text>
        </TouchableOpacity>
      </View>
    );
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
          <Text style={styles.headerTitle}>Flavorful Meals</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={WP(5)} color="#8A8A8A" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#8A8A8A"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <ScrollView 
          style={styles.scrollView} 
          showsVerticalScrollIndicator={false}
        >
          {/* Categories */}
          <View style={styles.categoriesContainer}>
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesList}
            />
          </View>

          {/* Trending Now Section */}
          {renderSectionHeader('Trending now', true)}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalRecipeList}
          >
            {trendingRecipes.map((recipe) => (
              <View key={recipe.id} style={styles.recipeCardContainer}>
                {renderRecipeCard(recipe)}
              </View>
            ))}
          </ScrollView>

          {/* Popular Recipe Section */}
          {renderSectionHeader('Popular recipe')}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalRecipeList}
          >
            {popularRecipes.map((recipe) => (
              <View key={recipe.id} style={styles.recipeCardContainer}>
                {renderRecipeCard(recipe)}
              </View>
            ))}
          </ScrollView>

          {/* Recent Recipe Section */}
          {renderSectionHeader('Recent recipe')}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalRecipeList}
          >
            {recentRecipes.map((recipe) => (
              <View key={recipe.id} style={styles.recipeCardContainer}>
                {renderRecipeCard(recipe)}
              </View>
            ))}
          </ScrollView>
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
    backgroundColor: '#1E1E1E',
    marginHorizontal: WP(5),
    marginVertical: HP(1),
    borderRadius: WP(3),
    paddingHorizontal: WP(4),
    paddingVertical: HP(1.5),
  },
  searchIcon: {
    marginRight: WP(2),
  },
  searchInput: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: WP(4),
    padding: 0,
  },
  scrollView: {
    flex: 1,
  },
  categoriesContainer: {
    marginVertical: HP(2),
  },
  categoriesList: {
    paddingHorizontal: WP(5),
  },
  categoryItem: {
    backgroundColor: '#1E1E1E',
    paddingHorizontal: WP(4),
    paddingVertical: HP(1),
    borderRadius: WP(5),
    marginRight: WP(2),
  },
  selectedCategoryItem: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    color: '#8A8A8A',
    fontSize: WP(3.5),
  },
  selectedCategoryText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: WP(5),
    marginTop: HP(3),
    marginBottom: HP(1.5),
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: WP(5),
    fontWeight: 'bold',
  },
  fireIcon: {
    marginLeft: WP(2),
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
  horizontalRecipeList: {
    paddingHorizontal: WP(5),
    paddingBottom: HP(2),
  },
  recipeCardContainer: {
    width: WP(60),
    marginRight: WP(4),
  },
  recipeCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: WP(3),
    overflow: 'hidden',
  },
  recipeImage: {
    width: '100%',
    height: HP(20),
    resizeMode: 'cover',
  },
  playButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: HP(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: WP(12),
    height: WP(12),
    borderRadius: WP(6),
    backgroundColor: 'rgba(38, 166, 154, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeMetaContainer: {
    position: 'absolute',
    bottom: HP(8),
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: WP(3),
  },
  durationContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: WP(2),
    paddingVertical: HP(0.5),
    borderRadius: WP(2),
  },
  durationText: {
    color: colors.textPrimary,
    fontSize: WP(3),
  },
  caloriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: WP(2),
    paddingVertical: HP(0.5),
    borderRadius: WP(2),
  },
  caloriesText: {
    color: colors.textPrimary,
    fontSize: WP(3),
    marginLeft: WP(1),
  },
  ratingContainer: {
    position: 'absolute',
    top: HP(1),
    right: WP(3),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: WP(2),
    paddingVertical: HP(0.5),
    borderRadius: WP(2),
  },
  ratingText: {
    color: colors.textPrimary,
    fontSize: WP(3),
    marginLeft: WP(1),
  },
  recipeInfoContainer: {
    padding: WP(3),
  },
  recipeTitle: {
    color: colors.textPrimary,
    fontSize: WP(4),
    fontWeight: 'bold',
    marginBottom: HP(0.5),
  },
  recipeDescription: {
    color: '#8A8A8A',
    fontSize: WP(3.2),
  },
});

export default FlavorfulMealsScreen;