import { Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
    return (
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name="settings-outline" size={30} color="#a81790ff" />
                <Text style={styles.title}>Configuraciones de usuario</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#a81790ff',
  },
});