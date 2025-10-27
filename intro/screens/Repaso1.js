import React, { useEffect, useRef, useState } from "react";
import {View, Text, TextInput, Alert, Button, StyleSheet, ImageBackground, Switch, Image, Animated, Dimensions, } from "react-native";

const { height } = Dimensions.get("window");

export default function Repaso1() {
  const [nombre, setNombre] = useState("");
  const [Correoelectronico, setCorreoelectronico] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [showMain, setShowMain] = useState(false); // controla el splash

  // Animaciones Splash
  const fadeLogo = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(0.5)).current;
  const rotateLogo = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(height / 2)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animación inicial del logo: fade + scale + rotación
    Animated.parallel([
      Animated.timing(fadeLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
      Animated.spring(scaleLogo, {
        toValue: 1,
        friction: 5,
        useNativeDriver: false,
      }),
      Animated.timing(rotateLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
    ]).start();

    // Animación del texto: slide + fade
    Animated.timing(slideText, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
      delay: 800,
    }).start();

    // Después de 3s, fade-out del Splash y mostrar contenido principal
    const timer = setTimeout(() => {
      Animated.timing(fadeOut, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }).start(() => {
        setShowMain(true);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const rotateInterpolate = rotateLogo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "10deg"],
  });

  // Función enviarDatos 
  const enviarDatos = () => {
    if (nombre.trim() === "" || Correoelectronico.trim() === "") {
      Alert.alert("Error", "Por favor completa todos los campos");
      alert("Error: Por favor completa todos los campos");
      return;
    }

    if (!Correoelectronico.includes("@") || !Correoelectronico.includes(".")) {
      Alert.alert("Error", "Correo electrónico no válido");
      alert("Error: Correo electrónico no válido");
      return;
    }

    if (!aceptaTerminos) {
      Alert.alert("Error", "Debes aceptar los términos y condiciones");
      alert("Error: Debes aceptar los términos y condiciones");
      return;
    }

    Alert.alert("¡Éxito!", "Datos enviados correctamente");
    alert("¡Éxito! Datos enviados correctamente");
  };

  // Si el splash no ha terminado
  if (!showMain) {
    return (
      // Splash animado 
      <Animated.View style={[styles.container, { opacity: fadeOut }]}>
        <Animated.Image
          source={require("../assets/logofer.png")}
          resizeMode="contain"
          style={[
            styles.logoImage,
            {
              opacity: fadeLogo,
              transform: [{ scale: scaleLogo }, { rotate: rotateInterpolate }],
            },
          ]}
        />
        <Animated.Text
          style={[styles.text, { transform: [{ translateY: slideText }] }]}
        >
          ¡BIENVENIDA FER!
        </Animated.Text>
        <Animated.View
          style={[
            styles.loader,
            {
              opacity: fadeLogo,
              transform: [
                {
                  translateX: slideText.interpolate({
                    inputRange: [0, height / 2],
                    outputRange: [0, -50],
                  }),
                },
              ],
            },
          ]}
        />
      </Animated.View>
    );
  }

  // Registro
  return (
    <ImageBackground
      source={require("../assets/korea.jpg")}
      style={styles.background}
    >
      <View style={styles.containergrad}>
       
          <Image source={require("../assets/logofer.png")} style={styles.logo} />

          <Text style={styles.title}>Registro de usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre Completo"
            placeholderTextColor="#e6e1e1"
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#e6e1e1"
            value={Correoelectronico}
            onChangeText={setCorreoelectronico}
          />

          <View style={styles.switchContainer}>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
              trackColor={{ false: "#b00d0dff", true: "#dfe8d8ff" }}
            />
            <Text style={styles.switchText}>Acepto los términos y condiciones</Text>
          </View>

          <Button title="Registrarse" onPress={enviarDatos} color="#e12a26ff" />
        </View>
    </ImageBackground>
  );
}

// Estilos
const styles = StyleSheet.create({
  // Splash 
  container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding:20,
  gap:10,
  backgroundColor: "#910303", //color del splash
},
  loader: {
    width: 60,
    height: 6,
    backgroundColor: "#ff8bf9ff",
    borderRadius: 3,
  },
  logoImage: {
    width: 300,
    height: 300,
    marginBottom: 5,
  },
  text: {
    color: "black",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },

  // Registro 
  containergrad: {
  width: "60%",
  borderWidth: 3,
  alignItems: "center",
  borderColor: "#8e2121aa",
  padding:10,
  borderRadius:9,
  borderRadius:9,
  backgroundColor: '#4c303080', // Transparente opaco
},
  logo: {
    width: 250,
    height: 250,
    marginBottom: 15,
    resizeMode: "contain",
  },
 background: {
  flex: 1,
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
},
  containergradText: {
    color: "white",
  },
  containerRegistro: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#e9e6e6ff",
     marginBottom: 10,
  },
  input: {
    color: "#f3efedff",
    width: "80%",
    borderWidth: 3,
    padding: 10,
    borderColor: "#f3efedff",
    borderRadius: 9,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  switchText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#e9d5d5ff",
  },
}); 