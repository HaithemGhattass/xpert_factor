import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, SafeAreaView } from 'react-native';
import { RootStackParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';

type BordoreauxFormRouteProp = RouteProp<RootStackParamList, 'BordoreauxForm'>;

interface BordereauxFormProps {
  route: BordoreauxFormRouteProp;
}

const BordoreauxFormScreen: React.FC<BordereauxFormProps> = ({ route }) => {
  const { totalAmount, date, selectedYear, documentCount } = route.params;
  const [progress, setProgress] = useState(1);
  const [documentsData, setDocumentsData] = useState<any[]>([]);
  const [documentType, setDocumentType] = useState('Facture');
  const [paymentMode, setPaymentMode] = useState('Traite');
  const [documentRef, setDocumentRef] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [documentDate, setDocumentDate] = useState('');
  const [amount, setAmount] = useState('');
  type VerifyScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BordoreauxForm'>;
  const navigation = useNavigation<VerifyScreenNavigationProp>();


  const handleDocumentTypeChange = (type: string) => setDocumentType(type);
  const handlePaymentModeChange = (mode: string) => setPaymentMode(mode);

  const handleNext = () => {
    // Save the current document data
    const newDocument = {
      documentType,
      paymentMode,
      documentRef,
      dueDate,
      documentDate,
      amount,
    };

    // Update documents array
    setDocumentsData((prev) => [...prev, newDocument]);

    // Increment progress
    if (progress < documentCount) {
      setProgress(progress + 1);
      // Clear form fields for next document entry
      setDocumentType('Facture');
      setPaymentMode('Traite');
      setDocumentRef('');
      setDueDate('');
      setDocumentDate('');
      setAmount('');
    } else {
      const allDocuments = [...documentsData, newDocument]; // Manually append the new document to the previous ones
    console.log('All documents:', allDocuments);
    navigation.navigate('Congratulations');

    }
  };

  return (
   <SafeAreaView style={styles.safeAreaContainer}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {/* Progress Section */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>{progress}/{documentCount} documents completed</Text>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: `${(progress / documentCount) * 100}%` }]} />
          </View>
        </View>

        {/* Document Form */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Type of document</Text>
          <View style={styles.documentTypeContainer}>
            <TouchableOpacity
              style={[styles.documentTypeButton, documentType === 'Facture' && styles.activeButton]}
              onPress={() => handleDocumentTypeChange('Facture')}
            >
              <Text style={styles.buttonText}>Facture</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.documentTypeButton, documentType === 'Bon de commande' && styles.activeButton]}
              onPress={() => handleDocumentTypeChange('Bon de commande')}
            >
              <Text style={styles.buttonText}>Bon de commande</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.documentTypeButton, documentType === 'Marche' && styles.activeButton]}
              onPress={() => handleDocumentTypeChange('Marche')}
            >
              <Text style={styles.buttonText}>Marche</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Inputs */}
        <View style={styles.section}>
          <TextInput
            style={styles.input}
            placeholder="Document Ref"
            value={documentRef}
            onChangeText={setDocumentRef}
          />
          <TextInput
            style={styles.input}
            placeholder="Due Date"
            value={dueDate}
            onChangeText={setDueDate}
          />
          <TextInput
            style={styles.input}
            placeholder="Document Date"
            value={documentDate}
            onChangeText={setDocumentDate}
          />
          <TextInput
            style={styles.input}
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
        </View>

        {/* Payment Mode Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mode of Payment</Text>
          <View style={styles.paymentModeContainer}>
            <TouchableOpacity
              style={[styles.paymentModeButton, paymentMode === 'Traite' && styles.activeButton]}
              onPress={() => handlePaymentModeChange('Traite')}
            >
              <Text style={styles.buttonText}>Traite</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.paymentModeButton, paymentMode === 'Virement' && styles.activeButton]}
              onPress={() => handlePaymentModeChange('Virement')}
            >
              <Text style={styles.buttonText}>Virement</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.paymentModeButton, paymentMode === 'Cheque' && styles.activeButton]}
              onPress={() => handlePaymentModeChange('Cheque')}
            >
              <Text style={styles.buttonText}>Cheque</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 110,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    color: '#333',
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginVertical: 10,
  },
  progressBarFill: {
    height: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  documentTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  documentTypeButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#007BFF',
  },
  paymentModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  paymentModeButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BordoreauxFormScreen;
