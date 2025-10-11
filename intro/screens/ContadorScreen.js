// 1. Import: Zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

// 2. Main: Zona de Componentes
export default function App() {

  const[contador, setContador]=useState(0);

  return (

    <View style={styles.container}> 

      <Text style={styles.texto}> Contador: </Text>
      <Text style={styles.texto2}> {contador} </Text>

      <View style={styles.contenedorBotones}> 
      <Button color="#a35adfff"title="Incrementar" onPress={()=>setContador(contador+1)}/>
        <Button color="#E12AFB" title="Quitar" onPress={()=>setContador(contador-1)}/>
          <Button color="#21BCFF" title="Reiniciar" onPress={()=>setContador(contador-contador)}/>
      </View> 

      <StatusBar style="auto" />
      
    </View>
  );
}

// 3. Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9D4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
   color:'black',
   fontSize:30,
   fontFamily:'Bodoni',
   fontWeight:'bold',
   fontStyle:'italic',
   textDecorationLine:'Line-through',
  },

  texto2:{
   color:'black',
   fontSize:40,
   fontFamily:'Courier',
   fontWeight:'400',
   textDecorationLine:'Underline',
  },

  contenedorBotones:{
    marginTop:12,
    flexDirection:'column',
    gap:10
  }
});