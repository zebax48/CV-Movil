import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import OperationForm from './src/components/operationForm';
import styles from './src/styles/operationFormStyles';

export default function App() {
  const [resultado, setResultado] = useState(null);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Operaciones Aritméticas</Text>
        <OperationForm onResult={setResultado} />

        {resultado !== null && (
          <Text style={styles.result}>Resultado: {resultado}</Text>
        )}
      </View>
    </ScrollView>
  );
}