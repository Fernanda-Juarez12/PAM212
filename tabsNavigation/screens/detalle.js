import { View, Text, StyleSheet } from "react-native";

export default function Detalle() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles Usuario</Text>
            <Text style={styles.subtitle}>Usando Navegación Stack</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#5555ff',
  },
});
