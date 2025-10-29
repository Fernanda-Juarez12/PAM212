import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native-web';


export default function ActivityIndicatorScreen() {


const [cargando, setCargando] = useState(false);
const iniciarCarga = () => {setCargando(true);setTimeout(() => setCargando(false), 3000);};
const detenerCarga = () => { setCargando(false);};

return (
    <View style={styles.container}>
        <Text style={styles.texto}>Práctica: Activity Indicator</Text>


        <View style={styles.boton}>
        <Button color = '#8cd7a5ff'
            title={cargando ? 'Cargando...' : 'Iniciar carga'}
            onPress={iniciarCarga}
        />
        </View>


        <View style={styles.boton}>
        <Button color = '#ee3e3eff'
            title="Detener carga" onPress={detenerCarga} />
        </View>


        <View style={styles.carga}>
        <ActivityIndicator
            size="large"
            color="#da38c4ff"
            animating={cargando}          
            hidesWhenStopped={true}      
        />

        <Text style={styles.textoCarga}>
            {cargando ? 'Cargando datos...' : 'Presiona el botón verde :)'}
        </Text>
        </View>
    </View>
    );
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f5d8d8ff',
    alignItems: 'center',
    justifyContent: 'center',
},
texto: {
    color: "#1d0b0bff",
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    marginBottom: 20,
},
boton: {
    width: 220,
    marginBottom: 16,
},
carga: {
    alignItems: 'center',
    marginTop: 20,
},
textoCarga: {
    marginTop: 12,
    fontSize: 16,
    color: '#000000',
},
});