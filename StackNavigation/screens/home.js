import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Home</Text>

      <Button
        title="Ir a Perfil"
        onPress={() => navigation.navigate('Profile')}
      />

      <Button
        title="Ir a Configuración"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },

  // BOTONES
  btnPurple: {
    backgroundColor: '#800e8dff',
    padding: 14,
    width: 200,
    borderRadius: 10,
    marginBottom: 15,
  },

  btnBlue: {
    backgroundColor: '#3587abff',
    padding: 14,
    width: 200,
    borderRadius: 10,
    marginBottom: 15,
  },

  btnText: {
    color: '#fef7f7ff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});