// ChatDetailScreen.js
import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';
import { useNavigation, useRoute } from '@react-navigation/native';

// Import vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { conversation } = route.params;
  const [message, setMessage] = useState('');
  const flatListRef = useRef(null);

  // Initialize messages based on the contact
  const [messages, setMessages] = useState(() => {
    // Only show predefined messages for Suhana Khan
    if (conversation.name === 'Suhana Khan') {
      return [
        {
          id: '1',
          text: 'Hello, Suhana',
          sender: 'me',
          time: '2 minutes',
        },
        {
          id: '2',
          text: 'Hi, Arnov how are you? What are you doing?',
          sender: 'other',
          time: '2 minutes',
        },
        {
          id: '3',
          text: 'Yeap, I\'m fine. Thank you. I want to meet you today 😊.',
          sender: 'me',
          time: '2 minutes',
        },
        {
          id: '4',
          text: 'Alright, now I\'m on my way',
          sender: 'other',
          time: '2 minutes',
        },
        {
          id: '5',
          text: 'Good, See you',
          sender: 'me',
          time: '2 minutes',
        },
        {
          id: '6',
          text: 'Okay 😊',
          sender: 'other',
          time: '2 minutes',
        },
      ];
    } else {
      // Empty chat for all other contacts
      return [];
    }
  });

  // Scroll to bottom when messages change
  useEffect(() => {
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const sendMessage = () => {
    if (message.trim() === '') return;

    const newMessage = {
      id: (messages.length + 1).toString(),
      text: message,
      sender: 'me',
      time: '2 minutes',
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const renderMessage = ({ item }) => {
    const isMe = item.sender === 'me';
    
    return (
      <View style={[
        styles.messageContainer,
        isMe ? styles.myMessageContainer : styles.otherMessageContainer
      ]}>
        <View style={[
          styles.messageBubble,
          isMe ? styles.myMessageBubble : styles.otherMessageBubble
        ]}>
          <Text style={[
            styles.messageText,
            isMe ? styles.myMessageText : styles.otherMessageText
          ]}>
            {item.text}
          </Text>
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
      </View>
    );
  };

  // Empty chat component
  const EmptyChat = () => (
    <View style={styles.emptyChatContainer}>
      <Text style={styles.emptyChatText}>No messages yet</Text>
      <Text style={styles.emptyChatSubText}>Start a conversation with {conversation.name}</Text>
    </View>
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
          
          <View style={styles.profileContainer}>
            <Image source={conversation.avatar} style={styles.profileImage} />
            <Text style={styles.profileName}>{conversation.name}</Text>
          </View>
          
          <View style={styles.headerRight} />
        </View>

        {/* Messages */}
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          contentContainerStyle={[
            styles.messagesList,
            messages.length === 0 && styles.emptyList
          ]}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={EmptyChat}
        />

        {/* Message Input */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
          <View style={styles.inputContainer}>
            <View style={styles.inputActions}>
              <TouchableOpacity style={styles.inputActionButton}>
                <Ionicons name="camera-outline" size={WP(6)} color={colors.primary} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputActionButton}>
                <Feather name="image" size={WP(6)} color={colors.primary} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.gifButton}>
                <Text style={styles.gifText}>GIF</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Aa..."
                placeholderTextColor="#8A8A8A"
                value={message}
                onChangeText={setMessage}
                multiline
              />
              <TouchableOpacity style={styles.emojiButton}>
                <MaterialCommunityIcons name="emoticon-outline" size={WP(6)} color={colors.primary} />
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity 
              style={[
                styles.sendButton,
                message.trim() === '' ? styles.sendButtonDisabled : {}
              ]}
              onPress={sendMessage}
              disabled={message.trim() === ''}
            >
              <Ionicons name="send" size={WP(5)} color={colors.onPrimary} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
    paddingVertical: HP(2),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButton: {
    width: WP(10),
    height: WP(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: WP(10),
    height: WP(10),
    borderRadius: WP(5),
    marginRight: WP(3),
  },
  profileName: {
    color: colors.textPrimary,
    fontSize: WP(4.5),
    fontWeight: 'bold',
  },
  headerRight: {
    width: WP(10),
  },
  messagesList: {
    paddingHorizontal: WP(5),
    paddingVertical: HP(2),
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyChatContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: WP(5),
  },
  emptyChatText: {
    color: colors.textPrimary,
    fontSize: WP(5),
    fontWeight: 'bold',
    marginBottom: HP(1),
  },
  emptyChatSubText: {
    color: '#AAAAAA',
    fontSize: WP(4),
    textAlign: 'center',
  },
  messageContainer: {
    marginBottom: HP(2),
    maxWidth: '80%',
  },
  myMessageContainer: {
    alignSelf: 'flex-end',
  },
  otherMessageContainer: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    borderRadius: WP(4),
    padding: WP(4),
  },
  myMessageBubble: {
    backgroundColor: colors.primary,
  },
  otherMessageBubble: {
    backgroundColor: 'rgba(50, 50, 50, 0.8)',
  },
  messageText: {
    fontSize: WP(4),
    marginBottom: HP(0.5),
  },
  myMessageText: {
    color: colors.onPrimary,
  },
  otherMessageText: {
    color: colors.textPrimary,
  },
  messageTime: {
    fontSize: WP(3),
    color: 'rgba(255, 255, 255, 0.6)',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WP(5),
    paddingVertical: HP(2),
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  inputActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: WP(2),
  },
  inputActionButton: {
    marginRight: WP(2),
  },
  gifButton: {
    backgroundColor: 'rgba(50, 50, 50, 0.8)',
    paddingHorizontal: WP(2),
    paddingVertical: WP(1),
    borderRadius: WP(2),
    marginRight: WP(2),
  },
  gifText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(50, 50, 50, 0.8)',
    borderRadius: WP(5),
    paddingHorizontal: WP(3),
    marginRight: WP(2),
  },
  textInput: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: WP(4),
    maxHeight: HP(10),
    paddingVertical: HP(1),
  },
  emojiButton: {
    padding: WP(2),
  },
  sendButton: {
    backgroundColor: colors.primary,
    width: WP(12),
    height: WP(12),
    borderRadius: WP(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.7,
  },
});

export default ChatDetailScreen;