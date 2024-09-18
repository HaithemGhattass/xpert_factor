// components/DateInput.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';

interface DateInputProps {
  date: Date;
  open: boolean;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
}

const DateInput: React.FC<DateInputProps> = ({ date, open, onConfirm, onCancel }) => {
      const [isOpen, setisOpen] = useState(open);
    return <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setisOpen(!isOpen)}
    >
        <Text style={styles.label}>Bordereau date</Text>
        <Text style={styles.input}>{date.toDateString()}</Text>
        <DatePicker
            modal
            open={isOpen}
            date={date}
            mode='date'
            onConfirm={onConfirm}
            onCancel={onCancel} />
    </TouchableOpacity>;
};

const styles = StyleSheet.create({
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
});

export default DateInput;
