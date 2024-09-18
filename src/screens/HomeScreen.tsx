import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import { useTabState } from '../hooks/useTabState';
import { homeScreenStyles } from '../styles/homeScreenStyles';
import { Card } from '../components/Card';
import { Tab } from '../components/Tab';
import { ListItem } from '../components/ListItem';

const availableData = [
  { id: '1', code: 'C', label: 'Current Invoices', amount: '4332,123', color: 'green' },
  { id: '2', code: 'G', label: 'Guarantee fund', amount: '9049,000', color: 'black' },
  { id: '3', code: 'R', label: 'Reserve fund', amount: '234,000', color: 'black' },
  { id: '4', code: 'O', label: 'Overshooting of buyer financing limits', amount: '3150,000', color: 'green' },
];

const available2Data = [
  { id: '1', code: 'X', label: 'Another Data 1', amount: '1000,000', color: 'black' },
  { id: '2', code: 'Y', label: 'Another Data 2', amount: '2000,000', color: 'black' },
];

const HomeScreen: React.FC = () => {
  const { selectedTab, setSelectedTab } = useTabState<'available' | 'available2'>('available');

  return (
    <SafeAreaView style={homeScreenStyles.safeAreaContainer}>
      {/* Top Cards */}
      <View style={homeScreenStyles.cardContainer}>
        <Card
          title="Contract N°: 001/2024"
          amount="138 516,647 TND"
        />
        <Card
          title="Another Card Info"
          amount=""
          style={homeScreenStyles.cardBlue}
        />
      </View>

      {/* Tabs */}
      <View style={homeScreenStyles.tabContainer}>
        <Tab
          title="Available"
          isActive={selectedTab === 'available'}
          onPress={() => setSelectedTab('available')}
        />
        <Tab
          title="Available 2"
          isActive={selectedTab === 'available2'}
          onPress={() => setSelectedTab('available2')}
        />
      </View>

      {/* List */}
      <FlatList
        data={selectedTab === 'available' ? availableData : available2Data}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
