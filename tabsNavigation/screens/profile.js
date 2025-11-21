import { Text, StyleSheet, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <Ionicons name="person-outline" size={30} color="#1723a8ff" />
            <Text style={styles.title}>Perfil de usuario</Text>

            <Pressable
                style={[styles.button, styles.buttonProfile]}
                onPress={() => navigation.navigate('Detalle')}
            >
                <Text style={styles.buttonText}>Detalles de usuario</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1723a8ff',
        marginVertical: 10
    },
    button: {
        paddingVertical: 7,
        paddingHorizontal: 50,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonProfile: {
        backgroundColor: '#1723a8ff'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});