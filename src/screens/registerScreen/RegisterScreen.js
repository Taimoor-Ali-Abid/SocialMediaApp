import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';
import { useNavigation } from '@react-navigation/native';
import LogoScoialMedia from '../../assets/images/png/LogoScoialMedia.png';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRobot, setIsRobot] = useState(true);
    const navigation = useNavigation();
  return (
    <LinearGradient
      colors={colors.gradient.colors}
      start={colors.gradient.start}
      end={colors.gradient.end}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={LogoScoialMedia}
            style={styles.logo}
            resizeMode="contain"
          
          />
        </View>

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Register Now!</Text>
        <Text style={styles.subText}>Enter your information below</Text>

        {/* Form */}
        <View style={styles.formContainer}>
          {/* Name Input */}
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor={colors.placeholder}
            value={name}
            onChangeText={setName}
          />

          {/* Username Input */}
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="username"
            placeholderTextColor={colors.placeholder}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          {/* Email Input */}
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email@example.com"
            placeholderTextColor={colors.placeholder}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Upload Image */}
          <Text style={styles.inputLabel}>Upload Image</Text>
          <View style={styles.uploadContainer}>
            <View style={styles.chooseFileContainer}>
              <Text style={styles.chooseFileText}>Choose file</Text>
            </View>
            <TouchableOpacity style={styles.uploadButton}>
              <Text style={styles.uploadButtonText}>Upload</Text>
            </TouchableOpacity>
          </View>

          {/* Password Input */}
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••••••"
            placeholderTextColor={colors.placeholder}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          {/* Confirm Password Input */}
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="••••••••••••"
              placeholderTextColor={colors.placeholder}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showPassword}
            />
           
          </View>

          {/* I'm not a robot */}
          <TouchableOpacity 
            style={styles.robotContainer} 
            onPress={() => setIsRobot(!isRobot)}
          >
            <View style={[styles.checkbox, !isRobot && styles.checkboxChecked]}>
              {!isRobot && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.robotText}>I'm not a robot</Text>
            
          </TouchableOpacity>

          {/* Register Button */}
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity >
            

          {/* Or Login with */}
          <Text style={styles.orLoginText}>Or Login with</Text>

          {/* Social Login Buttons (without icons as requested) */}
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton} />
            <TouchableOpacity style={styles.socialButton} />
            <TouchableOpacity style={styles.socialButton} />
          </View>

          {/* Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.haveAccountText}>Didn't Have an Account? </Text>
            <TouchableOpacity>
              <Text style={styles.loginText}>Register Now</Text>
            </TouchableOpacity>
          </View>
          

        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: WP(5),
  },
  logoContainer: {
    alignSelf: 'flex-start',
    marginTop: HP(5),
    marginBottom: HP(2),
  },
  logoText: {
    fontSize: WP(10),
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  welcomeText: {
    fontSize: WP(7),
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: HP(0.5),
  },
  subText: {
    fontSize: WP(4),
    color: colors.textSecondary,
    opacity: 0.7,
    marginBottom: HP(3),
  },
  formContainer: {
    width: '100%',
  },
  inputLabel: {
    color: colors.textPrimary,
    fontSize: WP(4),
    marginBottom: HP(1),
  },
  input: {
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    borderRadius: WP(2),
    padding: WP(4),
    color: colors.textPrimary,
    marginBottom: HP(2),
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: HP(2),
  },
  chooseFileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    borderRadius: WP(2),
    padding: WP(4),
    flex: 1,
    marginRight: WP(2),
  },
 
  chooseFileText: {
    color: colors.textPrimary,
  },
  uploadButton: {
    backgroundColor: colors.primary,
    borderRadius: WP(2),
    padding: WP(4),
    paddingHorizontal: WP(6),
  },
  uploadButtonText: {
    color: colors.onPrimary,
    fontWeight: 'bold',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    borderRadius: WP(2),
    marginBottom: HP(2),
  },
  passwordInput: {
    flex: 1,
    padding: WP(4),
    color: colors.textPrimary,
  },
  robotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: HP(3),
  },
  checkbox: {
    width: WP(5),
    height: WP(5),
    borderWidth: 1,
    borderColor: colors.divider,
    borderRadius: WP(1),
    marginRight: WP(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkmark: {
    color: colors.onPrimary,
    fontSize: WP(3),
  },
  robotText: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
    flex: 1,
  },
  registerButton: {
    backgroundColor: colors.primary,
    borderRadius: WP(2),
    padding: WP(4),
    alignItems: 'center',
    marginBottom: HP(3),
  },
  registerButtonText: {
    color: colors.onPrimary,
    fontSize: WP(4.5),
    fontWeight: 'bold',
  },
  orLoginText: {
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: HP(2),
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: HP(4),
  },
  socialButton: {
    width: WP(25),
    height: HP(6),
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    borderRadius: WP(2),
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: HP(2),
  },
  haveAccountText: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
  },
  loginText: {
    color: colors.primary,
    fontSize: WP(3.5),
  },
});