import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { homeScreenStyles } from '../styles/homeScreenStyles';

interface ListItemProps {
  item: {
    code: string;
    label: string;
    amount: string;
    color: string;
  };
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <View style={homeScreenStyles.itemContainer}>
      <View style={homeScreenStyles.iconContainer}>
        <Text style={homeScreenStyles.iconText}>{item.code}</Text>
      </View>
      <Text style={homeScreenStyles.itemLabel}>{item.label}</Text>
      <Text style={[homeScreenStyles.itemAmount, { color: item.color }]}>{item.amount}</Text>
    </View>
  );
};
