import { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App'; 

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

export const useSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<SignInScreenNavigationProp>();

  const handleSignIn = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
    handleForgotPassword,
  };
};
