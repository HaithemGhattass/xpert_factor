import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { useBordereauxForm } from '../hooks/useBordereauxForm';
import DateInput from '../components/DateInput';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Input } from '../components/TextInput';
const { height } = Dimensions.get('window');
type VerifyScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const BordereauxScreen: React.FC = () => {
  const navigation = useNavigation<VerifyScreenNavigationProp>();
  const {
    totalAmount,
    setTotalAmount,
    selectedYear,
    setSelectedYear,
    documentCount,
    incrementCount,
    decrementCount,
    date,
    isDatePickerOpen,
    closeDatePicker,
    setDate,
    flatListRef,
    years,
  } = useBordereauxForm();

useEffect(() => {
  const selectedYearIndex = years.findIndex((year) => year === selectedYear);
  if (flatListRef.current) {
    flatListRef.current.scrollToIndex({
      index: selectedYearIndex,
      animated: false,
      viewPosition: 1.5, 
    });
  }
}, [selectedYear]);

  const handleGoToForm = () => {
    navigation.navigate('BordoreauxForm', {
      totalAmount,
      date,
      selectedYear,
      documentCount,  
    });
  };
  const renderYear = ({ item }: { item: number }) => (
    <TouchableOpacity onPress={() => setSelectedYear(item)}>
      <Text style={[styles.yearText, item === selectedYear && styles.selectedYear]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Total amount</Text>
        <TextInput
          style={styles.input}
          value={totalAmount}
          onChangeText={setTotalAmount}
          keyboardType="numeric"
          
        />
      </View>
      <DateInput
        date={date}
        open={isDatePickerOpen}
        
        onConfirm={(date: Date) => {
          setDate(date);
          closeDatePicker();
        }}
        onCancel={closeDatePicker}
      />

      <View style={styles.horizontalContainer}>
        <View style={[styles.yearContainer, styles.flexItem]}>
          <Text style={styles.label}>Bordereau year</Text>
          <FlatList
            ref={flatListRef}
            data={years}
            keyExtractor={(item) => item.toString()}
            renderItem={renderYear}
            contentContainerStyle={styles.yearSelector}
            showsVerticalScrollIndicator={false}
            getItemLayout={(data, index) => ({
              length: 50,
              offset: 50 * index,
              index,
            })}
            onScrollToIndexFailed={(info) => {
              console.error('Scroll to index failed', info);
            }}
          />
        </View>

        <View style={[styles.counterContainer, styles.flexItem]}>
          <Text style={styles.label}>Documents number</Text>
          <View style={styles.counter}>
            <TouchableOpacity onPress={decrementCount} style={styles.counterButton}>
              <Text style={styles.counterText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.documentCount}>{documentCount}</Text>
            <TouchableOpacity onPress={incrementCount} style={styles.counterButton}>
              <Text style={styles.counterText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleGoToForm}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingTop: 80,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  inputContainer: {
    backgroundColor: '#f0f4ff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  yearContainer: {
    backgroundColor: '#f0f4ff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    height: 200,
  },
  yearSelector: {
    alignItems: 'center',
  },
  yearText: {
    color: '#999',
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  selectedYear: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  counterContainer: {
    backgroundColor: '#f0f4ff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  documentCount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  counterButton: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  flexItem: {
    flex: 1,
    marginHorizontal: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BordereauxScreen;
