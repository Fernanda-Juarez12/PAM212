import React from 'react';
import {
  View,
  Text,
  FlatList,
  SectionList,
  StyleSheet,
} from 'react-native';

//  Datos para la FlatList
const alumnos = [
  { id: '1', nombre: 'Feer' },
  { id: '2', nombre: 'Soong Yoong Ki' },
  { id: '3', nombre: 'Shawn Mendes' },
  { id: '4', nombre: 'La arrolladora' },
  { id: '5', nombre: 'Banda Carnaval' },
];

// Datos para la SectionList
const categorias = [
  {
    titulo: 'Primavera',
    data: ['Marzo', 'Abril', 'Mayo'],
  },
  {
    titulo: 'Verano',
    data: ['Junio', 'Julio', 'Agosto'],
  },
  {
    titulo: 'Otoño',
    data: ['Septiembre', 'Octubre', 'Noviembre'],
  },
  {
    titulo: 'Invierno',
    data: ['Diciembre', 'Enero', 'Febrero'],
  },
];

export default function FlatListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejemplo de FlatList</Text>

      <FlatList
        data={alumnos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.itemText}>* {item.nombre}</Text>
          </View>
        )}
      />

      <Text style={styles.title}>Ejemplo de SectionList</Text>

      <SectionList
        sections={categorias}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>• {item}</Text>
        )}
        renderSectionHeader={({ section: { titulo } }) => (
          <Text style={styles.sectionHeader}>{titulo}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    color: '#f9aff4ff',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  itemBox: {
    backgroundColor: '#a268faff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  itemText: {
    color: '#fff1f1ff',
    fontSize: 16,
  },
  sectionHeader: {
    color: '#98cef2ff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
});