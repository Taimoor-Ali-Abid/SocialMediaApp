// EditPollScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  Switch
} from 'react-native';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';

// Import vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider,  SafeAreaView,
 } from 'react-native-safe-area-context';

const EditPoll = () => {
  const navigation = useNavigation();
  
  // State for poll question and options
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  
  // State for settings
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [sendReports, setSendReports] = useState(false);
  
  // Sample people data
  const people = [
    { id: '1', image: require('../../assets/images/png/FrameOne.png') },
    { id: '2', image: require('../../assets/images/png/FrameTwo.png') },
    { id: '3', image: require('../../assets/images/png/FrameThree.png') },
  ];

  // Add a new option
  const addOption = () => {
    setOptions([...options, '']);
  };

  // Update an option at a specific index
  const updateOption = (text, index) => {
    const newOptions = [...options];
    newOptions[index] = text;
    setOptions(newOptions);
  };

  // Handle post poll
  const handlePostPoll = () => {
    // Validate inputs
    if (!question.trim()) {
      alert('Please enter a question');
      return;
    }

    const validOptions = options.filter(option => option.trim() !== '');
    if (validOptions.length < 2) {
      alert('Please add at least two options');
      return;
    }

    // Create poll object
    const pollData = {
      question,
      options: validOptions,
      settings: {
        isAnonymous,
        sendReports,
        people
      }
    };

    // Here you would typically send this data to your backend
    console.log('Poll data:', pollData);
    
    // Navigate back or to poll view
    navigation.goBack();
  };

  return (
     <SafeAreaProvider>
        <SafeAreaView edges={['left', 'right', 'bottom']} style={{ flex: 1 }}>
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={WP(6)} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Poll</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView 
          style={styles.scrollView} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Poll Question and Options */}
          <View style={styles.pollContainer}>
            <TextInput
              style={styles.questionInput}
              placeholder="What do you want to ask?"
              placeholderTextColor={colors.textPrimary}
              value={question}
              onChangeText={setQuestion}
              multiline
            />

            {/* Poll Options */}
            {options.map((option, index) => (
              <TextInput
                key={index}
                style={styles.optionInput}
                placeholder={`Add option ${index + 1}`}
                placeholderTextColor="#8A8A8A"
                value={option}
                onChangeText={(text) => updateOption(text, index)}
              />
            ))}

            {/* Add Another Option Button */}
            <TouchableOpacity 
              style={styles.addOptionButton}
              onPress={addOption}
            >
              <Text style={styles.addOptionText}>Add another option</Text>
              <View style={styles.addIconContainer}>
                <Ionicons name="add" size={WP(5)} color={colors.textPrimary} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Settings */}
          <Text style={styles.settingsTitle}>Settings</Text>
          
          <View style={styles.settingsContainer}>
            {/* People Added */}
            <View style={styles.settingCard}>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>People Added</Text>
                <Text style={styles.settingDescription}>Invite people to answer</Text>
                
                <View style={styles.peopleContainer}>
                  {people.map((person, index) => (
                    <Image 
                      key={person.id}
                      source={person.image}
                      style={[
                        styles.personImage,
                        { marginLeft: index > 0 ? -WP(3) : 0 }
                      ]}
                    />
                  ))}
                  <View style={styles.morePersonBadge}>
                    <Text style={styles.morePersonText}>13+</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Privacy */}
            <View style={styles.settingCard}>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Privacy</Text>
                <Text style={styles.settingDescription}>Let users answer anonymously</Text>
              </View>
              <View style={styles.switchContainer}>
                <Switch
                  trackColor={{ false: '#3e3e3e', true: 'rgba(38, 166, 154, 0.4)' }}
                  thumbColor={isAnonymous ? colors.primary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={setIsAnonymous}
                  value={isAnonymous}
                />
              </View>
            </View>

            {/* Reports */}
            <View style={styles.settingCard}>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Reports</Text>
                <Text style={styles.settingDescription}>Send users notifications of responses</Text>
              </View>
              <View style={styles.switchContainer}>
                <Switch
                  trackColor={{ false: '#3e3e3e', true: 'rgba(38, 166, 154, 0.4)' }}
                  thumbColor={sendReports ? colors.primary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={setSendReports}
                  value={sendReports}
                />
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Post Poll Button */}
        <TouchableOpacity 
          style={styles.postButton}
          onPress={handlePostPoll}
        >
          <Text style={styles.postButtonText}>Post Poll</Text>
        </TouchableOpacity>
    </View>
          </SafeAreaView>
</SafeAreaProvider>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: HP(10),
  },
  pollContainer: {
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    borderRadius: WP(3),
    marginHorizontal: WP(5),
    marginVertical: HP(2),
    padding: WP(5),
  },
  questionInput: {
    color: colors.textPrimary,
    fontSize: WP(5),
    fontWeight: 'bold',
    marginBottom: HP(3),
  },
  optionInput: {
    backgroundColor: 'rgba(20, 20, 20, 0.8)',
    borderRadius: WP(3),
    padding: WP(4),
    color: colors.textPrimary,
    fontSize: WP(4),
    marginBottom: HP(2),
  },
  addOptionButton: {
    backgroundColor: 'rgba(20, 20, 20, 0.8)',
    borderRadius: WP(3),
    padding: WP(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addOptionText: {
    color: '#8A8A8A',
    fontSize: WP(4),
  },
  addIconContainer: {
    width: WP(8),
    height: WP(8),
    borderRadius: WP(4),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsTitle: {
    color: colors.textPrimary,
    fontSize: WP(5),
    fontWeight: 'bold',
    marginHorizontal: WP(5),
    marginTop: HP(2),
    marginBottom: HP(1),
  },
  settingsContainer: {
    marginHorizontal: WP(5),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  settingCard: {
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    borderRadius: WP(3),
    padding: WP(4),
    width: '31%', // Adjusted to fit three cards in a row with spacing
    marginBottom: HP(2),
    height: HP(18), // Fixed height for all cards
    justifyContent: 'space-between',
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    color: colors.textPrimary,
    fontSize: WP(4),
    fontWeight: 'bold',
    marginBottom: HP(0.5),
  },
  settingDescription: {
    color: '#8A8A8A',
    fontSize: WP(3.2),
    marginBottom: HP(1),
  },
  peopleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: HP(1),
  },
  personImage: {
    width: WP(8),
    height: WP(8),
    borderRadius: WP(4),
    borderWidth: 1,
    borderColor: '#121212',
  },
  morePersonBadge: {
    width: WP(8),
    height: WP(8),
    borderRadius: WP(4),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -WP(3),
  },
  morePersonText: {
    color: '#000000',
    fontSize: WP(3),
    fontWeight: 'bold',
  },
  switchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: HP(1),
  },
  postButton: {
    backgroundColor: colors.primary,
    borderRadius: WP(3),
    padding: WP(4),
    marginHorizontal: WP(5),
    marginBottom: HP(3),
    alignItems: 'center',
  },
  postButtonText: {
    color: '#000000',
    fontSize: WP(4.5),
    fontWeight: 'bold',
  },
});

export default EditPoll;