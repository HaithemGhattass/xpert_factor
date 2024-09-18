import { StyleSheet } from 'react-native';

export const signInScreenStyles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1, 
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#007BFF',
  },
  centeredContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%', 
    paddingHorizontal: 20,
  },
  forgotPasswordHint: {
    marginBottom: 10,
  },
});
