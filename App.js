import React, { useState } from 'react';
import { Text, TextInput, Button, View, ScrollView } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumarNumeros = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResultado(num1 + num2);
    } else {
      setResultado('Por favor ingrese números válidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Suma de dos números</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingresa el primer número"
        value={numero1}
        onChangeText={setNumero1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingresa el segundo número"
        value={numero2}
        onChangeText={setNumero2}
      />
      <Button onPress={sumarNumeros} title="Sumar" />
      {resultado !== null && (
        <Text style={styles.result}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingLeft: 10,
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
