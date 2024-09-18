import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen'; // Make sure HomeScreen is created
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import VerifyScreen from './screens/VerifyScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useShouldShowButtonSheet from './hooks/useShouldShowButtonSheet';
import ButtonSheet from './navigators/ButtonSheet';
import { StyleSheet, View } from 'react-native';
import BordoreauxScreen from './screens/BordoreauxScreen'
import BordoreauxFormScreen from './screens/BordoreauxForm';
import CongratulationsScreen from './screens/CongratulationScreen';
import ProfileScreen from './screens/ProfileScreen';
import MyAccountScreen from './screens/MyAccountScreen';
import SettingsScreen from './screens/SettingsScreens';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import OnboardingScreen from './screens/OnBoardingScreen';

// Inside the Stack.Navigator

export type RootStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  Home: undefined;
  ForgotPassword: undefined;
  VerifyScreen: undefined;
  Bordoreaux: undefined;
  Congratulations: undefined;
  Profile: undefined;
  MyAccount: undefined;
  Settings: undefined;
  ResetPassword: undefined;
  Notifications: undefined;
  BordoreauxForm: {
    totalAmount: string;
    date: Date;
    selectedYear: number;
    documentCount: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
          <Stack.Screen name="VerifyScreen" component={VerifyScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Bordoreaux" component={BordoreauxScreen} options={{ headerShown: false }} />
          <Stack.Screen name="BordoreauxForm" component={BordoreauxFormScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Congratulations" component={CongratulationsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MyAccount" component={MyAccountScreen} options={{  title: 'My Account' }} />
          <Stack.Screen  name="Settings" component={SettingsScreen} options={{  title: 'General' }} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ title: 'Password' }} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Notifications' }} />

        </Stack.Navigator>
        <ConditionalButtonSheet />
      </View>
    </NavigationContainer>
  );
};

const ConditionalButtonSheet: React.FC = () => {
  const showButtonSheet = useShouldShowButtonSheet();

  return showButtonSheet ? <ButtonSheet /> : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
