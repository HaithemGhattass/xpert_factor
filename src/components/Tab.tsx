import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { homeScreenStyles } from '../styles/homeScreenStyles';

interface TabProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

export const Tab: React.FC<TabProps> = ({ title, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={[homeScreenStyles.tab, isActive && homeScreenStyles.activeTab]}
      onPress={onPress}
    >
      <Text style={homeScreenStyles.tabText}>{title}</Text>
    </TouchableOpacity>
  );
};
