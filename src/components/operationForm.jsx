import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import styles from '../styles/operationFormStyles.jsx';

export default function OperationForm({ onResult }) {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');

  const calcular = (operador) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    let res;
    if (isNaN(num1) || isNaN(num2)) {
      res = 'Entradas inválidas';
    } else {
      switch (operador) {
        case 'sumar':
          res = num1 + num2;
          break;
        case 'restar':
          res = num1 - num2;
          break;
        case 'multiplicar':
          res = num1 * num2;
          break;
        case 'dividir':
          res = num2 !== 0 ? num1 / num2 : 'No se puede dividir entre 0';
          break;
        default:
          res = 'Operación no válida';
      }
    }
    onResult({
      num1,
      num2,
      operador,
      resultado: res
    });
  };

  return (
    <View style={{ width: '100%' }}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="#1"
          value={numero1}
          onChangeText={setNumero1}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="#2"
          value={numero2}
          onChangeText={setNumero2}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => calcular('sumar')}
          style={styles.operatorButton}>
          <Text style={styles.buttonText}>Sumar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => calcular('restar')}
          style={styles.operatorButton}>
          <Text style={styles.buttonText}>Restar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => calcular('multiplicar')}
          style={styles.operatorButton}>
          <Text style={styles.buttonText}>Multiplicar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => calcular('dividir')}
          style={styles.operatorButton}>
          <Text style={styles.buttonText}>Dividir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}