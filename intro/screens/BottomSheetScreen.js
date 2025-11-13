// Importamos los módulos necesarios de React y React Native
import React, { useRef, useMemo } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

// Importamos el componente BottomSheet y su vista interna
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

// Importamos el contenedor necesario para manejar gestos
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  // Creamos una referencia para controlar el BottomSheet
  const bottomSheetRef = useRef(null);

  // Definimos los puntos a los que se puede mover el BottomSheet (altura)
  const snapPoints = useMemo(() => [1, "25%", "50%"]);

  // Función que abre el BottomSheet cuando se presiona el botón
  const handleOpenSheet = () => {
    bottomSheetRef.current?.expand();
  };

  // Estructura visual de la app
  return (
    // Este contenedor permite que funcionen los gestos
    <GestureHandlerRootView>
      {/* Vista principal */}
      <View style={styles.container}>
        <Button title="Boton abrir" onPress={handleOpenSheet} />
      </View>

      {/* Componente BottomSheet (panel deslizable desde abajo) */}
      <BottomSheet
        ref={bottomSheetRef} // Conectamos la referencia
        snapPoints={snapPoints} // Alturas posibles del panel
        enablePanDownToClose={true} // Permite cerrarlo deslizando hacia abajo
        backgroundStyle={styles.BSheet} // Estilo del fondo
      >
        {/* Contenido que va dentro del BottomSheet */}
        <BottomSheetView style={styles.BView}>
          <Text>BottomSheet ejemplo</Text>
          <Image
            style={styles.IMG}
            source={{
              uri: 'https://imgs.search.brave.com/LPSJcpbXZadTVSDBye2DacITglVdOhdM1KAjB4v1Z5s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzA0LzMwLzgy/LzM2MF9GXzgwNDMw/ODI2Nl9ZeXdZY2xm/RjdhaG05UjZ2dDBV/ZGJpcUFhbEN6WTA1/ei5qcGc'
            }}
          />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

// Estilos de la aplicación
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3d3535ff", // Fondo gris oscuro
    alignItems: "center",
    justifyContent: "center",
  },
  BSheet: {
    backgroundColor: '#e7dedeff' // Fondo del BottomSheet
  },
  BView: {
    flex: 1,
    alignItems: 'center' // Centra el contenido del BottomSheet
  },
  IMG: {
    marginTop: 50,
    width: 200,
    height: 200 // Tamaño de la imagen
  }
});
