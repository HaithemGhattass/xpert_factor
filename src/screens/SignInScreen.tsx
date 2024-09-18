import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useSignIn } from '../hooks/useSignIn';
import { Input } from '../components/TextInput';
import { Button } from '../components/Button';
import { TextLink } from '../components/TextLink';
import { signInScreenStyles } from '../styles/signInScreenStyles'; 

const SignInScreen: React.FC = () => {
  const { email, setEmail, password, setPassword, handleSignIn, handleForgotPassword } = useSignIn();

  return (
    <SafeAreaView style={signInScreenStyles.safeAreaContainer}>
      <Text style={signInScreenStyles.title}>Sign into your account</Text>
      <View style={signInScreenStyles.centeredContainer}>
        <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <Button title="Sign In" onPress={handleSignIn} />
        <Text style={signInScreenStyles.forgotPasswordHint}>Have you forgotten your password?</Text>
        <TextLink text="Click here to recover it" onPress={handleForgotPassword} />
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
