// Importamos las librerías necesarias desde React y React Native
import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

// Exportamos el componente principal de la app
export default function App() {

  // Creamos una variable de estado para controlar si el modal está visible o no
  const [modalVisible, setModalVisible] = useState(false); 

  // Función que muestra el modal (cambia el estado a true)
  const abrirModal = () => {
    setModalVisible(true);
  };

  // Función que cierra el modal (cambia el estado a false)
  const cerrarModal = () => {
    setModalVisible(false);
  };

  // Aquí va toda la parte visual que se renderiza en pantalla
  return (
    <View style={styles.container}>
      {/* Título principal */}
      <Text style={styles.title}>Ejemplo del componente Modal</Text>

      {/* Botón que al presionar abre el modal */}
      <Button title="Abrir Modal" onPress={abrirModal} /> 

      {/* Componente Modal */}
      <Modal 
        animationType="fade"          // Tipo de animación (aparece/desaparece con un efecto de desvanecido)
        transparent={true}            // Hace que el fondo sea semitransparente
        visible={modalVisible}        // Controla si el modal se muestra o no
        onRequestClose={cerrarModal}  // Se ejecuta al intentar cerrar el modal (botón atrás en Android)
      >

        {/* Fondo oscuro y centrado del modal */}
        <View style={styles.modalContainer}>

          {/* Cuadro blanco del modal */}
          <View style={styles.modalView}>
            {/* Texto dentro del modal */}
            <Text style={styles.modalText}>¡Hola! Este es un Modal.</Text>

            {/* Botón que cierra el modal */}
            <Button title="Cerrar" onPress={cerrarModal} /> 
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Estilos visuales del componente
const styles = StyleSheet.create({
  container: {
    flex: 1,                      // Ocupa toda la pantalla
    alignItems: 'center',         // Centra el contenido horizontalmente
    justifyContent: 'center',     // Centra el contenido verticalmente
    backgroundColor: '#EAEAEA',   // Fondo gris claro
  },
  title: {
    fontSize: 20,                 // Tamaño del texto
    fontWeight: 'bold',           // Texto en negritas
    marginBottom: 20,             // Espacio debajo del título
  },
  modalContainer: {
    flex: 1,                      
    justifyContent: 'center',     // Centra el modal en vertical
    backgroundColor: 'rgba(0,0,0,0.4)', // Fondo oscuro semitransparente
  },
  modalView: {
    margin: 20,                   // Espacio alrededor del modal
    backgroundColor: 'white',     // Fondo blanco
    borderRadius: 15,             // Bordes redondeados
    padding: 35,                  // Espacio interno
    alignItems: 'center',         // Centra el contenido dentro
    shadowColor: '#000',          // Sombra negra
    shadowOpacity: 0.25,          // Opacidad de la sombra
    shadowRadius: 4,              // Tamaño de la sombra
    elevation: 5,                 // Sombra visible en Android
  },
  modalText: {
    marginBottom: 15,             // Espacio debajo del texto
    fontSize: 16,                 // Tamaño del texto del modal
  },
});
