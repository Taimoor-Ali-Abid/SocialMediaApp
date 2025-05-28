import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image,
  Pressable
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/color';
import { WP, HP } from '../../utils/pixelresponsive';
import LogoScoialMedia from '../../assets/images/png/LogoScoialMedia.png'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={colors.gradient.colors}
      start={colors.gradient.start}
      end={colors.gradient.end}
      style={styles.container}
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
            source={LogoScoialMedia}
            style={styles.logo}
            resizeMode="contain" 
        />
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Hello, Welcome Back!</Text>
      <Text style={styles.subText}>Enter your information below</Text>

      {/* Form */}
      <View style={styles.formContainer}>
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

        {/* Password Input */}
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="••••••••••••"
            placeholderTextColor={colors.placeholder}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity 
            style={styles.eyeIcon} 
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.eyeIconText}>👁️</Text>
          </TouchableOpacity>
        </View>

        {/* Remember Me & Forgot Password */}
        <View style={styles.rememberForgotContainer}>
          <TouchableOpacity 
            style={styles.rememberContainer} 
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
              {rememberMe && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.rememberText}>Remember Me</Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Or Login with */}
        <Text style={styles.orLoginText}>Or Login with</Text>

        {/* Social Login Buttons (without icons as requested) */}
       <View style={styles.socialButtonsContainer}>
  <TouchableOpacity style={styles.socialButton}>
    <FontAwesome name="google" size={WP(6)} color="#DB4437" style={styles.socialIcon} />
  </TouchableOpacity>
  <TouchableOpacity style={styles.socialButton}>
    <FontAwesome name="facebook" size={WP(6)} color="#4267B2" style={styles.socialIcon} />
  </TouchableOpacity>
  <TouchableOpacity style={styles.socialButton}>
    <FontAwesome name="apple" size={WP(6)} color="#ffffff" style={styles.socialIcon} />
  </TouchableOpacity>
</View>


        {/* Register */}
        <View style={styles.registerContainer}>
          <Text style={styles.noAccountText}>Didn't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignIn;

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
  eyeIcon: {
    padding: WP(4),
  },
  eyeIconText: {
    color: colors.textPrimary,
    fontSize: WP(5),
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: HP(3),
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  rememberText: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
  },
  forgotText: {
    color: colors.primary,
    fontSize: WP(3.5),
  },
  loginButton: {
    backgroundColor: colors.primary,
    borderRadius: WP(2),
    padding: WP(4),
    alignItems: 'center',
    marginBottom: HP(3),
  },
  loginButtonText: {
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
  socialIcon: {
    alignSelf: 'center',
    marginTop: HP(1),
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  noAccountText: {
    color: colors.textPrimary,
    fontSize: WP(3.5),
  },
  registerText: {
    color: colors.primary,
    fontSize: WP(3.5),
  },
});