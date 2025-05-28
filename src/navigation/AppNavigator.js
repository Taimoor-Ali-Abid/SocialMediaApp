import React, { useEffect, useRef, useState } from "react";
import { StatusBar, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens (your imports)
import Onboarding from "../screens/onboardingscreen/Onboarding";
import OnboardingsScreen from "../screens/onboardingscreen/Onboardingscreen";
import SignIn from "../screens/signinscreen/SignIn";
import RegisterScreen from "../screens/registerScreen/RegisterScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import MenuScreen from "../screens/MenuScreen/MenuScreen";
import CreatePost from "../screens/CreatePost/CreatePost";
import Calendar from "../screens/Calendar/Calendar";
import ArticlesScreen from "../screens/ArticleScreen/ArticleScreen";
import CoursesScreen from "../screens/CoursesScreen/CoursesScreen";
import CourseDetailScreen from "../screens/CoursesScreen/CoursesDetailsScreen";
import EBooksScreen from "../screens/eBooks/Ebooks";
import EBookDetailScreen from "../screens/eBooks/EBooksDetailsScreen";
import EditPoll from "../screens/EditPoll/EditPoll";
import FlavorfulMealsScreen from "../screens/FavouriteMeals/FavouriteMeal";
import WorkoutsScreen from "../screens/WorkoutScreen/WorkoutScreen";
import WorkoutDetails from "../screens/WorkoutScreen/WorkoutDetails";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import MessagesScreen from "../screens/MessageScreen/Messagescreen";
import ChatDetailScreen from "../screens/MessageScreen/ChatDetails";
import Courses from "../screens/CoursesScreen/Courses";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const navigationRef = useRef();
  const [statusBarHidden, setStatusBarHidden] = useState(false);

  // Define the routes where status bar should be hidden
  const fullScreenRoutes = ["SplashScreen", "Onboarding", "OnboardingsScreen","SignIn", "Register","Home", "Menu", "CreatePost", "Calendar", "Articles", "CoursesScreen", "CourseDetailScreen", "EBooksScreen", "EBookDetailScreen", "EditPoll", "FlavorfulMealsScreen", "WorkoutsScreen", "WorkoutDetails", "ProfileScreen", "MessagesScreen", "ChatDetailScreen"];

  const handleRouteChange = () => {
    const routeName = navigationRef.current?.getCurrentRoute()?.name;
    setStatusBarHidden(fullScreenRoutes.includes(routeName));
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={handleRouteChange}
      onStateChange={handleRouteChange}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#121212"
        hidden={statusBarHidden}
        animated={true}
      ></StatusBar>

      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingsScreen" component={OnboardingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{
          headerShown: false,
          presentation: 'containedTransparentModal',
          animation: 'slide_from_left',
          contentStyle: { backgroundColor: 'transparent' }
        }} />
        <Stack.Screen name="CreatePost" component={CreatePost} options={{ headerShown: false }} />
        <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }} />
        <Stack.Screen name="Articles" component={ArticlesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CoursesScreen" component={CoursesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CourseDetailScreen" component={CourseDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EBooksScreen" component={EBooksScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EBookDetailScreen" component={EBookDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditPoll" component={EditPoll} options={{ headerShown: false }} />
        <Stack.Screen name="FlavorfulMealsScreen" component={FlavorfulMealsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WorkoutsScreen" component={WorkoutsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WorkoutDetails" component={WorkoutDetails} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MessagesScreen" component={MessagesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Courses" component={Courses} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
