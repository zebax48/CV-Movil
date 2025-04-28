import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import OperationForm from './src/components/operationForm';
import styles from './src/styles/operationFormStyles';

export default function App() {
  const [resultado, setResultado] = useState(null);
  const [historial, setHistorial] = useState([]);

  const manejarResultado = (data) => {
    setResultado(data.resultado);
    setHistorial(prev => [...prev, data]);
  };

  function getSimbolo(op) {
    switch (op) {
      case 'sumar': return '+';
      case 'restar': return '-';
      case 'multiplicar': return '×';
      case 'dividir': return '÷';
      default: return '?';
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Operaciones Aritméticas</Text>
        <OperationForm onResult={manejarResultado} />

        {resultado !== null && (
          <View>
            <Text style={styles.result}>Resultado: {resultado}</Text>
          </View>
        )}
      </View>
      {historial.length > 0 && (
        <View style={styles.historialContainer}>
          <Text style={styles.header}>Historial:</Text>
          {historial.map((item, index) => (
            <Text key={index}>
              #{index + 1}: {item.num1} {getSimbolo(item.operador)} {item.num2} = {item.resultado}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
}