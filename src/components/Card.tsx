import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { homeScreenStyles } from '../styles/homeScreenStyles';

interface CardProps {
  title: string;
  amount: string;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({ title, amount, style }) => {
  return (
    <View style={[homeScreenStyles.card, style]}>
      <Text style={homeScreenStyles.cardText}>{title}</Text>
      {amount && <Text style={homeScreenStyles.cardAmount}>{amount}</Text>}
    </View>
  );
};
