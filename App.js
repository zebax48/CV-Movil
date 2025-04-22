import React, { useState } from 'react';
import { Text, TextInput, Button, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumarNumeros = (operador) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    let res;
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
          if (num2 !== 0) {
            res = num1 / num2;
          } else {
            res = 'No se puede dividir entre 0';
          }
          break;
        default:
          res = 'Operación no válida';
      }
      setResultado(res);
  };

  return (
    <ScrollView>
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

    

      <Button onPress={() => sumarNumeros('sumar')} title="Sumar" />


      <TouchableOpacity onPress={() => sumarNumeros('sumar')}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/134/134827.png' }}
          /*source={require('./assets/plus.png')}*/
          style={styles.operatorImage}
        />
      </TouchableOpacity>

      {resultado !== null && (
        <Text style={styles.result}>Resultado: {resultado}</Text>
      )}
    </View>
    </ScrollView>
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
  operatorImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'green',
  },
});