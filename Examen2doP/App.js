
import React from 'react';
import { ScrollView, StyleSheet, Text, View, SwitchButton, Button, Alert} from 'react-native-web';


const DATA = [
 {id:1},
 {id:2},
 {id:3},
]; 

const SimpleHeader = () => {
  return (
    <View style ={styles.header}>
      <Text style={styles.title}>SECCIONES</Text>
    </View>
  );
};


const SimpleScrollView = () => {
  return (
    <View>
      <SimpleHeader/>
      <ScrollView 
      showVerticalScrollIndicator={false}>

        {DATA.map(val => {
          return (
            <View style={styles.card} key = {val.id}>
              <Text style={styles.subtitle}>DEPORTES</Text>
            </View>
          );
        })}

        {DATA.map(val => {
          return (
            <View style={styles.card} key = {val.id}>
              <Text style={styles.subtitle}>ENTRETENIMIENTO</Text>
            </View>
          );
        })}

        
        {DATA.map(val => {
          return (
            <View style={styles.card} key = {val.id}>
              <Text style={styles.subtitle}>NOTICIAS</Text>
            </View>
          );
        })}
    </ScrollView>
  </View>

  )};




export default SimpleScrollView;

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: '#3b197eff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  title: {
    color: '#fff8f8ff',
    fontWeigt: 'bold',
    fontSize: 30,
  },
  card: {
    height: 100,
    backgroundColor: '#e9b6f5ff',
    marginTop: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  subtitle: {
    color: '#181D31',
    fontWeight: 'bold',
  },
});